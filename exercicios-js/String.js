const escola = 'cod3r'

//pegando uma letra passando a posição dela
console.log(escola.charAt(4))

//nesse caso não mostra erro algum, apenas não traz nada. 'cod3r' não tem 5 posições
console.log(escola.charAt(5))

//retorna o valor da letra na tabela ASCII. Neste caso 3 = 51
console.log(escola.charCodeAt(3))

//retorna o número da posição de um caracetere na palavra. Neste caso o 'd' ocupa a 2ª posição em 'cod3r'
console.log(escola.indexOf('d'))

//Função substring, não tem erro. Segue o padrão do Java
console.log(escola.substring(1))
console.log(escola.substring(0,3))

//Concatenação de strings
console.log('Escola: '.concat(escola).concat("!"))

//substitui o '3' de 'cod3r' por 'e'
console.log(escola.replace(3, 'e'))

//Faz o split e converte para Array
console.log('Maria,João,Paulo'.split(','))