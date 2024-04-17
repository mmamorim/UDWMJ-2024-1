
const cadastro = {
    components: {},
    template: `
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">
                        Adicionar Filme
                    </h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">

                    <div class="mb-3">
                        <label class="form-label">ID</label>
                        <input type="text" class="form-control" placeholder="Digite um ID">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Nome</label>
                        <input type="text" class="form-control" placeholder="Digite nome do filme">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Ano</label>
                        <input type="text" class="form-control" placeholder="Digite ano do filme">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Genero</label>
                        <select class="form-select">
                            <option value="romance">Romance</option>
                            <option value="aventura">Aventura</option>
                            <option value="ação">Ação</option>
                          </select>
                    </div>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Cancelar
                    </button>
                    <button type="button" class="btn btn-primary">
                        Adicionar Filme
                    </button>
                </div>
            </div>
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

export default cadastro