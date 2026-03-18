import { createServer } from 'http';
import { readFile } from 'fs/promises';
import { join, extname } from 'path';
import { existsSync } from 'fs';

const DIST = 'C:\\Users\\pheni\\projects\\patrickhenigan.com\\dist';
const PORT = 4321;

const MIME = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
};

createServer(async (req, res) => {
  let url = req.url.split('?')[0];
  let filePath = join(DIST, url);

  if (!extname(filePath)) {
    const indexPath = join(filePath, 'index.html');
    if (existsSync(indexPath)) filePath = indexPath;
    else filePath += '.html';
  }

  try {
    const data = await readFile(filePath);
    const ext = extname(filePath);
    res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
    res.end(data);
  } catch {
    try {
      const data = await readFile(join(DIST, '404.html'));
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end(data);
    } catch {
      res.writeHead(404);
      res.end('Not Found');
    }
  }
}).listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
