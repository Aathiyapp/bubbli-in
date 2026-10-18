const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');

async function captureScreenshot({ url, width, height, outputFile, fullPage = false }) {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9222 + Math.floor(Math.random() * 500);
  const p = spawn(chromePath, [
    '--headless=new',
    `--remote-debugging-port=${port}`,
    '--hide-scrollbars',
    '--disable-gpu',
    'about:blank'
  ]);

  try {
    // Wait for CDP endpoint
    let wsUrl = null;
    for (let i = 0; i < 20; i++) {
      await new Promise(r => setTimeout(r, 150));
      try {
        const res = await new Promise((resolve, reject) => {
          const req = http.request({
            hostname: '127.0.0.1',
            port: port,
            path: `/json/new?${encodeURIComponent(url)}`,
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

    if (!wsUrl) throw new Error('Failed to connect to Chrome WebSocket');

    const ws = new WebSocket(wsUrl);
    await new Promise((resolve, reject) => {
      ws.onopen = resolve;
      ws.onerror = reject;
    });

    let id = 1;
    function send(method, params = {}) {
      return new Promise((resolve, reject) => {
        const msgId = id++;
        const handler = (event) => {
          try {
            const data = JSON.parse(event.data);
            if (data.id === msgId) {
              ws.removeEventListener('message', handler);
              if (data.error) reject(data.error);
              else resolve(data.result);
            }
          } catch (e) { reject(e); }
        };
        ws.addEventListener('message', handler);
        ws.send(JSON.stringify({ id: msgId, method, params }));
      });
    }

    await send('Page.enable');
    await send('Emulation.setDeviceMetricsOverride', {
      width: width,
      height: height,
      deviceScaleFactor: 1,
      mobile: width < 768
    });

    await send('Page.navigate', { url });
    await new Promise(r => setTimeout(r, 1200));

    const shot = await send('Page.captureScreenshot', {
      format: 'png',
      captureBeyondViewport: fullPage
    });

    fs.writeFileSync(outputFile, Buffer.from(shot.data, 'base64'));
    console.log(`Saved screenshot to ${outputFile} (${width}x${height})`);

    ws.close();
  } finally {
    p.kill();
  }
}

if (require.main === module) {
  const args = process.argv.slice(2);
  const url = args[0] || 'http://localhost:8080/';
  const width = parseInt(args[1] || '375', 10);
  const height = parseInt(args[2] || '812', 10);
  const file = args[3] || 'screenshot_375.png';
  captureScreenshot({ url, width, height, outputFile: file }).then(() => process.exit(0)).catch(e => {
    console.error(e);
    process.exit(1);
  });
}

module.exports = { captureScreenshot };
