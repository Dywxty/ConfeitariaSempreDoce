function carregarPaginaUsuario() {
    const usuariosLS = window.localStorage.getItem("usuarios");
    const usuarios = JSON.parse(usuariosLS)
    const tbody = document.getElementById("tbody-usuarios");

    for (let i = 0; i < usuariosLS.length; i++) {
        const usuario = usuariosLS[i];
        const nome = usuario.nome;
        const email = usuario.email;

        //preencher a tabela com os dados do usuario

        //criara linha
        const linha = document.createElement("tr");

        //criar colunas
        const colunaNome = document.createElement("td");
        const colunaEmail = document.createElement("td");

        //adicionar as colunas na linha
        linha.appendChild(colunaNome);
        linha.appendChild(colunaEmail);

        //adiciona a linha no tbody
        tbody.appendChild(linha); 
}
}
carregarPaginaUsuario();