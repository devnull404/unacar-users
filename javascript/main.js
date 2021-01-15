function prev() {
    let url = "https://charal.unacar.mx/fotos/";
    user = +document.getElementById("user").src.slice(-10, -4) -1;
    ext = ".jpg";
    user = checkMat(user);
    document.getElementById("user").src = url + user.toString() + ext;
    addPlaceHolder(user);
};

function next() {
    let url = "https://charal.unacar.mx/fotos/";
    user = +document.getElementById("user").src.slice(-10, -4) +1
    ext = ".jpg"
    user = checkMat(user);
    document.getElementById("user").src = url + user.toString() + ext
    addPlaceHolder(user);
};

function matricula() {
    let url = "https://charal.unacar.mx/fotos/";
    user = document.getElementById("info").value;
    ext = ".jpg";
    if(user.legth == 5) {
        user = "0" + user;
    };
    document.getElementById("user").src = url + user.toString() + ext
};


function addPlaceHolder(user) {
    document.getElementById("info").value = user
}

function checkMat(mat) {
    return mat.length < 6 ? "0"+mat: mat;
};

matri = Math.floor(Math.random()*1000)+200000
document.getElementById("user").src += (matri).toString() + ".jpg"
document.getElementById("info").placeholder = matri.toString()
