let carro = {
    marca:"ferrari",
    portas:4,
    cor: "vermelha",
    
   
    abrirportas: function (){
        let abriu = (Math.floor(Math.random() * this.portas) + 1)
        return abriu;

    
    },
};
console.log(carro.marca)
console.log(carro.cor)
console.log(carro.portas)
console.log(carro.abrirportas())