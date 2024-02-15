import { conta } from "./DioConta";

export class pessoaFisicaConta extends conta {
  cpf: number;

  constructor(cpf: number, nome: string, numerConta: number) {
    super(nome, numerConta);
    this.cpf = cpf;
  }
}
