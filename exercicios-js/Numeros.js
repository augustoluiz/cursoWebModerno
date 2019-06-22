const peso1 = 1.0
//outra forma de atribuir um valor number
const peso2 = Number('2.0')

console.log(peso1, peso2)
//verifica se o valor é inteiro
console.log(Number.isInteger(peso1))

//operações com numbers
const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2)

//a função toFixed determina a quantidade de casas decimais após a vírgula
console.log(media.toFixed(2))
//converte para String
console.log(media.toString())
//converte para binário
console.log(media.toString(2))