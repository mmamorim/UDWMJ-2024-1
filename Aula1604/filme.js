
const filme = {
    props: {
        id: { default: "", type: String },
        nome: { default: "sem nome", type: String },
        ano: { default: 0, type: Number },
        genero: { default: "", type: String },
    },
    components: {},
    template: `
    <tr>
        <td scope="row"> {{id}} </td>
        <td> {{nome}} </td>
        <td> {{ano}} </td>
        <td> {{genero}} </td>
        <td>
            <button class="btn btn-light">
                <iconify-icon icon="mdi:pencil" class="text-xl text-green-400"></iconify-icon>
            </button>
            <button class="btn btn-light" @click="excluir">
                <iconify-icon icon="mdi:delete" class="text-xl text-red-600"></iconify-icon>
            </button>
        </td>
    </tr>
    `,
    data() {
        return {
        }
    },
    methods: {

        excluir() {
            console.log("cliquei excluir", this.id)
            this.$emit('eventoExcluir',this.id)
        }
    }
}

export default filme