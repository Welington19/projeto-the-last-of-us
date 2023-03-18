
// OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente

//passo 1 - dar um jeito de pegar o elemento HTML dos botões
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');


//passo 2 - dar um jeito de identficar o clique do usuário no botão
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        // passo 3 - desmarcar o botão selecionado anterior
        desativarBotaoSelecionado();//Função que linka na linha 42

        // passo 4 - marcar o botão clicado como se estivesse selecionada
        selecionarBotaoCarrossel(botao);//Fução que linka na linha 33

        // passo 5 - esconder a imagem ativa de fundo 
        esconderImagemAtiva();// Funcão que linka na linha 37

        // passo 6 - fazer aparecer a imagem do fundo correspondente ao botão clicado
        
        mostrarImagemDeFundo(indice);//Função que linka na linha 29

    })
})

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

