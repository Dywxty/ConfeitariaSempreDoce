document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    validarLogin();
});

function validarLogin() {
    const cracha = document.getElementById("cracha").value.trim();
    const senha = document.getElementById("senha").value.trim();
    const erroMsg = document.getElementById("erro");

    // Credenciais fixas - teste
    const crachaValido = "1234";     
    const senhaValida = "senaidev";  

    // Verifica se os dados correspondem aos valores fixos
    if (cracha === crachaValido && senha === senhaValida) {
        window.location.href = "../pages/home_admin.html";
    } else { 
        erroMsg.textContent = "Crachá ou senha incorretos!";
    }
}