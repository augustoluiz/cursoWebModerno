const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false},
    { nome: 'Maria', nota: 9.2, bolsista: true},
    { nome: 'Pedro', nota: 9.8, bolsista: false},
    { nome: 'Ana', nota: 8.7, bolsista: true}
]

//Desafio 1 - Todos os alunos são bolsistas?

const desafio1 = alunos.map(a => a.bolsista).reduce(function(acumulador, atual){
    acumulador = acumulador ? atual : acumulador
    return acumulador
})

desafio1 ? console.log('Todos os alunos são bolsistas') : console.log('Todos os alunos não são bolsistas')

//Desafio 2 - Algum aluno é bolsista?
const desafio2 = alunos.map(a => a.bolsista).reduce(function(acumulador, atual){
    acumulador = acumulador ? (atual ? atual : acumulador) : atual
    return acumulador
})

desafio2 ? console.log('Pelo m enos 1 aluno é bolsista') : console.log('Não existem alunos bolsistas')


//Resposta usando arrow function
const todosBolsistas = (resultado, bolsista) => resultado && bolsista 
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

const algumBolsista = (resultado, bolsista) => resultado || bolsista 
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))