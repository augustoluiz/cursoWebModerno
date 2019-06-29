//Hoisting = jogar para cima
//Nada mais é do que chamar uma função antes de declarar ela

//Printa undefined porque ele declara ela, mas só atribui valor depois
console.log(a)
var a = 2
console.log(a)

//para o let, não há o hoisting. Ele gera erro e não o 'undefined'
console.log(b)
let b = 3
console.log(b)