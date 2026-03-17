const API_URL = "https://crudcrud.com/api/fc1e1a6333d548a794dc79ee348c1245/clientes";


// Cadastrar cliente
function cadastrarCliente() {

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;

    const cliente = {
        nome: nome,
        email: email
    };

    fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(cliente)
    })
        .then(response => response.json())
        .then(() => {

            document.getElementById("nome").value = "";
            document.getElementById("email").value = "";

            listarClientes();

        })
        .catch(error => console.log(error));
}


// Listar clientes
function listarClientes() {

    fetch(API_URL)
        .then(response => response.json())
        .then(clientes => {

            const lista = document.getElementById("listaClientes");
            lista.innerHTML = "";

            clientes.forEach(cliente => {

                const item = document.createElement("li");

                item.innerHTML = `
                ${cliente.nome} - ${cliente.email}
                <button onclick="excluirCliente('${cliente._id}')">
                Excluir
                </button>
            `;

                lista.appendChild(item);

            });

        })
        .catch(error => console.log(error));
}


// Excluir cliente
function excluirCliente(id) {

    fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    })
        .then(() => {
            listarClientes();
        })
        .catch(error => console.log(error));
}


// Carregar lista ao abrir página
window.onload = listarClientes;