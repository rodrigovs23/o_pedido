let etapaAtual = 0;
    let etapas;

    window.onload = function () {
      etapas = document.querySelectorAll('.etapa');
      mostrarEtapa();
    };

    function mostrarEtapa() {
      etapas.forEach((etapa, index) => {
        etapa.classList.remove('ativa');
        if (index === etapaAtual) {
          etapa.classList.add('ativa');
        }
      });

      // Atualizar nome no final
      if (etapaAtual === etapas.length - 1) {
        const nome = localStorage.getItem("nome") || "";
        document.getElementById("nome-final").textContent = nome.toUpperCase();
      }
    }

    function salvarNome(event) {
      event.preventDefault();
      const input = document.querySelector('input[name="nome"]');
      const nome = input.value.trim();

      if (nome !== "") {
        localStorage.setItem("nome", nome);
        etapaAtual++;
        mostrarEtapa();
      }
    }

    function verificarMomentos() {
      const p1 = document.getElementById("primeiro").checked;
      const p2 = document.getElementById("romantica").checked;
      const p3 = document.getElementById("sexta").checked;

      if (p1 && p2 && p3) {
        etapaAtual++;
        mostrarEtapa();
      } else {
        alert("Marque mais momentos para continuar 💖");
      }
    }

    function proximaEtapa() {
      etapaAtual++;
      mostrarEtapa();
    }

    function reiniciar() {
      localStorage.removeItem("nome");
      etapaAtual = 0;
      mostrarEtapa();
    }
    function verificarMomentos() {
  const primeiro = document.getElementById("primeiro").checked;
  const romantica = document.getElementById("romantica").checked;
  const sexta = document.getElementById("sexta").checked;

  if (primeiro && romantica && sexta) {
    proximaEtapa();
  } else {
    alert("Você precisa marcar todos os momentos para continuar 💖");
  }
}