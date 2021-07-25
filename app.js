const http = require('http')
// http.createServer((req, res) => {
//   res.end('Servidor funfando!')
// }).listen(3030, 'localhost')

// http.createServer((req, res) => {
//   res.writeHead(200, {
//     'Content-Type': 'text/plain'
//   })
//   console.log('Servidor rodando corretamente!')
//   res.end('Servidor funfando de novo, agora de modo mais correto. =)')
// }).listen(3030, 'localhost')

// http.createServer((req, res) => {
//   res.writeHead(200, {
//     'Content-Type': 'HTML'
//   })
//   console.log('Servidor rodando corretamente!')
//   res.end('<h1>Servidor funfando de novo, agora de modo mais correto.</h1><h2>=)</h2>')
// }).listen(3030, 'localhost')

// http.createServer((req, res) => {
//   res.writeHead(200, {
//     'Content-Type': 'application ld/json'
//   })
//   console.log('Servidor rodando corretamente!')
//   res.end('[{"nome":"Fulano","sobrenome":"Silva"},{"nome":"Ciclano","sobrenome":"Silva"},{"nome":"Beltrano","sobrenome":"Silva"}]')
// }).listen(3030, 'localhost')

// http.createServer((req, res) => {
//   res.writeHead(200, {
//     'Content-Type': 'text/plain, charset=utf-8'
//   })
//   console.log('Servidor rodando corretamente!')
//   switch(req.url) {
//     case '/':
//       res.end(`Você está na página inicial`)
//       break
//     case '/sobre':
//       res.end(`Você está na página Sobre`)
//       break
//     case '/produtos':
//       res.end(`Você está na página Produtos`)
//       break
//     default:
//       res.end(`Ops! Parece que não encontramos a página ${req.url}`)
//   }
// }).listen(3030, 'localhost')
http.createServer((req, res) => {
  if (/admin/.test(req.url)) {
    res.writeHead(403, {
      'Content-Type': 'application ld/json;charset=utf-8'
    })
    res.end('{"code": 403,"error":"Área restrita"}')
  } else {
    res.writeHead(200, {
      'Content-Type': 'text/html;charset=utf-8'
    })
    switch (req.url) {
      case '/':
        return res.end(`<h1>Olá! Você está na página Inicial.</h1>`)
      case '/sobre':
        return res.end(`<h1>Olá! Você está na página Sobre.</h1>`)
      case '/produtos':
        return res.end(`<h1>Olá! Você está na página Produtos.</h1>`)
      default:
        return res.end(`<h1>Ops! Parece que não encontramos a página ${req.url}... Em caso de dúvidas, chame o cara do TI. huahuahuha</h1>`)
    }
  }
}).listen(3030, 'localhost', () => console.log('Servidor rodando...'))