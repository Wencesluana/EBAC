export const API_URL = "https://crudcrud.com/api/SUA_CHAVE/clientes"


export function validarCampos(nome, email) {

    return nome.trim() !== "" && email.trim() !== ""

}


// renderização usando programação funcional
export function renderizarClientes(lista, clientes, deletar) {

    lista.innerHTML = ""

    clientes.map(cliente => {

        const li = document.createElement("li")

        li.innerHTML = `
${cliente.nome} - ${cliente.email}
<button data-id="${cliente._id}">
Excluir
</button>
`

        const botao = li.querySelector("button")

        botao.addEventListener("click", () => deletar(cliente._id))

        lista.appendChild(li)

    })

}