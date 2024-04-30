import icone from "./icone.js"

const componente = {
    components: { icone },
    template: `
        <div>
            <icone icone="mdi:home" />
            <icone />
            <icone />
        </div>
    `,
    data() {
        return {
        }
    },
    methods: {

    }
}

export default componente