//Uma vantagem do ArrowFunction é que com o this, eu já tenho a referência dele
//Não preciso usar o Bind para referenciar o this.idade a Pessoa()
function Pessoa() {
    this.idade = 0 

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}


new Pessoa()