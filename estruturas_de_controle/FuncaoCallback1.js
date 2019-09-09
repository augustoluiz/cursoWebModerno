const fabricantes = ['Mercedes', 'Audi', 'Ferrari']

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
//retorna os valores do array
fabricantes.forEach(function(a){
    console.log(a)
})