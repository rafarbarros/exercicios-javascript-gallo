// Exercícios COM JAVASCRIPT – Desenvolver com Fila

//Lista de Compras Interativa:
// Crie uma lista para armazenar o nome de produtos.
// Crie um método que permita que o usuário adicione itens à lista.
//Implemente a funcionalidade de pesquisar e remover itens da lista.
    
    // Lista de compras
    const listaDeCompras = [];

    // Função para adicionar item à lista
    function adicionarItem() {
      const newItem = document.getElementById("item").value;
      if (newItem.trim() !== "") {
        listaDeCompras.push(newItem);
        exibirLista();
        limparInput();
      }
    }

    // Função para pesquisar item na lista
    function pesquisarItem() {
      const searchTerm = document.getElementById("search").value.toLowerCase();
      const resultados = listaDeCompras.filter(item => item.toLowerCase().includes(searchTerm));
      exibirLista(resultados);
    }

    // Função para remover item da lista
    function removerItem(index) {
      listaDeCompras.splice(index, 1);
      exibirLista();
    }

    // Função para exibir a lista
    function exibirLista(itens = listaDeCompras) {
      const listaElement = document.getElementById("lista");
      listaElement.innerHTML = "";

      if (itens.length === 0) {
        listaElement.innerHTML = "<li>Nenhum item na lista.</li>";
      } else {
        itens.forEach((item, index) => {
          const li = document.createElement("li");
          li.textContent = item;
          const button = document.createElement("button");
          button.textContent = "Remover";
          button.onclick = () => removerItem(index);
          li.appendChild(button);
          listaElement.appendChild(li);
        });
      }
    }

    // Função para limpar o input
    function limparInput() {
      document.getElementById("item").value = "";
    }

    // Exibir a lista inicialmente
    exibirLista();



