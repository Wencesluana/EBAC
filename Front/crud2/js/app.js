import { Cliente } from "./classes.js"
import { API_URL, validarCampos, renderizarClientes } from "./utils.js"


const form = document.getElementById("formCliente")
const lista = document.getElementById("listaClientes")

let clientes = []


// LISTAR CLIENTES
async function listarClientes() {

    const response = await fetch(API_URL)

    clientes = await response.json()

    renderizarClientes(lista, clientes, excluirCliente)

}


// CADASTRAR CLIENTE
async function cadastrarCliente(nome, email) {

    const cliente = new Cliente(nome, email)

    await fetch(API_URL, {

        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(cliente)

    })

    listarClientes()

}


// EXCLUIR CLIENTE
async function excluirCliente(id) {

    await fetch(`${API_URL}/${id}`, {

        method: "DELETE"

    })

    listarClientes()

}


// EVENTO DO FORMULÁRIO
form.addEventListener("submit", (event) => {

    event.preventDefault()

    const nome = document.getElementById("nome").value
    const email = document.getElementById("email").value

    if (!validarCampos(nome, email)) {

        alert("Preencha todos os campos")

        return

    }

    cadastrarCliente(nome, email)

    form.reset()

})


// carregar lista
listarClientes()