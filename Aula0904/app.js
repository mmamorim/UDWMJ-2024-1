
const app = {
    components: {},
    template: `
    <div class="flex gap-1">
        <div class="border rounded p-1 w-80">
            lista de tarefas    
            <div class="flex items-center gap-1 text-xs border p-1">
                <div>01</div>
                <div class="px-1">
                    Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor.
                </div>
                <div>
                    <img src="./assets/not-done.png" class="w-10" alt="">
                </div>
                <div>
                    <img src="./assets/close.png" class="w-10" alt="">
                </div>
            </div>        
        </div>
        <div class="border rounded p-1">
            <div>Texto</div>
            <input type="text" class="border" v-model="textDescription">            
            <div>
                concluido
                <input type="checkbox" v-model="done">     
            </div>
            <button @click="adicionar" class="text-sm border rounded px-1 bg-blue-600 text-white">
                Adicionar
            </button>       
        </div>
    </div>
    `,
    data() {
        return {
            textDescription: "sdsdsdsdsd",
            done: false
        }
    },
    methods: {

        adicionar() {
            console.log("adicionar");
            console.log("textDescription",this.textDescription);
            console.log("done",this.done);

        }
    }
}

export default app