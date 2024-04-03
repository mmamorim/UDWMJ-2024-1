import btn_user from "./btn-user.js"

const app = {
    components: {
        btn_user
    },
    template: `
        <div>
            <h1 class="text-lg m-1 p-1 bg-gray-200 rounded">
                Vue App
            </h1>
            <div class="flex items-center gap-1">
                <btn_user />
                <btn_user />
                <btn_user />
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

export default app