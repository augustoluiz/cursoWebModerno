const filhas = ['Valeskah', 'Cibalena']
const filhos = ['Washington', 'Uesclei']

const todos = filhas.concat(filhos)

console.log(todos)

//concatenado e ordenadno
console.log(filhas.concat(filhos).sort())

//concatenado em um array vazio
//resultado: [1, 2, 3, 4, 5, 6, 7]
console.log([].concat([1, 2], [3, 4], 5, [6, 7]))