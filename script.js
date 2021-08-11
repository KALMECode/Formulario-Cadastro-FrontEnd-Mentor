const btnSubmit = document.querySelector('.btn')
const campoNome = document.querySelector('.nome')
const campoSobreNome = document.querySelector('.sobre-nome')
const campoEmail = document.querySelector('.campo-email')
const campoSenha = document.querySelector('.campo-senha')
const boxAlertNome = document.querySelector('.alert-box-nome')
const boxAlertSobre = document.querySelector('.alert-box-sobre')
const boxAlertEmail = document.querySelector('.alert-box-email')
const boxAlertSenha = document.querySelector('.alert-box-senha')

btnSubmit.addEventListener('click', teste)

function teste() {
    let valorNome = campoNome.value
    let valorSobreNome = campoSobreNome.value
    let valorEmail = campoEmail.value
    let valorSenha = campoSenha.value

    if (valorNome == '') {
        boxAlertNome.innerHTML='First Name cannot be empty'
        campoNome.classList.add('error')
        campoNome.classList.add('alert-icon')
    } else {
        boxAlertNome.innerHTML=''
        campoNome.classList.remove('error')
        campoNome.classList.remove('alert-icon')
    }


    if (valorSobreNome == '') {
        boxAlertSobre.innerHTML='Last Name cannot be empty'
        campoSobreNome.classList.add('error')
        campoSobreNome.classList.add('alert-icon')
    } else {
        boxAlertSobre.innerHTML=''
        campoSobreNome.classList.remove('error')
        campoSobreNome.classList.remove('alert-icon')
    }

    if (valorEmail == '') {
        boxAlertEmail.innerHTML='Looks like this is not an email'
        campoEmail.placeholder = 'email@example/com'
        campoEmail.classList.add('error')
        campoEmail.classList.add('alert-icon')
    } else {
        boxAlertEmail.innerHTML=''
        campoEmail.classList.remove('error')
        campoEmail.classList.remove('alert-icon')
    }

    if (valorSenha == '') {
        boxAlertSenha.innerHTML='Password cannot be empty'
        campoSenha.classList.add('error')
        campoSenha.classList.add('alert-icon')
    } else {
        boxAlertSenha.innerHTML=''
        campoSenha.classList.remove('error')
        campoSenha.classList.remove('alert-icon')
    }

}
