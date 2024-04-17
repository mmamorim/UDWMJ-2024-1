
const barraSuperior = {
    components: {},
    template: `
    <div class="flex items-center justify-between">
        <div class="text-lg">
            Lista de filmes
        </div>
        <div>
            <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Novo filme
            </button>
        </div>
    </div>
    `,
    data() {
        return {
        }
    },
    methods: {

    }
}

export default barraSuperior