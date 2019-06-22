//irá mostrar o tipo Infinity
console.log(7/0)

//também é possível dividir um número no formato string
console.log('10'/2)

//baixa precisão com ponto flutuante
//não é preciso, vai mostrar 0.799999999 e não 0.8
console.log(0.1 + 0.7)

//para alcançar a precisão é preciso delimitar o número de casas decimais
console.log((0.1 + 0.7).toFixed(2))