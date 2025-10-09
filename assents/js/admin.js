document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    validarLogin();
});

function validarLogin() {
    const cracha = document.getElementById("cracha").value.trim();
    const senha = document.getElementById("senha").value.trim();
    const erroMsg = document.getElementById("erro");

    // Credenciais fixas
    const crachaValido = "1234";     // Número do crachá específico
    const senhaValida = "senaidev";  // Senha específica

    // Verifica se os dados correspondem aos valores fixos
    if (cracha === crachaValido && senha === senhaValida) {
        window.location.href = "../pages/home_admi.html";
    } else { 
        erroMsg.textContent = "Crachá ou senha incorretos!";
    }
}