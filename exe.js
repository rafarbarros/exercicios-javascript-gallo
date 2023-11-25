//Histórico de Navegação Simples:
//Utilize uma pilha para armazenar o histórico de navegação de um usuário.
//Implemente os métodos de empilhar e desempilhar os endereços acessados.
    
class Navegacao {
    constructor() {
      this.historico = [];
    }
  
    // Método para empilhar um novo endereço
    empilhar(endereco) {
      this.historico.push(endereco);
    }
  
    // Método para desempilhar o endereço mais recente
    desempilhar() {
      if (this.historico.length === 0) {
        console.log("Histórico de navegação vazio");
        return null;
      }
      return this.historico.pop();
    }
  
    // Método para exibir o histórico de navegação
    exibirHistorico() {
      console.log("Histórico de Navegação:", this.historico);
    }
  }
  
  // Exemplo de uso
  const historicoNavegacao = new Navegacao();
  
  historicoNavegacao.empilhar("https://www.google.com");
  historicoNavegacao.empilhar("https://www.linkedin.com");
  historicoNavegacao.empilhar("https://www.github.com");
  
  historicoNavegacao.exibirHistorico();
  
  const enderecoAtual = historicoNavegacao.desempilhar();
  console.log("Endereço Atual:", enderecoAtual);
  
  historicoNavegacao.exibirHistorico();
  
