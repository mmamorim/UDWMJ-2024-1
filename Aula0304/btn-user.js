
const btn_user = {
    template: `
    <div class="border border-black text-center p-1 rounded bg-gray-300 w-60">
        <div class="flex items-center gap-1">
            <div class="m-1 w-20">
                <img class="w-20 rounded-lg" :src="imagem" > 
            </div>
            <div class="w-40">
                <div class="flex items-center gap-1">
                    <div class="pe-2 fw-semibold text-sm">Nome:</div>
                    <div class="text-sm">
                        {{nome}}
                    </div>
                </div>
                <div class="flex items-center gap-1">
                    <div class="pe-2 fw-semibold text-sm">Email:</div>
                    <div class="text-sm">
                        {{email}}
                    </div>
                </div>
            </div>
        </div>
        <div>
            <button @click="carregar" class="btn btn-primary btn-sm">
                refresh
            </button>
        </div>
    </div>
    `,
    data() {
        return {
            nome: "sem nome",
            imagem: "",
            email: "sdssd"
        }
    },
    methods: {

        carregar() {
            let self = this
            console.log("carregar");
            let url = "https://randomuser.me/api/"
            fetch(url).then((resp) => {
                resp.json().then((obj) => {
                    let user = obj.results[0]
                    console.log("chegou",user);
                    self.nome = user.name.title + " " + user.name.first + " " + user.name.last
                    self.imagem = user.picture.large
                    self.email = user.email
                })
            })
        }
    }
}

export default btn_user