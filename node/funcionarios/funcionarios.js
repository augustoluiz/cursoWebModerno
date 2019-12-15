const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data
    const resp = funcionarios.filter(e => {
        if(e.pais === 'China' && e.genero === 'F')
        return e
    }).reduce((menor, atual) => {
        menor = menor.salario < atual.salario ? menor : atual
        return menor   
    });
    console.log(resp)
})