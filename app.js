const http = require('http')

http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'application ld/json'
  })
  console.log('Servidor rodando corretamente!')
  res.end('[{"nome":"Fulano","sobrenome":"Silva"},{"nome":"Ciclano","sobrenome":"Silva"},{"nome":"Beltrano","sobrenome":"Silva"}]')
}).listen(3030, 'localhost')