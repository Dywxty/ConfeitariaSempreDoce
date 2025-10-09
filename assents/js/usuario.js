function carregarUsuarios() {
    /*Esta função faz leiturdo local storage e carrega os usuários cadastrados
    via formulário do sistema.*/

    const usuariosLS = window.localStorage.getItem('usuarios')
    const usuarios = JSON.parse(usuariosLS)
    const tbodyUsuarios = document.getElementById('tbody-usuarios')

    for (let i = 0; i < usuarios.length; i++) {
        const usuario = usuarios[i]    
        const nome = usuario.nome 
        const email = usuario.email

        // agora preencher a tabela
        
        //criar a linha
        const linha = document.createElement('tr')

        //criar as colunas
        const colunaNome = document.createElement('td')
        const colunaEmail = document.createElement('td')

        // associoanr os valores as colunas
        colunaNome.innerText = nome
        colunaEmail.innerText = email

        //adicionar as colunas na linha
        linha.appendChild(colunaNome)
        linha.appendChild(colunaEmail)

        //adicionar a linha no corpo da tabela
        tbodyUsuarios.appendChild(linha)
    }

}
carregarUsuarios()