//Closures é o escopo criado quando uma função é declararda
//Esse escopo permite a função acessar e manipular as variáveis externas à função

//Contexto léxico em ação

const x = 'Global'

function fora(){
    const x = 'Local'
    function dentro(){
        return x
    }
    return dentro
}

//retorna 'Local'
const minhaFuncao = fora()
console.log(minhaFuncao())