const http = require('http')

http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'HTML'
  })
  console.log('Servidor rodando corretamente!')
  res.end('<h1>Servidor rodando!</h1><h2>Uhuuuu!</h2>')
}).listen(3030, 'localhost')