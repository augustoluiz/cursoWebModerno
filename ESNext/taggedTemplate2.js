function real(partes, ...valores){
    const result = []
    valores.forEach((e) => {
        result.push(`R$ ${e.toFixed(2)}`)
    })
    return result.join('')
}

console.log(real `${100.9}, ${10.8889899} , ${1.6549}, ${1160.9}`)
