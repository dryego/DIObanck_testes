import { conta } from "./Dioconta";

export class pessoaFisicaConta extends conta {
  cpf: number;

  constructor(cpf: number, nome: string, numerConta: number) {
    super(nome, numerConta);
    this.cpf = cpf;
  }
}
