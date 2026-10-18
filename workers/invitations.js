const JSON_HEADERS = {
  'Content-Type': 'application/json; charset=utf-8',
  'Cache-Control': 'no-store',
  'X-Content-Type-Options': 'nosniff'
};
const MAX_BODY_BYTES = 2 * 1024 * 1024;
const MAX_CREATES_PER_HOUR = 20;

function json(data, status = 200) {
  return new Response(JSON.stringify(data), { status, headers: JSON_HEADERS });
}

function isAllowedOrigin(request) {
  const origin = request.headers.get('Origin');
  if (!origin) return true;
  try {
    const url = new URL(origin);
    return url.hostname === 'bubbli.in' || url.hostname === 'www.bubbli.in' ||
      url.hostname === 'localhost' || url.hostname === '127.0.0.1';
  } catch (_) {
    return false;
  }
}

export default {
  async fetch(request, env) {
    if (!isAllowedOrigin(request)) return json({ error: 'Origin not allowed' }, 403);
    if (!env.INVITATIONS) return json({ error: 'Invitation storage is not configured' }, 503);

    const url = new URL(request.url);
    if (url.pathname === '/api/invitations' && request.method === 'POST') {
      const declaredLength = Number(request.headers.get('Content-Length') || 0);
      if (declaredLength > MAX_BODY_BYTES) return json({ error: 'Invitation is too large' }, 413);

      let invitation;
      try {
        const body = await request.text();
        if (new TextEncoder().encode(body).byteLength > MAX_BODY_BYTES) {
          return json({ error: 'Invitation is too large' }, 413);
        }
        invitation = JSON.parse(body);
      } catch (_) {
        return json({ error: 'Invalid JSON body' }, 400);
      }

      if (!invitation || typeof invitation !== 'object' ||
          typeof invitation.id !== 'string' || !/^[a-z0-9-]{1,100}$/.test(invitation.id) ||
          typeof invitation.templateId !== 'string' ||
          !invitation.eventData || typeof invitation.eventData !== 'object' || Array.isArray(invitation.eventData)) {
        return json({ error: 'Invalid invitation data' }, 400);
      }

      const clientIp = request.headers.get('CF-Connecting-IP') || 'unknown';
      const rateKey = `rate:${clientIp}`;
      const rate = await env.INVITATIONS.get(rateKey, 'json');
      const now = Date.now();
      const currentRate = rate && now - rate.startedAt < 3600000 ? rate : { startedAt: now, count: 0 };
      if (currentRate.count >= MAX_CREATES_PER_HOUR) return json({ error: 'Too many invitations. Try again later.' }, 429);

      const key = `invite:${invitation.id}`;
      if (await env.INVITATIONS.get(key)) return json({ error: 'This invitation link already exists' }, 409);

      const record = {
        id: invitation.id,
        templateId: invitation.templateId,
        eventData: invitation.eventData,
        aspectRatio: invitation.aspectRatio || '4:5',
        publishedAt: Number(invitation.publishedAt) || now
      };
      await Promise.all([
        env.INVITATIONS.put(key, JSON.stringify(record)),
        env.INVITATIONS.put(rateKey, JSON.stringify({ startedAt: currentRate.startedAt, count: currentRate.count + 1 }), {
          expirationTtl: 3600
        })
      ]);
      return json({ id: invitation.id }, 201);
    }

    const match = url.pathname.match(/^\/api\/invitations\/([a-z0-9-]{1,100})$/);
    if (match && request.method === 'GET') {
      const record = await env.INVITATIONS.get(`invite:${match[1]}`, 'json');
      return record ? json(record) : json({ error: 'Invitation not found' }, 404);
    }

    return json({ error: 'Not found' }, 404);
  }
};
