document.getElementById('form-reserva').addEventListener('submit', function(e) {
  e.preventDefault();

  const getValue = id => document.getElementById(id).value;

  const novaReserva = {
    nome: getValue('nome'),
    produto: getValue('produto'),
    quantidade: parseInt(getValue('quantidade'), 10),
    data: getValue('data'),
    telefone: getValue('telefone'),
    comentarios: getValue('comentarios')
  };

  // Função para salvar no localStorage
  function salvarReserva(chave) {
    const reservas = JSON.parse(localStorage.getItem(chave)) || [];
    reservas.push(novaReserva);
    localStorage.setItem(chave, JSON.stringify(reservas));
  }

  salvarReserva('reservasUsuario');
  salvarReserva('reservas'); // Para o admin

  document.getElementById('msg-sucesso').style.display = 'block';
  this.reset();
  window.location.href = "minhas_reservas.html";
});