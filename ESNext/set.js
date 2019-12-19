// não aceita repetição e não é indexado
const times = new Set()
times.add('Corinthians')
times.add('Palmeiras')
times.add('São Paulo')

// não aceita repetição, logo, ignora
times.add('Corinthians')

console.log(times)
console.log(times.has('Palmeiras'))
times.delete('São Paulo')
console.log(times.size)

const nomes = ['Raquel', 'Julia', 'Lucas', 'Lucas']
const nomeSet = new Set(nomes)
console.log(nomes)
console.log(nomeSet)