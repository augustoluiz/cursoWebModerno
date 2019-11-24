Array.prototype.filter1 = function(callback){
    novoArray = []
    arrayRejeitados = []
    for(let i = 0; i < this.length; i ++){
        let rt_callback = callback(this[i])
        if(rt_callback){
            novoArray.push(rt_callback)
        }
    }
    return novoArray
}
//O filter é o Map com alguma condição de filtro embutida
const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de plástico', preco: 18.99, fragil: false}
]

const produtos_frageis = produtos.filter(function(e){
    if(e.fragil){
        return e
    }
})

const produtos_nao_frageis = produtos.filter(function(e){
    if(!e.fragil){
        return e
    }
})

const produtos_baratos = produtos.filter1(function(e){
    if(e.preco < 100){
        return e
    }
})
console.log(produtos_frageis)
console.log("*****************************")
console.log(produtos_nao_frageis)
console.log("*****************************")
console.log(produtos_baratos)