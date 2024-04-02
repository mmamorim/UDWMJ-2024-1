console.log("HELLO fecth!");


let url = "https://randomuser.me/api/"

fetch(url).then((resp) => {
    resp.json().then((obj) => {
        let pessoa = obj.results[0]
        console.log("chegou",pessoa);
        console.log("pessoa.name",pessoa.name);
    })
})