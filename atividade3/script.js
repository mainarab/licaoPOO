class ContaBancaria {
  constructor(titular, saldo) {
    this.titular = titular;
    this.saldo = saldo;
  }

  depositar(valor) {
    console.log(`Deposito R$ ${valor},00`);
  }

  sacar(valor) {
    if (valor > this.saldo) {
      console.log(
        `o valor é maior que o disponível na conta, não foi possivel sacar`,
      );
    } else {
      console.log(
        `${valor} sacado com sucesso`,
      );
    }
  }
  verSaldo() {
    console.log(`Saldo atual: ${this.saldo}`);
  }
}

let conta1 = new ContaBancaria("Ana", 200);
conta1.depositar(50)
conta1.sacar(300)
conta1.sacar(200)
conta1.verSaldo()
