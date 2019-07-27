function boaNoticia(nota){
    if(nota >= 7){
        console.log(`Aprovado com ${nota}`)
    }
}

boaNoticia(7)
seForVerdade(null);
seForVerdade(undefined)
seForVerdade('')
seForVerdade(0)
seForVerdade(-1)
seForVerdade(' ')

function seForVerdade(valor){
    if(valor){
        console.log(valor + " É verdade!")
    } else {
        console.log(valor + " É falso")
    }
}