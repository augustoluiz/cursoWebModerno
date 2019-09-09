//funcao tradicional
let dobro = function (a) {
    return 2 * a
}

//exemplo com arrow function
dobro1 = (a) => {
    return 2 * a
} 

//outro exemplo com arrow
dobro2 = a => 2 * a


console.log(dobro(3))
console.log(dobro1(3))
console.log(dobro2(3))


let ola = function () {
    return 'Olá'
}

//arrow function sem parâmetros 
ola = () => 'Olá'
ola = _ => 'Olá'//possui um param

console.log(ola())