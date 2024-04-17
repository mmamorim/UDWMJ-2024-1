import topo from "./topo.js"
import barraSuperior from "./barraSuperior.js"
import tabela from "./tabela.js"
import cadastro from "./cadastro.js"

const crudFilmes = {
    components: { topo, barraSuperior, tabela, cadastro },
    template: `
        <section>
            <topo />
            <barraSuperior />
            <tabela />
            <cadastro />
        </section>
    `,
    data() {
        return {
        }
    },
    methods: {

    }
}

export default crudFilmes