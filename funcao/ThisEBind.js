const pessoa = {
    saudacao : 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}


pessoa.falar()
    
const falar = pessoa.falar
falar()

//o bind referencia o objeto pessoa para que a funcao falar() possa ser executada corretamente
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()