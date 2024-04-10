import todolist from "./todolist.js"

console.log("todolist",todolist);

const app = {
    components: {},
    template: `
    <div class="flex gap-1">
        <div class="border rounded p-1 w-80">
            lista de tarefas    
            <div v-for="(elem,index) in lista" class="flex items-center gap-1 text-xs border p-1">
                <div>{{index}}</div>
                <div class="px-1">
                    {{ elem.textDescription }}
                </div>
                <div v-if="elem.done" class="w-10 text-center">
                    <span class="text-green-700">concluído</span>
                    <img @click="alterar(index)" src="./assets/done.png" class="w-6" alt="">
                </div>
                <div v-if="!elem.done">
                    <span class="text-red-700">NÃO</span>
                    <img @click="alterar(index)" src="./assets/not-done.png" class="w-6" alt="">
                </div>
                <div>
                    <img @click="remover(index)" src="./assets/close.png" class="w-6" alt="">
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
            done: false,
            lista: []
        }
    },
    mounted() {
        this.lista = todolist.tasks
        console.log("todolist.tasks",todolist.tasks);
    },
    methods: {

        adicionar() {
            console.log("adicionar");
            todolist.add(this.textDescription,this.done)
            console.log("todolist.tasks",todolist.tasks);
            this.lista = todolist.tasks
            this.$forceUpdate()
        },

        remover(index) {
            console.log("remover",index);
            todolist.remove(index)
            this.lista = todolist.tasks
            this.$forceUpdate()
        },

        alterar(index) {
            console.log("alterar",index);
            todolist.tasks[index].done = !todolist.tasks[index].done
            this.lista = todolist.tasks
            this.$forceUpdate()
        }
    }
}

export default app