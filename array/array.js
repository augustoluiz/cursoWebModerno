//em Js não existe o tipo de dados nativo 'Array'
//O Array é um objeto. Ele é uma estrutura indexada
//É uma estrutura dinâmica. Também é um estrutura heterogênea
console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carla', 'Ana')
console.log(aprovados)

//usando os indices
for(let i = 0; i < aprovados.length; i++){
    console.log(aprovados[i])
}

//Adicionar valores no array
aprovados[3] = 'Paulo'
aprovados.push('Augusto')

//
aprovados.forEach(ap => {
    console.log(ap)
});

//
let nome = 'Augusto'
nome.split('').forEach(n => {
    console.log(n)
})

//ordenar
console.log(aprovados.sort())

//excluir. Coloca undefined no lugar
delete aprovados[1]
console.log(aprovados)

//retira de uma vez por todas. A partir do indice 1, 
//exclui os próximos 2 elementos
aprovados.splice(1, 2)
console.log(aprovados)