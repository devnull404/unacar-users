function prev() {
    let url = "https://charal.unacar.mx/fotos/";
    user = +document.getElementById("user").src.slice(-10, -4) -1
    ext = ".jpg"
    document.getElementById("user").src = url + user.toString() + ext
    addPlaceHolder(user);
};

function next() {
    let url = "https://charal.unacar.mx/fotos/";
    user = +document.getElementById("user").src.slice(-10, -4) +1
    ext = ".jpg"
    document.getElementById("user").src = url + user.toString() + ext
    addPlaceHolder(user);
};

function matricula() {
    let url = "https://charal.unacar.mx/fotos/";
    user = document.getElementById("info").value
    ext = ".jpg"
    document.getElementById("user").src = url + user.toString() + ext
};


function addPlaceHolder(user) {
    document.getElementById("info").value = user
}

matricula = Math.floor(Math.random()*1000)+200000
document.getElementById("user").src += (matricula).toString() + ".jpg"
document.getElementById("info").placeholder = matricula.toString()