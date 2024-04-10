
const teste = {
    components: {},
    template: `
        <div>
            <span class="mr-1">nome:</span>
            <input v-model="nomeFruta" type="text" class="border"/> 
            <span class="mx-1">emoji:</span>
            <input v-model="emoji" type="text" class="border"/> 
            <button @click="adicionar" class="border px-1 rounded mx-1 bg-blue-500 text-white">
                adicionar fruta
            </button>
            <div class="m-2 p-2 border rounded">
                <button @click="clicou(fruta)" v-for="(fruta,index) in frutas" class="border px-1 rounded mx-1 bg-blue-500 text-white">
                {{fruta.emoji}} clique {{fruta.nome}}
                </button>
            </div>
        </div>
    `,
    data() {
        return {
            frutas: [ 
                { nome: "maça", emoji: "🍎" }, 
                { nome: "laranja", emoji: "🍊" },                 
            ],
            nomeFruta: "",
            emoji: ""
        }
    },
    methods: {

        clicou(fruta) {
            if(fruta == "banana") {
                console.log("clicou no botão 🍌🍌🍌");
            } else {
                console.log("clicou no botão "+fruta);
            }
        },

        adicionar() {
            console.log("valor do nomeFruta",this.nomeFruta);
            console.log("emoji",this.emoji);
            this.frutas.push({
                nome: this.nomeFruta,
                emoji: this.emoji
            })
        }
    }
}

export default teste