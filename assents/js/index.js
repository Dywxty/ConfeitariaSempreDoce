// Lista de imagens (renomeie seus arquivos para evitar espaços!)
let imagens = [
    'assents/img/4.jpg',
    'assents/img/3.jpg',
    'assents/img/2.jpg',
    'assents/img/1.jpg',
    'assents/img/5.jpg'

];

let indice = 0;

function exibirImagem() {
    let imagemCarrosel = document.getElementById('img-carrosel');
    imagemCarrosel.src = imagens[indice];
}

// Troca automaticamente de imagem a cada 5 segundos
function iniciarCarrossel() {
    exibirImagem();
    setInterval(() => {
        indice = (indice + 1) % imagens.length;
        exibirImagem();
    }, 5000);
}

window.onload = iniciarCarrossel;

// Carrossel de depoimentos
const depoimentos = document.querySelectorAll('.depoimento');
let depoIndex = 0;

function mostrarDepoimento(index) {
    depoimentos.forEach((depo, i) => {
        depo.classList.toggle('ativo', i === index);
    });
}

document.querySelector('.depo-btn.prev').onclick = function() {
    depoIndex = (depoIndex - 1 + depoimentos.length) % depoimentos.length;
    mostrarDepoimento(depoIndex);
};

document.querySelector('.depo-btn.next').onclick = function() {
    depoIndex = (depoIndex + 1) % depoimentos.length;
    mostrarDepoimento(depoIndex);
};

// Exibe o primeiro depoimento ao carregar
mostrarDepoimento(depoIndex);

document.getElementById('form-cadastro').onsubmit = function(e) {
    e.preventDefault();
    const senha = document.getElementById('senha-cad').value;
    const senha2 = document.getElementById('senha2-cad').value;
    const erro = document.getElementById('erro-cadastro');
    const sucesso = document.getElementById('sucesso-cadastro');

    if (senha !== senha2) {
        erro.style.display = 'block';
        sucesso.style.display = 'none';
    } else {
        erro.style.display = 'none';
        sucesso.style.display = 'block';
        document.getElementById('form-cadastro').reset();
    }
};

//contato
document.getElementById("form-contato").addEventListener("submit", function(e){
  e.preventDefault();

  const nome = document.getElementById("nome-contato").value.trim();
  const email = document.getElementById("email-contato").value.trim();
  const telefone = document.getElementById("telefone-contato").value.trim();
  const mensagem = document.getElementById("mensagem-contato").value.trim();
  const msgSucesso = document.getElementById("msg-sucesso");
  const form = document.getElementById("form-contato");

  if (!nome || !email || !mensagem) {
    alert("Por favor, preencha todos os campos obrigatórios!");
    return;
  }

  // Exibe mensagem de sucesso e esconde o formulário
  form.style.display = "none";
  msgSucesso.textContent = "✅ Sua mensagem foi enviada com sucesso! Fique atento ao nosso retorno.";
  msgSucesso.style.display = "block";

  console.log("Mensagem enviada:", { nome, email, telefone, mensagem });
});
