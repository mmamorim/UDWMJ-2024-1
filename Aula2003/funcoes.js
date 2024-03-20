console.log("Testes de funções")

let bomdia = function(nome) {
    console.log(`Oi ${nome}...`)
    console.log("Tudo bem com vc?")
    console.log("...espero que sim.")
}
let bomdia2 = bomdia

let resposta = (nome) => {
    console.log(`Oi ${nome}...`)
    console.log("Comigo tudo bem e com vc?")
}

function encontro(nome1,nome2) {
    bomdia(nome1)
    resposta(nome2)    
}
encontro("Ana","bia")

((nome1,nome2) => {
    bomdia(nome1)
    resposta(nome2)    
})("Ana","bia")

console.log("o que tem no identificador bomdia: ",bomdia);
console.log("o que tem no identificador bomdia2: ",bomdia2);
bomdia2("João")