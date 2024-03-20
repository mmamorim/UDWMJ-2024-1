console.log("oi gente")

let a1, a2, a3, notaFinal

a1 = parseInt(prompt("Digite sua nota A1:"))
a2 = parseInt(prompt("Digite sua nota A2:"))
a3 = parseInt(prompt("Digite sua nota A3:"))

notaFinal = a1*0.3+a2*0.3+a3*0.4
console.log("Nota final:",notaFinal);

//if(notaFinal >= 70) {
//    alert("APROVADO!")
//} 
//if(notaFinal >= 30 && notaFinal < 70) {
//    alert("AI")
//} 
//if(notaFinal < 30) {
//    alert("REPROVADO")
//} 

if(notaFinal >= 70) {
        alert("APROVADO!")
} else {
    if(notaFinal < 30) {
        alert("REPROVADO")
    } else {
        alert("AI")
    }
} 