//função factory é uma função que retorna um objeto
function criarPessoa(nome, sobrenome) {
    return {
        nome: nome,
        sobrenome: sobrenome
    }
}

console.log(criarPessoa('Augusto', 'Luiz').nome)
console.log(criarPessoa('Augusto', 'Luiz').sobrenome)