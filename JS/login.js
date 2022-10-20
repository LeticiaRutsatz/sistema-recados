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
        alert("Usuário não encontrado, digite seu Login e Senha Corretamente")
    }
}