// 1 pegar o elemento que representa o botao na tela usando js
const botaoTrailer = document.querySelector('.botao-trailer');

//3 pegar o elemento da modal no js
const modal = document.querySelector('.modal');

// 5 pegar o elemento de fechar a modal usando js
const botaoFecharModal = document.querySelector(".fechar-modal");

// 8 fechar o audio do video ao fechar o modal
const video = document.getElementById('video');

// 9 pegar o link do video
const linkDoVideo = video.src;

// funcao que esconde e abre a modal
function alternarModal() {
    modal.classList.toggle('aberto');
}

// 2 identificar quando o usuario clicar no botao
botaoTrailer.addEventListener('click', () => {

    // 4 abrir a modal na tela
    alternarModal();

    //10 abrir o video dnv
    video.setAttribute('src', linkDoVideo);
});

// 6 identificar quando o usuario clicar no botao x
botaoFecharModal.addEventListener('click', () => {

    alternarModal();
    // 7 fechar modal
    video.setAttribute('src', '');
});


