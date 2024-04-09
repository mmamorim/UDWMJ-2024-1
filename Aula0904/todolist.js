
const todolist = {
    tasks: [],

    init() {
        let objtext = localStorage.getItem("myTasks")
        if(objtext != null) {
            this.tasks = JSON.parse(objtext)
        }
    },

    add(textDescription, done) {
        let obj = {
            textDescription,
            done
        }
        this.tasks.push(obj)
        let objtext = JSON.stringify(this.tasks)
        localStorage.setItem("myTasks",objtext)
    }
}

todolist.init()

export default todolist