// Criar a lista de imagens
const images = [
    'assets/img/1.jpg',
    'assets/img/2.jpg',
    'assets/img/3.jpg'
];

let indiceImagemAtualListaImagens = 0

function exibirImagem() {
let imagemCarrosel = document.getElementById('img-carrosel');
imagemCarrosel.src = images[indiceImagemAtualListaImagens];
}

//Deixar a imagem do carrossel mudando a cada 5 segundos
setInterval(function() {
    exibirImagem()
    indiceImagemAtualListaImagens++;

    if (indiceImagemAtualListaImagens > 2) {
        indiceImagemAtualListaImagens = 0;
    }
} , 5000);


exibirImagem()
indiceImagemAtualListaImagens++
