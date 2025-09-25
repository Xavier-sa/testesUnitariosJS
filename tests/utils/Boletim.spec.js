import { Boletim } from "../../src/utils/Boletim.js";

let boletim;

beforeEach(() => {
  boletim = new Boletim();
});

describe("Boletim", () => {

  describe("adicionarNota()", () => {
    
    test("deve adicionar uma nota válida", () => {
      // Arrange
      const nota = 8;

      // Act
      boletim.adicionarNota(nota);

      // Assert
      expect(boletim.notas).toContain(nota);
    });

    test("deve lançar erro se nota não for número", () => {
      // Act + Assert
      expect(() => boletim.adicionarNota("a")).toThrow(TypeError);
      expect(() => boletim.adicionarNota("a")).toThrow('não é um número válido');
    });

    test("deve lançar erro se nota for menor que 0", () => {
      expect(() => boletim.adicionarNota(-1)).toThrow("Nota deve estar entre 0 e 10");
    });

    test("deve lançar erro se nota for maior que 10", () => {
      expect(() => boletim.adicionarNota(11)).toThrow("Nota deve estar entre 0 e 10");
    });
  });

  describe("calcularMedia()", () => {

    test("deve calcular a média corretamente com múltiplas notas", () => {
      // Arrange
      boletim.adicionarNota(8);
      boletim.adicionarNota(6);
      boletim.adicionarNota(10);

      // Act
      const media = boletim.calcularMedia();

      // Assert
      expect(media).toBeCloseTo(8); // (8 + 6 + 10) / 3 = 8
    });

    test("deve retornar 0 se não houver notas", () => {
      // Act
      const media = boletim.calcularMedia();

      // Assert
      expect(media).toBe(0);
    });
  });

  describe("verificarAprovacao()", () => {

    test("deve retornar true se média for maior ou igual a 7", () => {
      // Arrange
      boletim.adicionarNota(7);
      boletim.adicionarNota(8);

      // Act
      const aprovado = boletim.verificarAprovacao();

      // Assert
      expect(aprovado).toBe(true);
    });

    test("deve retornar false se média for menor que 7", () => {
      // Arrange
      boletim.adicionarNota(5);
      boletim.adicionarNota(6);

      // Act
      const aprovado = boletim.verificarAprovacao();

      // Assert
      expect(aprovado).toBe(false);
    });

    test("deve permitir configurar a média mínima", () => {
      // Arrange
      boletim.adicionarNota(6);
      boletim.adicionarNota(7);

      // Act
      const aprovado = boletim.verificarAprovacao(6.5);

      // Assert
      expect(aprovado).toBe(true);
    });
  });

});
