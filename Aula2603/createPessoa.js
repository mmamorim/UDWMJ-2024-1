
function createPessoa(nome,idade) {
    return {
        "nome": nome,
        "idade": idade,
        fazAniversario: function () {
            this.idade++
        }
    }
}

export default createPessoa