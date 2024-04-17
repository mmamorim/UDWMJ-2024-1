import filme from "./filme.js"

const tabela = {
    components: { filme },
    template: `
        <table class="table">
        <thead>
            <tr>
                <th>#</th>
                <th>Nome</th>
                <th>Ano</th>
                <th>Genero</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <filme v-for="(elem,index) in filmes" :id="elem.id" :nome="elem.nome" :ano="elem.ano" :genero="elem.genero" @eventoExcluir="excluirFilme" />
        </tbody>
        </table>
    `,
    data() {
        return {
            filmes: [
                { id: "f001", nome: "De volta p/ o futuro", ano: 1984, genero: "Aventura" },
                { id: "f002", nome: "Rambo", ano: 1980, genero: "Ação" },
                { id: "f003", nome: "Exterminador do futuro", ano: 1982, genero: "Ação" },
                { id: "f004", nome: "O vento levou", ano: 1940, genero: "Romance" }
            ]
        }
    },
    methods: {

        excluirFilme(id) {
            console.log("excluirFilme",id);
            let idx
            for(idx in this.filmes) {
                if(this.filmes[idx].id == id) {
                    break;
                }
            }
            console.log(idx);
            this.filmes.splice(idx, 1);
        }
    }
}

export default tabela