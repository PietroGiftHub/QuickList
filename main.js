const input = document.querySelector("#item-input")
const botao = document.querySelector("#btn-adicionar")
const containerDasTarefas = document.querySelector("#lista-compras")



function AdicionarItem() {


    if (input.value.trim() == "") {
        alert("Digite um item")
        input.focus()
    } else {

        let itemDaLista = document.createElement("div")
        itemDaLista.classList.add("item")

        let texto = document.createElement("span")
        texto.innerText = input.value.trim();

        //criação de um botão e nomeaçao de uma classe a ele direto do JS
        let botaoDeletar = document.createElement("button")
        botaoDeletar.innerText = "Deletar"
        botaoDeletar.classList.add("botao-deletar")

        let botaoEditar = document.createElement("button")
        botaoEditar.innerText = "Editar"
        botaoEditar.classList.add("botao-editar")


        botaoEditar.addEventListener("click", function () {
            let novoTexto = prompt("Edite o item da lista")
            if (novoTexto !== null && novoTexto.trim() !== "") {
                texto.innerText = novoTexto.trim()
            }
        })

        botaoDeletar.addEventListener("click", function () {
            itemDaLista.remove()
        })


        itemDaLista.appendChild(texto)
        itemDaLista.appendChild(botaoEditar)
        itemDaLista.appendChild(botaoDeletar)
        containerDasTarefas.appendChild(itemDaLista)

        input.value = ""
        input.focus()
    }
}

botao.addEventListener("click", AdicionarItem)