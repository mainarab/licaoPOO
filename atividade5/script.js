class Produto {
  constructor(nome, preco, quantidade) {
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
  }

  calcularTotal() {
    let valor= this.preco * this.quantidade
    console.log(`o valor é de R$ ${valor}`);
  }

}


let produto1 = new Produto ("Maçã", 1.99, 3)

produto1.calcularTotal()