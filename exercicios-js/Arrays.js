const valores = [7.7, 8.8, 9.9, 6.2]
console.log(valores[0], valores[3])
//este array não tem valores no indicie 4, mas não apresenta erros. Apenas mostra o 'undefined'
console.log(valores[4])

valores[4] = 'texto'
console.log(valores)

//qtd de elementos
console.log(valores.length)

//adicionando pelo push
valores.push('novo valor', 4)
console.log(valores)

//exclui o último valor
console.log(valores.pop())
console.log(valores)

//deletar pelo index
delete valores[0]
console.log(valores)

//Em Js, um array é um objeto
console.log(typeof valores)