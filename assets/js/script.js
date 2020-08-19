/* var let const

Acesso por:
Case Sensitive = reconhece letras maiusculas e minisculas

Tag: getElementByTagName()
Id: getElementById()
Nome: getElementsByName()
Classe: getElementsByClassName()
Seletor: querySelector()
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txtNome.innerHTML = '*nome inválido'
        txtNome.style.color = 'red'
    }
    else{
        txt.innerHTML = 'nome válido'
        txt.style.color = 'green'
    }

}

function validaEmail () {
    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf ('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = '*e-mail inválido'
        txtEmail.style.color = 'red'
    }
    else{
        txtEmail.innerHTML = '*e-mail válido'
        txtEmail.style.color = 'green'
    }

}
