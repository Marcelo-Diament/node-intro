const http = require('http')
http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/plain; charset=utf-8'
  })
  console.log('Servidor rodando corretamente!')
  switch (req.url) {
    case '/':
      res.end('Olá! Você está na página Inicial.')
      break
    case '/sobre':
      res.end('Olá! Você está na página Sobre.')
      break
    case '/produtos':
      res.end('Olá! Você está na página Produtos.')
      break
    default:
      res.end(`Ops! Parece que não encontramos a página ${req.url.replace('/', '')}`)
      break
  }
}).listen(3030, 'localhost')