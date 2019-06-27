{
    var teste = 'teste'
    let teste1 = 'teste1'
}

//O var, mesmo estando em um bloco de código, fica acessível a todos os trechos do código
//O let não
console.log(teste)
console.log(teste1)

function testandoVar(){
    var testeVar = 'Teste do Var na Função'
    let testeLet = 'Teste do Let na Função'
}

//Se o var ou let estiverem em uma função, não são acessíveis fora dela
console.log(testeVar)
console.log(testeLet)