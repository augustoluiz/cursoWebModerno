var numero = 1

{
    let numero = 2
    console.log('Dentro: '+numero)
}

//dentro imprime o valor do let, pois o escopo é local(escopo de bloco) e não global
console.log('Fora: '+numero)