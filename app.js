const http = require('http')

http.createServer((req, res) => {
  res.end('Servidor funfando!')
}).listen(3030, 'localhost')