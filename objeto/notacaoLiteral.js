const a = 1
const b = 2
const c = 3

//antigamente, para associar ao atributo do objeto
const obj1 = {a: a, b: b, c: c}

//associação direta
const obj2 = {a, b, c}

console.log(obj1)
console.log(obj2)

const nomeAtt = 'nota'
const valorAtt = 7.87

const obj3 = {}
obj3[nomeAtt] = valorAtt
console.log(obj3)

const obj4 = {[nomeAtt]: valorAtt}
console.log(obj4)

//definindo funcao da forma antiga
const obj5 = {
    funcao1: function(){
        // ...
    }
}

//definindo funcao da forma nova
const obj6 = {
    funcao2() {
        //...
    }
}

console.log(obj5, obj6)