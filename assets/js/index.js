// Criar a lista de imagens
const images = [
    'assets/img/bolo-1.jpg',
    'assets/img/bolo-2.jpg',
    'assets/img/bolo-3.jpg'
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
