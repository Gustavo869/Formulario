async function carregarPerfil(){
    try {
        const token = localStorage.getItem("token");
        if (!token) {
            alert("Realize login!")
            windows.location.href = "login.html"
        }
        const resposta = await fetch("http://127.0.0.1:3000/perfil", {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer" + token
            }
        })
        const dados = await resposta.json()
        if(dados.erro) {
            alert("Erro: "+ dados.erro)
            windows.location.href = "login.html"
        }
        document.getElementById("nome").value = dados.nome;
        // terminar de mostrar os dados nos campos do HTML
    } catch (erro) {
        console.log(erro)
    }
}
document.addEventListener("DOMContentLoaded", carregarPerfil)
