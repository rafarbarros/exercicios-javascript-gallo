// Fila de atendimento
const filaDeAtendimento = [];

// Adicionar solicitação à fila
function adicionarSolicitacao() {
  const novaSolicitacao = document.getElementById("solicitacao").value;
  if (novaSolicitacao.trim() !== "") {
    filaDeAtendimento.push(novaSolicitacao);
    exibirFila();
    limparInput();
  }
}

// Atender próxima solicitação 
function atenderSolicitacao() {
  if (filaDeAtendimento.length > 0) {
    const solicitacaoAtendida = filaDeAtendimento.shift();
    alert(`Solicitação atendida: ${solicitacaoAtendida}`);
    exibirFila();
  } else {
    alert("Não há solicitações na fila.");
  }
}

// Exibir fila de atendimento
function exibirFila() {
  const filaElement = document.getElementById("fila");
  filaElement.innerHTML = "";

  if (filaDeAtendimento.length === 0) {
    filaElement.innerHTML = "<li>Nenhuma solicitação na fila.</li>";
  } else {
    filaDeAtendimento.forEach((solicitacao, index) => {
      const li = document.createElement("li");
      li.textContent = solicitacao;
      filaElement.appendChild(li);
    });
  }
}

// Limpar entrada
function limparInput() {
  document.getElementById("solicitacao").value = "";
}


exibirFila();