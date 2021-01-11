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


function addPlaceHolder(user) {
    document.getElementById("info").value = user
}