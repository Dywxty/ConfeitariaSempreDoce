 document.addEventListener('DOMContentLoaded', function() {
      let reservas = [];
      try {
        reservas = JSON.parse(localStorage.getItem('reservasUsuario')) || [];
      } catch (e) {
        reservas = [];
      }
      let html = '';
      if (reservas.length === 0) {
        html = '<p>Você ainda não fez nenhuma reserva.</p>';
      } else {
        html = '<ul>';
        reservas.forEach(r => {
          html += `<li>
            <strong>Produto:</strong> ${r.produto} (${r.quantidade} un) - <strong>Data:</strong> ${r.data}
            <br><strong>Comentários:</strong> ${r.comentarios || 'Nenhum'}
          </li>`;
        });
        html += '</ul>';
      }
      document.getElementById('lista-reservas').innerHTML = html;
    });