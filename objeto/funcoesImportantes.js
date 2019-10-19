const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

//pega as chaves do objeto
console.log(Object.keys(pessoa))
//pega os valores do objeto
console.log(Object.values(pessoa))
//traz a relação completa de chave/valor
console.log(Object.entries(pessoa))
Object.entries(pessoa).forEach(element => {
    console.log(element)
});

//retirando diretamente o chave/valor
//utilizando o destructuring
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
});

//definindo um propriedade do objeto
//define a chave dataNascimento no objeto
//ao fazer isso, esse atributo fica em 'freeze'
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/02/2019'
})

console.log(pessoa)

//associa/concatena os valores de vários objetos ao objeto de destio
//se o atributo já existir no destino, permanece o último valor a concatenar
const dest = { a: 1}
const o1 = { b: 2 }
const o2 = {c: 3, a: 2}
const obj = Object.assign(dest, o1, o2)

console.log(obj)