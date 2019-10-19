function Pessoa (nome) {
    return {
        nome: nome
    }
}

const p1 = Pessoa('Augusto')

console.log(`Meu nome é ${p1.nome}`)


//outra forma

function pessoaFactory (nome) {
    this.nome = nome

    this.falar = function() {
        console.log(`Meu nome é ${this.nome}`)
    }
}


const p2 = new pessoaFactory('Augusto')

p2.falar()