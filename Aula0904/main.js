import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
import app from "./app.js"


createApp(app).mount('#app')

import todolist from "./todolist.js";

//console.log("oi todolist",todolist);

//todolist.add("Ir ao cinema",false)
//todolist.add("Pagar conta",false)
//todolist.add("Estudar Javascript",false)

console.log("oi todolist",todolist);
