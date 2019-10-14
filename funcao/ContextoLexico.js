const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}  

//printa o 'Global' porque procura o local de definicao e nao de execucao
function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec()