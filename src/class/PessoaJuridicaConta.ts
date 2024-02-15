import { conta } from "./Dioconta";

export class pessoaJuridicaConta extends conta {
  cnpj: number;

  constructor(cnpj: number, nome: string, numeroConta: number) {
    super(nome, numeroConta);
    this.cnpj = cnpj;
  }

  getEmprestimo = (valorEmprestimo: number): void => {
    console.log("Emprestimo no valor: ", valorEmprestimo, " aprovado");
  };

  depositar = (valorDeposito: number): void => {
    if (valorDeposito !== 0) {
      this.saldo += valorDeposito;
    }

    console.log("Valor depositado pela empresa: ", valorDeposito);
  };
}
