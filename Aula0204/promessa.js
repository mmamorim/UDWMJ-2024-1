
console.log("Promessa");

let promessa = new Promise((resolve, reject) => {
    // Comandos
    setTimeout(() => {
        console.log("Passou 5 segundos...");
        resolve() // deu certo!
    }, 5000)
    setTimeout(() => {
        console.log("Passou 3 segundos...");
        reject() // deu erro!
    }, 3000)    
})

promessa.then(() => {
    console.log("Chamou o then...");
}).catch(() => {
    console.log("Chamou o catch...");
})

console.log("promessa",promessa);
