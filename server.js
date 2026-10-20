// Serveur statique minimal pour tester localement (http://localhost:3000)
const http = require('http');
const fs = require('fs');
const path = require('path');

const types = { '.html': 'text/html', '.js': 'text/javascript' };
http
  .createServer((req, res) => {
    const file = req.url === '/' ? 'index.html' : path.basename(req.url);
    const full = path.join(__dirname, 'dist', file);
    fs.readFile(full, (err, data) => {
      if (err) { res.writeHead(404); return res.end('Not found'); }
      res.writeHead(200, { 'Content-Type': types[path.extname(full)] || 'text/plain' });
      res.end(data);
    });
  })
  .listen(3000, () => console.log('http://localhost:3000'));
