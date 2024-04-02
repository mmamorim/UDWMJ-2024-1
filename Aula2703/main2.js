
console.log("Promessa")

function queroPizza(funcPronto) {
    console.log("preparando...")
    setTimeout(() => {
        console.log("assando...")
        setTimeout(() => {
            console.log("embalando...")
            setTimeout(() => {
                console.log("pronto!...")
                funcPronto({
                    nome: "Calabresa",
                    preco: 40.5
                })
            },1000)        
        },1000)    
    },1000)
}

queroPizza((pizza) => {
    console.log('opa! vc terminou!',pizza);
})

console.log("algo");
console.log("algo");
console.log("algo");


queroPizza().then(() => {

}).catch(() => {
    
})