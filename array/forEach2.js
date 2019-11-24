const valores = ['a', 'b', 'c']

Array.prototype.paraCada = function(callback){
    for(let i = 0; i < this.length; i++){
        callback(this[i], i, this)
    }
}

Array.prototype.teste = function(testes){
    for(let i = 0; i < this.length; i++){
        testes(this[i])
    }
}

valores.paraCada(function(a){
   // console.log(a)
})

valores.teste(valor => {console.log(valor)})