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
        alert("Este nome de usuário já existe!")
        return
    }

    if (password.value !== passwordRepet.value){
        alert("Digite as senhas iguais")
        return
    }

    const usuario = {
        nome: userName.value,
        senha: password.value,
        recados: []
    }
    usuarios.push(usuario)
    localStorage.setItem('dadosFormulario', JSON.stringify(usuarios))

    alert("Conta Criada com Sucesso!")
    window.location.href = "index.html"
}


