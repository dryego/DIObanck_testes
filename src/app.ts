import { pessoaFisicaConta } from "./class/PessoaFisicaConta";
import { pessoaJuridicaConta } from "./class/PessoaJuridicaConta";

const novaConta: pessoaFisicaConta = new pessoaFisicaConta(
  1010101,
  "Dryego barbosa",
  1
);
console.log(novaConta);

const novaContaPJ: pessoaJuridicaConta = new pessoaJuridicaConta(
  111100,
  "JD repasses",
  505
);
console.log(novaContaPJ);

novaConta.depositar(200);
novaConta.sacar(50);
novaConta.getsaldo();

novaContaPJ.depositar(100);
novaContaPJ.getsaldo();
console.log(novaConta.getNome());

console.log(novaContaPJ.getNome());
