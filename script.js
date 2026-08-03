let numero = document.querySelector('input#fnum')
let botaoAdicionar = document.querySelector('#botao-adicionar')
let botaoFinalizar = document.querySelector('#botao-finalizar')
let listaValores = document.querySelector('select#flista')
let divResultado = document.querySelector('div#res')
let valores = []

function adicionar() {
    let numeroDigitado = Number(numero.value)

    if (!validarNumero(numeroDigitado)) {
        alert('Valor inválido! Digite um número entre 1 e 100.')
        numero.value = ''
        numero.focus()
    }

    else if (checarLista(numeroDigitado, valores)) {
        alert('Valor já encontrado na lista! Digite um número inédito.')
        numero.value = ''
        numero.focus()
    }

    else {
        valores.push(numeroDigitado)
        let item = document.createElement('option')
        item.text = `Valor ${numeroDigitado} adicionado`
        listaValores.appendChild(item)
        numero.value = ''
        numero.focus()
    }


}

function validarNumero(num) {
    if (num >= 1 && num <= 100) {
        return true
    } else {
        return false
    }
}

function checarLista(num, lista) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] == num) {
            return true
        }
    }
    return false

    // poderia usar o .includes()
    // return lista.includes(num)
}

function finalizar() {
    if(valores.length == 0){
        alert('Adicione valores antes de finalizar')
        numero.focus()
        return
    } 

    let total = valores.length
    let soma = 0
    let maior = valores [0]
    let menor = valores [0]
    let media = 0

    for (let num of valores){
        soma += num
        if(num > maior){
            maior = num
        } 
        if (num < menor){
            menor = num
        }
    }

    media = soma / total

    divResultado.innerHTML = ''

    divResultado.innerHTML = `<p>Ao todo temos ${total} valores cadastrados.</p>`
    divResultado.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
    divResultado.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
    divResultado.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
    divResultado.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    

}

botaoAdicionar.addEventListener('click', adicionar)
botaoFinalizar.addEventListener('click', finalizar)