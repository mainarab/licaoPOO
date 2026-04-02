class Livro {
  constructor(titulo, autor) {
    this.titulo = titulo;
    this.autor = autor;
  }

  informacaoes(){
    console.log(`Livro: ${this.titulo} - Autor: ${this.autor}`)
  }
}

const livros = []

let livro1 = new Livro("Dom Casmurro", "Machado de Assis");
let livro2 = new Livro("Harry Potter", "J.K. Rowling");
let livro3 = new Livro("O Hobbit", "J.R.R. Tolkien");

livros.push(livro1, livro2, livro3)


for (let i=0; i<livros.length; i++){
  livros[i].informacaoes()
}