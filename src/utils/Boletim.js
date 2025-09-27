export class Boletim {

  constructor() {
    this.notas = [];//ARRAY notas
  }

  adicionarNota(nota) {
    if (typeof nota !== "number" || isNaN(nota)) {
      throw new TypeError(`O valor "${nota}" não é um número válido`);
    }
    if (nota < 0 || nota > 10) {
      throw new Error("Nota deve estar entre 0 e 10");
    }

    this.notas.push(nota);
  }

  calcularMedia() {
    if (this.notas.length === 0) {
      return 0;
    }

    const somatoria = this.notas.reduce((soma, valor) => soma + valor, 0);
    return somatoria / this.notas.length;
  }

  verificarAprovacao(mediaMinima = 7) {
    return this.calcularMedia() >= mediaMinima;
  }

}
