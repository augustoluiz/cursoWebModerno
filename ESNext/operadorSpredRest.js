// operador ... rest(juntar)/spred(espalhar)
// usar o rest com parâmetro de função

// usar o spred com objeto
const funcionario = {nome: 'Maria', salario: 12249.99}
const clone = {ativo: true, ...funcionario}

console.log(funcionario)
console.log(clone)

// usar o spred com array
const grupoA = ['João', 'Pedro', 'Maria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoA)
console.log(grupoFinal)