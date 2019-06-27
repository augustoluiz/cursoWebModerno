var numero = 1
var numero1 = 2

{
    var numero = 2
    console.log('Dentro: '+numero)
}

//vai sobrescrever
console.log('Fora: '+numero)

//Não há sobrescrita
function teste(){
    var numero1 = 3
    console.log('Dentro: '+numero1)
}

teste()
console.log('Fora: '+numero1)