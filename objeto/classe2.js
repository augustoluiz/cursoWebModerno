class Avo{
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo{
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai{
    constructor(sobrenome) {
        super('Silva')
    }
}

const avo = new Avo('Silva')
const pai = new Pai('Sousa', 'Analista')
const filho = new Filho()

console.log(avo)
console.log(pai)
console.log(filho)