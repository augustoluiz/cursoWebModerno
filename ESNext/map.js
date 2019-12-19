const tecnologias = new Map()
tecnologias.set('react', {framework: false})
tecnologias.set('angular', {framework: true})

console.log(tecnologias.get('react'))

const chaves_variadas = new Map([
    [function () { }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número'],
])

console.log(chaves_variadas.has(123))
chaves_variadas.delete(123)
console.log(chaves_variadas.has(123))
console.log(chaves_variadas.size)