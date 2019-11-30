const arq1 = require('./arq1')
const arq2 = require('./arq2')
const _ = require('lodash')

const transacoes = require('./data/transacoes.json')
const VB0I002 = require('./VB0I002.json')
//const objVB0I002 = JSON.parse(VB0I002)

console.log(transacoes.transacao.nome)

const chaves = Object.keys(transacoes).map(e => e)

//console.log(chaves)

Object.keys(VB0I002).forEach(e => console.log(e))

var http = require('http');

http.createServer(function (req, res) {
  console.log(req.originalUrl)
  var html = buildHtml(req);

  res.writeHead(200, {
    'Content-Type': 'text/html',
    'Content-Length': html.length,
    'Expires': new Date().toUTCString()
  });
  const html_teste = require('./index.html')
  console.log(html_teste)
  res.end(html);
}).listen(8080);



function buildHtml(req) {
  var header = ''
  let body = []
  for(let i in chaves){
      body.push(`<a href='1'><li>${chaves[i]}</li></a>`)
  }
  
  let bd = ''
  body.forEach(function(e){
    bd = bd + ' ' + e
  })
  // concatenate header string
  // concatenate body string
 
  return '<!DOCTYPE html>'
       + '<html><head>' + header + '</head><body>' + 
       bd 
       + '</body></html>';
};

//arq2.mostraData()
//console.log(arq1)