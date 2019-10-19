//cadeia de protótitpos (prototype chain)
const avo = {attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B'}
const filho = {__proto__: pai, attr3: 'C'}

//o __proto__ funciona como hernaça
console.log(filho.attr1)
console.log(filho.__proto__.__proto__)

const carro = {
    velAtual: 0,
    velMax: 200,
    aceleraMais(delta) {
        if (this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}km/h de ${this.velMax}km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324,
    __proto__: carro
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

//outra forma de definir a herança
Object.setPrototypeOf(volvo, carro)

ferrari.aceleraMais(325)
volvo.aceleraMais(200)
console.log(ferrari.status())
console.log(volvo.status())