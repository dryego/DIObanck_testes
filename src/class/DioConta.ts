export abstract class conta {
  private nome: string;
  readonly numeroConta: number;
  saldo: number = 0;
  private statusConta: boolean = true;

  constructor(nome: string, numeroConta: number) {
    (this.nome = nome), (this.numeroConta = numeroConta);
  }

  getNome = (): string => {
    return this.nome;
  };

  depositar = (valorDeposito: number): void => {
    if (valorDeposito !== 0 && this.statusConta === true) {
      this.saldo += valorDeposito;
    }

    console.log("Valor depositado: ", valorDeposito);
  };

  sacar = (valorSaque: number): void => {
    if (valorSaque !== 0 && valorSaque <= this.saldo) {
      this.saldo -= valorSaque;

      console.log("Valor do saque: ", valorSaque);
    } else {
      console.log("Saldo insuficiente.");
    }
  };

  getsaldo = (): void => {
    console.log(this.saldo);
  };

  private validarConta = (): boolean => {
    if (this.statusConta === true) {
      return this.statusConta;
    }
    throw new Error("Conta inativa.");
  };
}
