const http = require('http')
const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra.toUpperCase()}.json`
    http.get(url, res => {
        let resultado = ''
        res.on('data', dados => {
            resultado += dados
        })
        res.on('end', () => {
            callback(JSON.parse(resultado))
        })
    })
}

let nomes = []
getTurma('A', (e) => {
    nomes = nomes.concat(e.map(a => `A: ${a.nome}`))
    getTurma('B', (e) => {
        nomes = nomes.concat(e.map(a => `B: ${a.nome}`))
        getTurma('C', (e) => {
            nomes = nomes.concat(e.map(a => `C: ${a.nome}`))
            console.log(nomes)
        })
    })
})