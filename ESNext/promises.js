// uma 'promessa' assíncrona
// o resolve é o esperado
// o reject é o erro
function falarDepoisDe(segundos, frase){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    })
}

// o catch trata o erro na promisse

falarDepoisDe(3, 'Oi')
    .then(frase => frase.concat('!'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e))