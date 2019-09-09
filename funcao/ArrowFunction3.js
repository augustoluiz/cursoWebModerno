let comparaComThis = function (param) {
    console.log(this === param)
}

//vai ser igual à true
comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global) //vai ser false pq aponta para obj e não para o escopo global
comparaComThis(obj)//vai ser true pq aponta para obj

let comparaComThiArrow = param => console.log(this === param)
comparaComThiArrow(global)//vai dar false pq na arrow function o contexto não é global
comparaComThiArrow(this)//vai ser true pq no arrow function o contexto é do modulo do node
//O this em uma função arrow é um this associado ao contexto em que a função foi escrita
//não muda nunca
