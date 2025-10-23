document.getElementById('form-reserva').addEventListener('submit', function(e) {
  e.preventDefault();

  const novaReserva = {
    nome: document.getElementById('nome').value,
    produto: document.getElementById('produto').value,
    quantidade: parseInt(document.getElementById('quantidade').value, 10),
    data: document.getElementById('data').value,
    telefone: document.getElementById('telefone').value,
    comentarios: document.getElementById('comentarios').value
  };

  // Recupera reservas existentes ou cria array vazio
  let reservas = [];
  try {
    reservas = JSON.parse(localStorage.getItem('reservas')) || [];
  } catch (e) {
    reservas = [];
  }

  reservas.push(novaReserva);
  localStorage.setItem('reservas', JSON.stringify(reservas));

  document.getElementById('msg-sucesso').style.display = 'block';
  this.reset();
});