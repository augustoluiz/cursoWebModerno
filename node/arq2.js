module.exports = {
    bomdia: 'Bom Dia',
    mostraData: function(){
        const data = new Date()
        console.log(`São Paulo, Brasil. ${data.getUTCDay()}/${data.getUTCMonth()}/${data.getFullYear()}/${data}`)
    }
}