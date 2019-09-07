//É possívle tratar a função como um dado, 
//passando ela como parâmetro

//criando a função de forma literal
function fun(){
    console.log('fun')
}

//armazenar função em variável
const fun2 = function(){
    console.log('fun2')
}

//funcao no array
const array = [function(a, b){return a+b}, fun, fun2]
console.log(array[0](2, 3))
console.log(array[1])
console.log(array[2])

//armazenar em um atributo de objeto
const obj = {}
obj.falar = function () {return 'opa'}
console.log(obj.falar())


//uma função pode retornar/conter uma outra funcao
function soma(a, b){
    return function(c){
        console.log(a + b + c)
    }
}

//chamando a função com um função dentro dela
//a - 2
//b - 3
//c - 1
soma(2,3)(1)

const cincoMaisum = soma(2,3)
cincoMaisum(1)