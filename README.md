## PARTE 1 | Brincando com o node.js de forma básica

1. Instalar o [node.js](https://nodejs.org/en/) e garantir sua instalação verificando sua versão (`node -v`).

2. Criar o arquivo **app.js** na raíz.

3. Incluir um `console.log('hey')` e rodar `node app.js` no terminal - deve exibir 'hey' no terminal.

4. Criar o arquivo **cumprimentar.js** na pasta **modules** (necessário criá-la) e incluir o corpo:

``` js
const cumprimentar = nome => `Olá ${nome}`
module.exports = cumprimentar
```

5. Apagar o `console.log` anterior, importar o módulo **cumprimentar** no **app.js**, criar uma const 'nome' e chamar a função `cumprimentar()` passando `nome` como argumento:

``` js
const cumprimentar = require('./modules/cumprimentar')
const nome = 'Fulano'
console.log(cumprimentar(nome))
```

## PARTE 2 | Criando um servidor

1. Vamos limpar nosso arquivo e importar o módulo nativo do node.js **http**

 `const http = require('http')`

2. Agora vamos 'levantar' o servidor, declarar sua função callback (que recebe os argumentos `req` - requisição ou _request_ - e `res` - resposta ou _response_) e declarar a porta que será 'escutada' (no exemplo,        `3030`):

``` js
http.createServer((req, res) => {
    res.end('Servidor funfando!')
}).listen(3030, 'localhost')
```

O método `end` nos permite passar o corpo do conteúdo e fecha nossa resposta.

Para vermos o servidor funcionando, precisamos rodar o servidor novamente ( `node app.js` ) e acessar o endereço 'localhost:3030'.

E para 'derrubarmos' o servidor, basta pressionarmos 'Control + C' no terminal.

Obs.: a cada atualização, precisamos derrubar e levantar o servidor novamente (além de atualizar o _browser_/navegador). Mas em breve vamos conhecer uma ferramenta que nos poupará desse trabalho desnecessário.

3. Bom, brincamos um pouquinho já passando uma _response_. Mas precisamos definir um _Header_ para nossa _response_, onde passaremos um _status code_ (lembra da API, que nos retorna 200 em caso de sucesso?) e o _Header_ em si, declarando qual o tipo de conteúdo a ser enviado para o cliente. Depois podemos passar o conteúdo a ser exibido novamente - também vamos incluir um `console.log()` para vermos um retorno também no terminal. Então mão na massa, vamos redefinir nossa _response_!

``` js
http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    })
    console.log('Servidor rodando corretamente!')
    res.end('Servidor funfando de novo, agora de modo mais correto. =)')
}).listen(3030, 'localhost')
```

Perceba que a cada _refresh_ no _browser_ nosso `console.log` é exibido novamente.

4. Vamos mudar o tipo de conteúdo para HTML, só para brincarmos mais um pouco. =)

``` js
http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'HTML'
    })
    console.log('Servidor rodando corretamente!')
    res.end('<h1>Servidor funfando de novo, agora de modo mais correto.</h1><h2>=)</h2>')
}).listen(3030, 'localhost')
```

Tranquilo, né?

5. Bora passar um JSON agora, só pra usarmos os principais tipos.

``` js
http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'application ld/json'
    })
    console.log('Servidor rodando corretamente!')
    res.end('[{"nome":"Fulano","sobrenome":"Silva"},{"nome":"Ciclano","sobrenome":"Silva"},{"nome":"Beltrano","sobrenome":"Silva"}]')
}).listen(3030, 'localhost')
```

**Dica:** instale a extensão JSON Viewer para visualizar o JSON mais bem formatado.