
//CRIANDO OS RECADOS

let usuarioLogadoOn = JSON.parse(localStorage.getItem('usuarioLogado'))
const descricao = document.getElementById('descricao')
const detalhamento = document.getElementById('detalhamento')
const botaoSair = document.getElementById("botaoSair")
 
const form = document.getElementById('formularioRecados')
form.addEventListener('submit', (e) => {
    e.preventDefault();
    salvarRecados();
})

document.addEventListener('DOMContentLoaded', () => {
    if(!usuarioLogadoOn){
        alert("Você precisa estar logado para acessar a página")
        window.location.href = "cadastro.html"
    }

    criarRecados(usuarioLogadoOn)
})

botaoSair.addEventListener('click', () => {
    const usuarios = JSON.parse(localStorage.getItem('dadosFormulario'))

    const indice = usuarios.findIndex((usuario) => usuario.nome === usuarioLogadoOn.nome)

    usuarios[indice] = usuarioLogadoOn

    localStorage.setItem('dadosFormulario', JSON.stringify(usuarios))

    localStorage.removeItem('usuarioLogado')

    window.location.href="index.html"
} )
 
function salvarRecados(){
    const recadoHTML = {
        id: Math.floor((Math.random()*1004.75)+ 7),
        descricao: descricao.value,
        detalhamento: detalhamento.value
    }
 
    usuarioLogadoOn.recados.push(recadoHTML)

    localStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogadoOn))
    criarRecados(usuarioLogadoOn)

    form.reset();
}
 
function criarRecados(usuariolog){

    const tbody = document.getElementById('tbody');
    tbody.innerHTML = '';

    usuariolog.recados.forEach(dado => {
        const linhaTr = document.createElement('tr')
        linhaTr.setAttribute('style', 'border: 0.02px solid #d7d7d7;')
        linhaTr.setAttribute('id', dado.id)

        const idRecado = document.createElement('td')
        idRecado.innerText = dado.id
    
        const descricaoRecado = document.createElement('td')
        descricaoRecado.innerText = dado.descricao
    
        const detalhamentoRecado = document.createElement('td')
        detalhamentoRecado.innerText = dado.detalhamento

        const botaoEditar = document.createElement('button')
        botaoEditar.setAttribute('type', 'button')
        botaoEditar.setAttribute('class', 'buttonRecados')
        botaoEditar.innerText = 'Editar'
        botaoEditar.addEventListener('click', () => {
            if(botaoEditar.innerText === 'Editar'){
                editarRecados(dado, botaoEditar, botaoExcluir)
            }else{
                atualizar(dado, botaoEditar, botaoExcluir)
            }
        })

        const botaoExcluir = document.createElement('button')
        botaoExcluir.setAttribute('type', 'button')
        botaoExcluir.setAttribute('class', 'buttonRecados')
        botaoExcluir.innerText = 'Excluir'

        botaoExcluir.addEventListener('click', () => {
            if(botaoExcluir.innerText == 'Cancelar'){
                editarRecados()
            }else{
                excluirRecados(dado)
            }
        })
    
        linhaTr.appendChild(idRecado);
        linhaTr.appendChild(descricaoRecado);
        linhaTr.appendChild(detalhamentoRecado);
        linhaTr.appendChild(botaoEditar);
        linhaTr.appendChild(botaoExcluir)
        tbody.appendChild(linhaTr)

    });

}

function editarRecados(dado, editar, excluir){
    editar.innerText = 'Atualizar'
    editar.setAttribute('style', 'background: #E23C2A')
    
    descricao.value = dado.descricao,
    detalhamento.value = dado.detalhamento

    excluir.innerText = 'Cancelar'
    excluir.setAttribute('style', 'background: #E23C2A')
    
    excluir.addEventListener('click', () => {
        editar.innerText = 'Editar'
        editar.setAttribute('style', 'background: #F55E08')
        excluir.innerText = 'Excluir'
        excluir.setAttribute('style', 'background: #F55E08')
    })

}

function atualizar(dados, editar, excluir){

    const indexRecado = usuarioLogadoOn.recados.findIndex((dado) => dado.id === dados.id )
    console.log(indexRecado)

    let recadoAtualizado = {
        id: dados.id,
        descricao: descricao.value,
        detalhamento: detalhamento.value,
    }

    usuarioLogadoOn.recados[indexRecado] = recadoAtualizado
    localStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogadoOn))

    location.reload()

    editar.innerText = 'Editar'
    excluir.innerText = 'Excluir'

    form.reset()
}

function excluirRecados(dado){
    document.getElementById(`${dado.id}`).remove()
    recadosAtualizados = usuarioLogadoOn.recados.filter((recado) => recado.id !== dado.id) 

    usuarioLogadoOn.recados = recadosAtualizados
    console.log(recadosAtualizados)

    localStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogadoOn))
}