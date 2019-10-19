//Objeto constante
// pessoa -> 123 -> {...}
const pessoa = {
    nome: 'João'
}

console.log(pessoa.nome)

//o objeto não altera o apontamento de memória, mas muda o valor
pessoa.nome = 'Pedro'

console.log(pessoa.nome)

// pessoa -> 456 -> {...}
/*
pessoa = {
    nome: 'Ana'
}
*/
console.log(pessoa.nome)

//congela o objeto e não consegue mais modificar o objeto (não altera nem adiciona)
Object.freeze(pessoa)
pessoa.nome = 'Augusto'
pessoa.end = 'Rua 123'
console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'Paulo'})
console.log(pessoaConstante)