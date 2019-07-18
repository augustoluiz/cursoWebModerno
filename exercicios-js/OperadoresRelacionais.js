//Operadores Relacionais no Js!
//São binários

//compara valor
console.log('01)', '1' == 1)
//compara valor e tipo de variável
console.log('02)', '1' === 1)

console.log('03)', '3' != 3)
console.log('04)', '3' !== 3)

console.log('05)', '3' < 2)
console.log('06)', '3' > 2)
console.log('07)', '3' <= 2)
console.log('08)', '3' >= 2)

const d1 = new Date(0)
const d2 = new Date(0)

//compara o endereco de memória
console.log('09)', d1 == d2)
console.log('10)', d1 === d2)

console.log('11)', d1.getTime() == d2.getTime())
console.log('12)', d1.getTime() === d2.getTime())

console.log(d1)
console.log(d2)
console.log(d1.getTime())
console.log(d2.getTime())

console.log('13)', undefined == null)
console.log('14)', undefined === null)

//Tipo do undefined: undefined
console.log('Tipo do undefined: '+typeof(undefined))
//Tipo do null: object
console.log('Tipo do null: '+typeof(null))