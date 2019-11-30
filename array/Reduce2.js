Array.prototype.reduce2 = function(callback, inicio){
    const indice = inicio ? 0 : 1
    let acumulador = inicio ? inicio : this[0]
    
    for(let i = indice; i < this.length; i++){
        acumulador = callback(acumulador, this[i])
    } 
}

const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false},
    { nome: 'Maria', nota: 9.2, bolsista: true},
    { nome: 'Pedro', nota: 9.8, bolsista: false},
    { nome: 'Ana', nota: 8.7, bolsista: true}
]

const resultado = alunos.map(a => a.nota).reduce2(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
}, 10)