class Carro {
  constructor(marca, modelo, velocidade) {
    this.marca = marca
    this.modelo = modelo;
    this.velocidade = velocidade;
  }

  acelerar(){
   console.log(`O carro acelerou, velocidade: ${this.velocidade += 10}`)
  }

  frear(){
    console.log(`O carro freiou, velocidade: ${this.velocidade-=5}`)
  }
  mostrarVelocidade(){
    console.log(`velocidade atual: ${this.velocidade}`)
  }
}

let carro1= new Carro("Honda", 2002, 20)
carro1.acelerar()
carro1.frear()
carro1.acelerar()
carro1.mostrarVelocidade()
