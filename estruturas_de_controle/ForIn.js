const notas = [1, 2.4, 5.7, 4.67]

for(let i in notas){
    console.log(notas[i])
}

const pessoa = {
    nome: 'Augusto',
    idade: 19,
    sexo: 'M'
}

for(atributo in pessoa){
    console.log(pessoa[atributo])
}

//for each em Js
notas.forEach(element => {
  console.log(element)  
})