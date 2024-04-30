
const icone = {
    components: {},
    props: {
        icone: { default: "bi:lamp", type: String }
    },
    template: `
        <div>
            <iconify-icon @click="cliqueIcone" :icon="icone" class="text-5xl"></iconify-icon>
            <span class="px-1 bg-red-700 text-white rounded text-sm"> {{contador}} </span>    
        </div>
    `,
    data() {
        return {
            contador: 1
        }
    },
    methods: {

        cliqueIcone() {
            this.contador++
        }
    }
}

export default icone