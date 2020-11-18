const http = require('http')

http.createServer((req, res) => {
  res.end('Servidor funcionando!')
}).listen(3030, 'localhost')