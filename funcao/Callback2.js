const notas = [7.7, 6.5, 5.3, 8.9, 3.6, 7.1, 9.0]

// sem usar callback
let notasBaixas = []
for (let i in notas) {
    if(notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

//Com callback
let notasBaixas2 = []
notasBaixas2 = notas.filter(function(nota) {
    return nota < 7
})

console.log(notasBaixas2)

//com arrow function
let notasBaixas3 = []
notasBaixas3 = notas.filter((nota) => nota < 7)
console.log(notasBaixas3)