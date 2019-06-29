const funcs = []

for (var i = 0; i < 10; i++){
    funcs.push(function() {
        console.log(i)
    })
}

//usando função dentro de array
//sempre vai printar 10 porque o var tem escopo de bloco
funcs[1]()
funcs[2]()