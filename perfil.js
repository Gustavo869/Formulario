async function carregarPerfil() {
    try {
        const token = localStorage.getItem("token");
        if (!token){
            alert("Realize Login!")
            Windom.location.href ="login.html"
            /
        }
    }
}