class Produto {
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }
}

class Carrinho {
  constructor() {
    this.produtos =[]
  }

  adicionarProduto(produto) {
    this.produtos.push(produto)
  }

  mostrarCarrinho() {
    this.produtos.forEach(produto =>{
      console.log(`Produto: ${produto.nome}- ${produto.preco}`)
    })
  }

  calcularTotal() {
    let total= 0

    this.produtos.forEach(produto=>{
      total+= produto.preco
    })

    console.log(`Total da compra é de ${total}`)
  }
}


let produto1 = new Produto("Camisa", 50);
let produto2 = new Produto("Calça", 100);
let carrinho = new Carrinho();

carrinho.adicionarProduto(produto1);
carrinho.adicionarProduto(produto2);

carrinho.mostrarCarrinho();
carrinho.calcularTotal();