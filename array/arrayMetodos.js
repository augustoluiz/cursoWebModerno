const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

//remove o último item do array
pilotos.pop()
console.log(pilotos)

//add um item no final do array
pilotos.push('Verstappen')
console.log(pilotos)

//remove o primeiro item do array 
pilotos.shift()
console.log(pilotos)

//add um item no inicio do array
pilotos.unshift('Hamilton')
console.log(pilotos)

//usando o splice para add elementos
//A partir do indice 2, não exclui nenhum e add o Bottas e o Massa
pilotos.splice(2,0,'Bottas','Massa')
console.log(pilotos)

//usando o splice para remover elementos
//a partir do indice 3, remove 1 unico elemento
pilotos.splice(3,1)
console.log(pilotos)

//divide o array
const algunsPilotos1 = pilotos.slice(3)//divide a partir do indice 3
console.log(algunsPilotos1)

const algunsPilotos = pilotos.slice(1,4)//divide a partir do indice 1 mas não pega o indice 4
console.log(algunsPilotos)