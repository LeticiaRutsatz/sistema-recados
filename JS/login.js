//LOGIN USUÁRIO


let novaListaUsuarios = JSON.parse(localStorage.getItem('dadosFormulario'))
const formularioLogin = document.getElementById('formularioLogin')

formularioLogin.addEventListener('submit', (evento) => {
    evento.preventDefault()
    loginUsuario()
})

function loginUsuario(){
    const usernameLogin = document.getElementById('username')
    const passwordlogin = document.getElementById('password')

    const usuarioLogando = novaListaUsuarios.find((dado) => {
        return dado.nome === usernameLogin.value && dado.senha === passwordlogin.value
    })

    if(usuarioLogando){
        localStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogando))
        window.location.href = "recados.html"
        return
    }else{
        const espaco = document.getElementById('espacoAlert')

        const alertContaCriada = document.createElement('div')
        alertContaCriada.setAttribute('class', 'alert alert-danger alert-dismissible fade show')
        const conteudoContaCriada = document.createElement('strong')
        conteudoContaCriada.innerText = 'Usuário ou senha incorretos!'
        const buttonFechar = document.createElement('button')
        buttonFechar.setAttribute('class', 'btn-close')
        buttonFechar.setAttribute('data-bs-dismiss', 'alert')
        buttonFechar.setAttribute('id', 'fecharAlert')

        alertContaCriada.appendChild(conteudoContaCriada)
        alertContaCriada.appendChild(buttonFechar)
        espaco.appendChild(alertContaCriada)
    }
}