function imprimirResultado(num){
    if(num > 7){
        console.log('Aprovado')
    } else {
        console.log('Reprovado')
    }
}

imprimirResultado(8)
imprimirResultado(4)
//Por ser fracamente tipado, vai printar 'Reprovado' 
imprimirResultado('Epa!')