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

  // Salva no localStorage do usuário
  let reservasUsuario = [];
  try {
    reservasUsuario = JSON.parse(localStorage.getItem('reservasUsuario')) || [];
  } catch (e) {
    reservasUsuario = [];
  }
  reservasUsuario.push(novaReserva);
  localStorage.setItem('reservasUsuario', JSON.stringify(reservasUsuario));

  // Salva no localStorage do admin
  let reservasAdmin = [];
  try {
    reservasAdmin = JSON.parse(localStorage.getItem('reservas')) || [];
  } catch (e) {
    reservasAdmin = [];
  }
  reservasAdmin.push(novaReserva);
  localStorage.setItem('reservas', JSON.stringify(reservasAdmin));

  // Redireciona para a página de minhas reservas
  window.location.href = "minhas_reservas.html";
});
});