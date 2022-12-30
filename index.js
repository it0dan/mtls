import { createServer } from 'https';
import { readFileSync } from 'fs';

const hostname = 'localhost';
const port = 3000;

const options = { 
    ca: readFileSync('certificates/ca.crt'), 
    cert: readFileSync('certificates/server.crt'), 
    key: readFileSync('certificates/server.key'), 
    rejectUnauthorized: true,
    requestCert: true, 
}; 

const server = createServer(options, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end('{"message": "mTLS communication is working... 😎🔐"}');
});

server.listen(port, hostname, () => {
  console.log(`👌👌🔥 Server running at http://${hostname}:${port}/ 🚀`);
});