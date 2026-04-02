class Pessoa {
  constructor(nome, idade) {
    ((this.nome = nome), (this.idade = idade));
  }

  apresentar(){
    console.log(`olá, meu nome é ${this.nome} e tenho ${this.idade} anos`)
  }
}

let pessoa1= new Pessoa("Ana", 50)
let pessoa2 = new Pessoa("João", 30)

pessoa1.apresentar()
pessoa2.apresentar()