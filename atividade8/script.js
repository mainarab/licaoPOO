class Usuario {
  #senha = 1234;
  constructor(nome) {
    this.nome = nome;
  }

  verificarSenha(senhaDigitada) {
    if (senhaDigitada === this.#senha) {
      console.log("Acesso permitido");
    } else {
      console.log("Acesso Negado");
    }
  }
}

let usuario1 = new Usuario("Ana")
usuario1.verificarSenha(4567)
let usuario2 = new Usuario("Ester")
usuario2.verificarSenha(1234)
