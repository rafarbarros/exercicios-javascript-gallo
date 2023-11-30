class Node {
    constructor(name, children = []) {
      this.name = name;
      this.children = children;
    }
  }

  // Criando estrutura do menu de navegação
  const menuTree = new Node('Menu Principal', [
    new Node('Página Inicial'), 
    
    new Node('Produtos',  [
      new Node('Eletrônicos', [
        new Node('Smartphones'),
        new Node('Laptops'),
      ]),
      new Node('Roupas', [
        new Node('Camisetas'),
        new Node('Calças'),
      ]),
    ]),
    new Node('Contato'),
  ]);

  // Exibir o menu 
  function exibirMenu(node, parentElement) {
    const listItem = document.createElement('li');
    listItem.textContent = node.name;

    if (node.children.length > 0) {
      const sublist = document.createElement('ul');
      node.children.forEach(child => {
        exibirMenu(child, sublist);
      });
      listItem.appendChild(sublist);
    }

    parentElement.appendChild(listItem);
  }

  // Exibindo o menu
  const menuElement = document.getElementById('menu');
  exibirMenu(menuTree, menuElement);