console.log("✅ cadastro.js carregado!");

document.getElementById('form-cadastro').onsubmit = function (e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value.trim();
    const confirmarSenha = document.getElementById('confirmar-senha').value.trim();
    const erro = document.getElementById('erro-cadastro');
    const sucesso = document.getElementById('sucesso-cadastro');

    // 🔎 Validação dos campos
    if (!nome || !email || !senha || !confirmarSenha) {
        erro.textContent = 'Por favor, preencha todos os campos.';
        erro.style.display = 'block';
        sucesso.style.display = 'none';
        return;
    }

    if (senha !== confirmarSenha) {
        erro.textContent = 'As senhas não coincidem. Tente novamente.';
        erro.style.display = 'block';
        sucesso.style.display = 'none';
        return;
    }

    // ✅ Se passou pela validação, salvar no localStorage
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Verifica se o e-mail já está cadastrado
    const jaExiste = usuarios.some(u => u.email === email);
    if (jaExiste) {
        erro.textContent = 'Este e-mail já está cadastrado.';
        erro.style.display = 'block';
        sucesso.style.display = 'none';
        return;
    }

    usuarios.push({ nome, email, senha });
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    // ✅ Mostra mensagem de sucesso
    erro.style.display = 'none';
    sucesso.style.display = 'block';
    document.getElementById('form-cadastro').reset();
};

// 👁️ Mostrar / ocultar senha
document.getElementById('mostrar-senha').addEventListener('change', function () {
    const senha = document.getElementById('senha');
    const confirmarSenha = document.getElementById('confirmar-senha');
    const tipo = this.checked ? 'text' : 'password';
    senha.type = tipo;
    confirmarSenha.type = tipo;
});
