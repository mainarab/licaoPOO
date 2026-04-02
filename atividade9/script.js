class Veiculo {
  constructor(marca, ano) {
    this.marca = marca;
    this.ano = ano;
  }

  info() {
    console.log(`Informações`);
  }
}

class Carro extends Veiculo {
  constructor(marca, ano, portas) {
    super(marca, ano);
    this.portas = portas;
  }

  info() {
    console.log(`Informações: ${this.marca}, ${this.ano}, ${this.portas} portas`);
  }
}

class Moto extends Veiculo {
  constructor(marca, ano, cilindradas) {
    super(marca, ano);
    this.cilindradas = cilindradas;
  }
  info() {
    console.log(`Informações: ${this.marca}, ${this.ano}, ${this.cilindradas}cc`);
  }
}

let carro1 = new Carro("honda", 2002, 4);
let moto1 = new Moto("SUzuki", 2014, 600);

carro1.info()
moto1.info()