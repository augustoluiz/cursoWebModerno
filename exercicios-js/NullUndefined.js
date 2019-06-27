let valor //não inicializada
//vai mostrar undefined, ou seja, a variável foi declarada mas não inicalizada
console.log(valor)

//não há apontamento para endereço de memória
valor = null
console.log(valor)

const produto = {}
//retorna undefined, pois preco não foi inicializado
console.log(produto.preco)

produto.preco = 3.50
console.log(produto)

produto.preco = null
//retorna false
console.log(!!produto.preco)