const nome = 'Augusto'
const concatenacao = 'Olá '+nome+'!'
console.log(concatenacao)

//O template string consegue identificar a quebra de linha também
const template = `
    Olá
    ${nome} !`
console.log(template)

//O template string efetua operações matemáticas dentro das chaves tbm
console.log(`1 + 1 = ${1+1}`)

//usando arrow function com template string
const up = texto => texto.toUpperCase()
console.log(`Ei, ${up('cuidado')}!`)
//resultado --> 'Ei, CUIDADO!'