// Buscar endereço pelo CEP usando Fetch API
document.getElementById("cep").addEventListener("blur", buscarCEP);

function buscarCEP() {

    let cep = document.getElementById("cep").value.replace(/\D/g, "");

    if (cep.length !== 8) {
        return;
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(dados => {

            if (dados.erro) {
                document.getElementById("mensagem").innerText = "CEP não encontrado";
                return;
            }

            document.getElementById("rua").value = dados.logradouro;
            document.getElementById("bairro").value = dados.bairro;
            document.getElementById("cidade").value = dados.localidade;
            document.getElementById("estado").value = dados.uf;

            salvarDados();

        })
        .catch(error => {
            console.log("Erro ao buscar CEP:", error);
        });

}


// Salvar dados no LocalStorage
document.getElementById("formCadastro").addEventListener("submit", function (event) {

    event.preventDefault();

    salvarDados();

    document.getElementById("mensagem").innerText = "Dados salvos com sucesso!";
});


function salvarDados() {

    const dados = {

        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        cep: document.getElementById("cep").value,
        rua: document.getElementById("rua").value,
        bairro: document.getElementById("bairro").value,
        cidade: document.getElementById("cidade").value,
        estado: document.getElementById("estado").value

    };

    localStorage.setItem("cadastroUsuario", JSON.stringify(dados));

}


// Restaurar dados ao carregar página
window.onload = function () {

    const dadosSalvos = localStorage.getItem("cadastroUsuario");

    if (dadosSalvos) {

        const dados = JSON.parse(dadosSalvos);

        document.getElementById("nome").value = dados.nome || "";
        document.getElementById("email").value = dados.email || "";
        document.getElementById("cep").value = dados.cep || "";
        document.getElementById("rua").value = dados.rua || "";
        document.getElementById("bairro").value = dados.bairro || "";
        document.getElementById("cidade").value = dados.cidade || "";
        document.getElementById("estado").value = dados.estado || "";

    }

};