document.getElementById('form-login').onsubmit = function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value.trim();
    const btn = document.getElementById('btn-login');
    const circulo = document.getElementById('circulo-login');

    // pega os usuários salvos no localStorage
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const usuario = usuarios.find(u => u.email === email && u.senha === senha);

    // animação de carregamento
    btn.style.display = 'none';
    circulo.style.display = 'block';

    setTimeout(function() {
        if (usuario) {
            // ✅ Login correto: redireciona
           
            window.location.href = "index.html";
        } else {
            // ❌ Login incorreto: mostra mensagem
            circulo.style.display = 'none';
            btn.style.display = 'block';

            let erro = document.getElementById('erro-login');
            if (!erro) {
                erro = document.createElement('div');
                erro.id = 'erro-login';
                erro.style.color = '#ff8000';
                erro.style.marginTop = '10px';
                btn.parentNode.appendChild(erro);
            }
            erro.textContent = "E-mail ou senha incorretos!";
        }
    }, 1500); // tempo do carregamento
};
