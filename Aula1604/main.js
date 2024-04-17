import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
import crudFilmes from "./crudFilmes.js"

console.log("olá");

createApp(crudFilmes).mount("#pontoDeMontagem")