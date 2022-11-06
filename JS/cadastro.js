//CADASTRO DO USUÁRIO

const userName = document.getElementById('usernameCadastro')
const password = document.getElementById('passwordCadastro')
const passwordRepet = document.getElementById('repetpassword')
const formulario = document.getElementById('form')
let usuarios = JSON.parse(localStorage.getItem('dadosFormulario') ?? '[]')

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    cadastrarUsuario();
})

function cadastrarUsuario () {

    const existeUsuario = usuarios.some((dado) => dado.nome === userName.value )
    if (existeUsuario){

        const espaco = document.getElementById('espacoAlert')

        const alertContaCriada = document.createElement('div')
        alertContaCriada.setAttribute('class', 'alert alert-danger alert-dismissible fade show')
        const conteudoContaCriada = document.createElement('strong')
        conteudoContaCriada.innerText = 'Este nome de usuário já existe!'
        const buttonFechar = document.createElement('button')
        buttonFechar.setAttribute('class', 'btn-close')
        buttonFechar.setAttribute('data-bs-dismiss', 'alert')
        buttonFechar.setAttribute('id', 'fecharAlert')

        alertContaCriada.appendChild(conteudoContaCriada)
        alertContaCriada.appendChild(buttonFechar)
        espaco.appendChild(alertContaCriada)
        return
    }

    if (password.value !== passwordRepet.value){
        const espaco = document.getElementById('espacoAlert')

        const alertContaCriada = document.createElement('div')
        alertContaCriada.setAttribute('class', 'alert alert-danger alert-dismissible fade show')
        const conteudoContaCriada = document.createElement('strong')
        conteudoContaCriada.innerText = 'Digite as senhas iguais!'
        const buttonFechar = document.createElement('button')
        buttonFechar.setAttribute('class', 'btn-close')
        buttonFechar.setAttribute('data-bs-dismiss', 'alert')
        buttonFechar.setAttribute('id', 'fecharAlert')

        alertContaCriada.appendChild(conteudoContaCriada)
        alertContaCriada.appendChild(buttonFechar)
        espaco.appendChild(alertContaCriada)
        return
    }

    const usuario = {
        nome: userName.value,
        senha: password.value,
        recados: []
    }
    usuarios.push(usuario)
    localStorage.setItem('dadosFormulario', JSON.stringify(usuarios))

    const espaco = document.getElementById('espacoAlert')

    const alertContaCriada = document.createElement('div')
    alertContaCriada.setAttribute('class', 'alert alert-success mt-3 alert-dismissible fade show')
    const conteudoContaCriada = document.createElement('strong')
    conteudoContaCriada.innerText = 'Conta criada com sucesso!'
    const conteudoExtra = document.createElement('p')
    conteudoExtra.innerText = 'Clique no X para ser redirecionado a página de Login'
    const buttonFechar = document.createElement('button')
    buttonFechar.setAttribute('class', 'btn-close')
    buttonFechar.setAttribute('data-bs-dismiss', 'alert')
    buttonFechar.setAttribute('id', 'fecharAlert')
    
    
    alertContaCriada.appendChild(conteudoContaCriada)
    alertContaCriada.appendChild(conteudoExtra)
    alertContaCriada.appendChild(buttonFechar)
    espaco.appendChild(alertContaCriada)

    buttonFechar.addEventListener('click', () => window.location.href = 'index.html' )
}


