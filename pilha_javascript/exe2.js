// Exercícios COM JAVASCRIPT – Desenvolver com Pilha

//Histórico de Navegação Simples:
//Utilize uma pilha para armazenar o histórico de navegação de um usuário.
//Implemente os métodos de empilhar e desempilhar os endereços acessados.
    
// Pilha Histórico de navegação
const historicoDeNavegacao = [];

// Empilhar um novo endereço
function empilhar(endereco) {
  historicoDeNavegacao.push(endereco);
  exibirHistorico();
}

// Desempilhar o último endereço
function desempilhar() {
  historicoDeNavegacao.pop();
  exibirHistorico();
}

// Navegar para um novo endereço
function navegar() {
  const novoEndereco = document.getElementById("url").value;
  empilhar(novoEndereco);
  limparInput();
}

// Exibir histórico
function exibirHistorico() {
  const historicoElement = document.getElementById("historico");
  historicoElement.innerHTML = "";

  if (historicoDeNavegacao.length === 0) {
    historicoElement.innerHTML = "<li>Nenhum histórico disponível.</li>";
  } else {
    historicoDeNavegacao.forEach((endereco, index) => {
      const li = document.createElement("li");
      li.textContent = endereco;
      const button = document.createElement("button");
      button.textContent = "Remover";
      button.onclick = () => {
        historicoDeNavegacao.splice(index, 1);
        exibirHistorico();
      };
      li.appendChild(button);
      historicoElement.appendChild(li);
    });
  }
}

// Limpar o input
function limparInput() {
  document.getElementById("url").value = "";
}

// Exibir o histórico inicialmente
exibirHistorico();
