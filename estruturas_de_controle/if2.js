function teste1(num){
    if(num > 7){
        console.log(num)
        console.log('final')
    }
}

teste1(6)
teste1(8)

/*O ; representa uma quebra de linha, logo...O bloco seguinte não está associado ao if*/
function teste2(num){
    if(num > 7);{
        console.log(num)
    }
}   

teste2(6)
teste2(8)

