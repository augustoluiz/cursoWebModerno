function area (largura, altura){
    const area = largura * altura
    if(area > 20){
        console.log(`Valor acima do permitido: ${area}m2.`)
    } else{
        console.log(`Área: ${area}`)
    }
}

area(2,2)
area(5,5)
//retorna NaN
area(2)
//retorna NaN
area()
//ignora o último valor
area(2,3,4)