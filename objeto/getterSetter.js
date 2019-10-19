//convenção para definir uma variável como privada
const sequencia = {
    _valor: 1,
    get valor(){
        return this._valor++
    },
    set valor(valor){
        if (valor > this._valor){
            this._valor = valor
        }
    }
}

// como o get e set é reservado, não precisa chamar a
// função para pegar e/ou adicionar o valor
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)