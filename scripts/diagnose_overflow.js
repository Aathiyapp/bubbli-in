const { spawn } = require('child_process');
const http = require('http');
const path = require('path');
const fs = require('fs');

async function main() {
  // Start simple HTTP server for current directory
  const server = http.createServer((req, res) => {
    let filePath = path.join(__dirname, '..', req.url.split('?')[0]);
    if (filePath.endsWith(path.sep)) filePath += 'index.html';
    if (!fs.existsSync(filePath)) {
      res.writeHead(404);
      res.end('Not found');
      return;
    }
    const ext = path.extname(filePath);
    const contentTypes = {
      '.html': 'text/html',
      '.css': 'text/css',
      '.js': 'application/javascript',
      '.png': 'image/png',
      '.jpg': 'image/jpeg',
      '.svg': 'image/svg+xml'
    };
    res.writeHead(200, { 'Content-Type': contentTypes[ext] || 'text/plain' });
    fs.createReadStream(filePath).pipe(res);
  });

  await new Promise(r => server.listen(8081, r));
  console.log('Server listening on http://127.0.0.1:8081');

  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9333;
  const p = spawn(chromePath, [
    '--headless=new',
    `--remote-debugging-port=${port}`,
    '--hide-scrollbars',
    '--disable-gpu',
    'about:blank'
  ]);

  try {
    let wsUrl = null;
    for (let i = 0; i < 25; i++) {
      await new Promise(r => setTimeout(r, 150));
      try {
        const res = await new Promise((resolve, reject) => {
          const req = http.request({
            hostname: '127.0.0.1',
            port: port,
            path: '/json/new?about:blank',
            method: 'PUT'
          }, resp => {
            let d = '';
            resp.on('data', c => d += c);
            resp.on('end', () => resolve(JSON.parse(d)));
          });
          req.on('error', reject);
          req.end();
        });
        if (res && res.webSocketDebuggerUrl) {
          wsUrl = res.webSocketDebuggerUrl;
          break;
        }
      } catch (_) {}
    }

    if (!wsUrl) throw new Error('Could not connect to Chrome CDP');

    const ws = new WebSocket(wsUrl);
    await new Promise(r => ws.onopen = r);

    let msgId = 1;
    function send(method, params = {}) {
      return new Promise((resolve, reject) => {
        const id = msgId++;
        const handler = (event) => {
          const data = JSON.parse(event.data);
          if (data.id === id) {
            ws.removeEventListener('message', handler);
            if (data.error) reject(data.error);
            else resolve(data.result);
          }
        };
        ws.addEventListener('message', handler);
        ws.send(JSON.stringify({ id, method, params }));
      });
    }

    await send('Page.enable');

    for (const testUrl of ['http://127.0.0.1:8081/studio.html', 'http://127.0.0.1:8081/index.html']) {
      console.log('\n--- Testing URL:', testUrl, 'at 375px width ---');
      await send('Emulation.setDeviceMetricsOverride', {
        width: 375,
        height: 812,
        deviceScaleFactor: 2,
        mobile: true
      });

      await send('Page.navigate', { url: testUrl });
      await new Promise(r => setTimeout(r, 2000));

      const evalRes = await send('Runtime.evaluate', {
        expression: `(() => {
          const docWidth = document.documentElement.clientWidth;
          const bad = [];
          document.querySelectorAll('*').forEach(el => {
            const r = el.getBoundingClientRect();
            if (r.right > docWidth + 1 || el.scrollWidth > docWidth + 1) {
              bad.push({
                tag: el.tagName,
                id: el.id,
                className: (typeof el.className === 'string' ? el.className : '').slice(0, 80),
                right: Math.round(r.right),
                width: Math.round(r.width),
                scrollWidth: el.scrollWidth,
                parentTag: el.parentElement ? el.parentElement.tagName : null,
                parentId: el.parentElement ? el.parentElement.id : null
              });
            }
          });
          return { docWidth, badCount: bad.length, bad: bad.slice(0, 15) };
        })()`,
        returnByValue: true
      });

      console.log('Result:', JSON.stringify(evalRes.result.value, null, 2));
    }

    ws.close();
  } finally {
    p.kill();
    server.close();
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
