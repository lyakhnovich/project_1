const http = require('http');
const server =  http.createServer();

server.on('request', (req, res) => {
  res.end('server run blyat'); });

server.listen(8000, () => console.log('server run blyat'));