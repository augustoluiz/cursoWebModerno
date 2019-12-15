const fs = require('fs')
const caminho = __dirname + '/arquivo.json'

//sincrono
const conteudo = fs.readFileSync(caminho, "utf-8")
console.log(conteudo)

//assincrono
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}: ${config.db.port}`)
})

fs.readdir(__dirname, (err, arquivos) =>{
    console.log('Conteudo da pasta')
    console.log('Todos os componentes')
    console.log(arquivos)
    console.log('Apenas arquivos')
    console.log(arquivos.filter(e => e.includes('.')))
    console.log('Apenas as pastas')
    console.log(arquivos.filter(e => !e.includes('.')))
})