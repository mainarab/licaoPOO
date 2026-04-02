class Animal {
  constructor(nome) {
    this.nome = nome;
  }

  falar() {
    console.log(`falou`);
  }

}

class Gato extends Animal{
    falar() {
    console.log(`Miau`);
  }
}

class Cachorro extends Animal{
    falar() {
    console.log(`Au Au`);
  }
}

let gato1 = new Gato ("Mingau")
let cachorro1 = new Cachorro ("Caramelo")

gato1.falar()
cachorro1.falar()