import criaRelogio from "./relogio.js"

let relogio1 = criaRelogio(0,0,0)
let relogio2 = criaRelogio(10,46,15)
relogio1.start()
relogio2.start()

let elem1 = document.getElementById("relogioID1")
let elem2 = document.getElementById("relogioID2")

setInterval(() => {
    elem1.innerText = relogio1.getValor()
    elem2.innerText = relogio2.getValor()
},1000)
