let aviao= {
    sorteio:200,
    empresa: "gol",   
    sorteio_viagem: function (){
        let sortearnumero= (Math.floor(Math.random() * this.sorteio) + 1)
        return sortearnumero;
    
    },
    
};
console.log(aviao)
console.log("acentos disponiveis")
console.log(aviao.sorteio)
console.log("empresa"),console.log(aviao.empresa)
console.log("acento sorteado"),console.log(aviao.sorteio_viagem())

