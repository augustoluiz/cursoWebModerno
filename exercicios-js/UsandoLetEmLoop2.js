const funcs = []

for (let i = 0; i < 10; i++){
    funcs.push(function() {
        console.log(i)
    })
}

//usando função dentro de array
//como o let não tem escopo de bloco, vai printar 1 e 2 (os valores que foram salvos dentro do loop)
funcs[1]()
funcs[2]()