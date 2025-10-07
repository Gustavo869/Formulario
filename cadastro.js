const formCliente = document.getElementById("form-cliente");

formCliente.addEventListener("submit", async (event) => {
        event.preventDefault();

        const dados = pegarDadosCliente();
        try {
            const resposta = await fetch("http://127.0.0.1:3000/cadastrar" , {
                method: "POST",
                headers: {"Content-Type": "application/json"}, 
                body: JSON.stringify(dados)
            })
        
            if(!resposta.ok) {
                throw new Error("Erro na API!")
            }
        
            alert("Cadastro realizado com sucesso!")
            formCliente.reset()
        
        } catch (error) {
            alert("Erro ao cadastrar cliente: "+ error)
        }
})


function pegarDadosCliente(){
    let cliente = new Object();
    cliente.nome = document.getElementById("nome")
    cliente.cpf = document.getElementById("cpf")
    cliente.email = document.getElementById("email")
    cliente.telefone = document.getElementById("telefone")
    cliente.rua = document.getElementById("logradouro")
    cliente.n_casa = document.getElementById("numero")
    cliente.bairro = document.getElementById("bairro")
    cliente.cidade = document.getElementById("cidade")
    cliente.uf = document.getElementById("estado")
    cliente.cep = document.getElementById("cep")
    cliente.senha = document.getElementById("nome")
    return cliente
}