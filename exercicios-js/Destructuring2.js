//extraindo valores de arrays
const [a] = [10]
console.log(a)

const [n1, n2, n3, ,n5 = 5, n6] = [1, 2, 3, 4]
console.log(n1, n2, n5, n6)

const [, [, nota]] = [[1,2,3],[4,5]]

console.log(nota)