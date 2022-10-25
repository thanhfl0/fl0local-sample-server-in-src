const http = require('http');

const server = http.createServer((req, res) => {
  res.end('test-1');
});

server.listen(process.env.PORT ?? 8081);
