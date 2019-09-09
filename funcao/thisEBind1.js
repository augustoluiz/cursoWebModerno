//com o bin vai funcionar, pois ira referenciar ao this.pessoa de Pessoa e portanto
//o contador irá funcionar e não ira retornar NaN
function Pessoa(){
    this.idade = 0

    setInterval(function (){
        this.idade++
        console.log(this.idade)   
    }.bind(this), 1000)
}

new Pessoa
