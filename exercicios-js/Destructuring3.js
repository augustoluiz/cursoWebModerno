//Usando o destructuring na função
function rand({min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = {min: 5, max: 100}
console.log(rand({min: 2, max: 30}))
console.log(rand({}))
console.log(rand(obj))