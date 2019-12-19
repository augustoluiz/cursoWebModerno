// o for Of itera em cima de valores
for(let letra of 'Teste') {
    console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promisse']

for(let assunto of assuntosEcma){
    console.log(assunto)
}

const assuntosMap = new Map([
    ['Map', {aborado: true}],
    ['Set', {aborado: true}],
    ['Promise', {aborado: false}],
])

for (let key of assuntosMap){
    console.log(key)
}

for(let chave of assuntosMap.keys()) {
    console.log(chave)
}

for(let valor of assuntosMap.values()) {
    console.log(valor)
}

const s = new Set(['a', 'b', 'c'])
for(let letra of s){
    console.log(letra)
}