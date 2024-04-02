console.log("HELLO fecth!");

let btn = document.getElementById("btn01")
console.log("btn",btn);

btn.onclick = function() {
    let elem = document.getElementById("boxName")
    elem.innerText = "Carregando..."
    let url = "https://randomuser.me/api/"
    fetch(url).then((resp) => {
        resp.json().then((obj) => {
            let user = obj.results[0]
            console.log("chegou");
            userRender(user)
        })
    })
}

function userRender(user) {
    console.log("user",user);
    let nome = user.name.title + " " + user.name.first + " " + user.name.last
    console.log("nome",nome);
    let elem = document.getElementById("boxName")
    elem.innerText = nome
    let photo = user.picture.large
    elem = document.getElementById("photo")
    elem.src = photo
}