document.addEventListener('DOMContentLoaded', function() {
  let reservas = [];
  try {
    reservas = JSON.parse(localStorage.getItem('reservas')) || [];
  } catch (e) {
    reservas = [];
  }

  // Transforma reservas em eventos do calendário
  let eventos = reservas.map((reserva, idx) => ({
    title: `${reserva.produto} (${reserva.quantidade} un)`,
    start: reserva.data,
    extendedProps: { ...reserva, idx }
  }));

  let calendarEl = document.getElementById('calendar');
  let calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    locale: 'pt-br',
    events: eventos,
    eventClick: function(info) {
      let r = info.event.extendedProps;
      let detalhes = `
        <strong>Nome:</strong> ${r.nome}<br>
        <strong>Produto:</strong> ${r.produto}<br>
        <strong>Quantidade:</strong> ${r.quantidade}<br>
        <strong>Data da Retirada:</strong> ${r.data}<br>
        <strong>Telefone:</strong> ${r.telefone}<br>
        <strong>Comentários:</strong> ${r.comentarios || 'Nenhum'}
      `;
      document.getElementById('detalhes-reserva').innerHTML = detalhes;
      document.getElementById('modal-detalhes').style.display = 'block';
    }
  });
  calendar.render();
});