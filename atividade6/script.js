class Aluno {
  constructor(nome, nota1, nota2) {
    this.nome = nome;
    this.nota1 = nota1;
    this.nota2 = nota2;
  }

  calcularMedia() {
    let media = (this.nota1 + this.nota2) / 2;
    if (media >= 7) {
      console.log(`Sua média é de: ${media}, você foi aprovado`);
    } else {
      console.log(`Sua média é de: ${media}, você foi reprovado`);
    }
  }
}

let aluno1 = new Aluno("Maria", 10, 5);

aluno1.calcularMedia();
