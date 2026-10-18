const http = require('http');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const rootDir = path.resolve(__dirname, '..');

const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0];
  if (reqPath === '/') reqPath = '/index.html';
  if (reqPath.endsWith('/')) reqPath += 'index.html';
  const filePath = path.join(rootDir, reqPath);
  if (fs.existsSync(filePath)) {
    const ext = path.extname(filePath);
    const mimeMap = {
      '.html': 'text/html',
      '.js': 'text/javascript',
      '.css': 'text/css',
      '.json': 'application/json',
      '.png': 'image/png',
      '.jpg': 'image/jpeg',
      '.svg': 'image/svg+xml'
    };
    res.writeHead(200, { 'Content-Type': mimeMap[ext] || 'text/plain' });
    fs.createReadStream(filePath).pipe(res);
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(8091, async () => {
  console.log('Test server running on port 8091');
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const chrome = spawn(chromePath, [
    '--headless=new',
    '--remote-debugging-port=9241',
    '--disable-gpu',
    '--no-sandbox',
    'http://127.0.0.1:8091/invite/?id=wedding-demo'
  ]);

  setTimeout(async () => {
    try {
      const resp = await fetch('http://127.0.0.1:9241/json');
      const tabs = await resp.json();
      const tab = tabs.find(t => t.type === 'page');
      
      const ws = new WebSocket(tab.webSocketDebuggerUrl);
      ws.addEventListener('open', () => {
        let msgId = 1;
        function send(method, params = {}) {
          return new Promise(resolve => {
            const id = msgId++;
            const handler = (event) => {
              const msg = JSON.parse(event.data);
              if (msg.id === id) {
                ws.removeEventListener('message', handler);
                resolve(msg.result);
              }
            };
            ws.addEventListener('message', handler);
            ws.send(JSON.stringify({ id, method, params }));
          });
        }

        (async () => {
          await send('Runtime.enable');
          await send('Page.enable');
          
          ws.addEventListener('message', (event) => {
            const msg = JSON.parse(event.data);
            if (msg.method === 'Runtime.exceptionThrown') {
              console.error('PAGE RUNTIME EXCEPTION:', JSON.stringify(msg.params.exceptionDetails, null, 2));
            }
            if (msg.method === 'Runtime.consoleAPICalled') {
              console.log('PAGE CONSOLE:', msg.params.type, msg.params.args.map(a => a.value || a.description).join(' '));
            }
          });

          await send('Page.reload');
          await new Promise(r => setTimeout(r, 1500));
          
          // Check countdown values
          const res1 = await send('Runtime.evaluate', {
            expression: `({
              days: document.getElementById('count-days')?.textContent,
              hours: document.getElementById('count-hours')?.textContent,
              mins: document.getElementById('count-mins')?.textContent,
              secs: document.getElementById('count-secs')?.textContent,
              hasCountDays: !!document.getElementById('count-days'),
              hasUpdateCountdown: typeof updateCountdown,
              bodyHtmlLength: document.body.innerHTML.length
            })`,
            returnByValue: true
          });
          console.log('Countdown check:', res1.result.value);

          // Wait 2 seconds
          await new Promise(r => setTimeout(r, 2000));
          const res2 = await send('Runtime.evaluate', {
            expression: `({
              days: document.getElementById('count-days')?.textContent,
              hours: document.getElementById('count-hours')?.textContent,
              mins: document.getElementById('count-mins')?.textContent,
              secs: document.getElementById('count-secs')?.textContent
            })`,
            returnByValue: true
          });
          console.log('Countdown values at t=2s:', res2.result.value);

          // Test different date strings
          const res3 = await send('Runtime.evaluate', {
            expression: `
              const testDates = [
                'Sunday, 15th December 2026',
                '15/12/2026',
                '15-12-2026',
                '2026-12-15',
                'Saturday, 12th September',
                '18th December'
              ];
              testDates.map(d => {
                const clean = d.replace(/(\\d+)(st|nd|rd|th)/gi, '$1');
                return { original: d, clean: clean, parsed: Date.parse(clean), isValid: !isNaN(Date.parse(clean)) };
              });
            `,
            returnByValue: true
          });
          console.log('Date tests:', JSON.stringify(res3.result.value, null, 2));

          chrome.kill();
          server.close();
          process.exit(0);
        })();
      });
    } catch (err) {
      console.error('Error:', err);
      chrome.kill();
      server.close();
      process.exit(1);
    }
  }, 2000);
});
