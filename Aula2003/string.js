
console.log("Testes de string");

let nome = "Ana"
let texto1 = "<p class=\"border\">oi "+nome+"</p>\n<button class=\"btn\">clique aqui</button>"
let texto2 = '<p class="border">oi '+nome+'</p>'
let texto3 = `
<p class="border">oi ${nome}</p>
<button class=\"btn\">clique aqui</button>
`

console.log("texto1:",texto1)
console.log("texto2:",texto2)
console.log("texto3:",texto3)