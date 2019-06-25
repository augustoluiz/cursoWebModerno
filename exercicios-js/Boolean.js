let isActive = false
console.log(isActive)

isActive = true
console.log(isActive)

//colocando o ! gera o 'false'
isActive = 1
console.log(!isActive)

//colocando o !! gera o 'true'
console.log(!!isActive)

//situações que retornam true
console.log('Verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isActive = true))

//retornam false
console.log('Os Falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isActive = false))
