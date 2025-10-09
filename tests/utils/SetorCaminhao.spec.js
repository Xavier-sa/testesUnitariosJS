import { Setor } from "../../src/utils/SetorCaminhao.js";

let setor;

// Arrange
beforeEach(() => {
  setor = new Setor(
    "Setor X",
    "Caminhão 01",
    ["João"], // 1 motorista
    ["Pedro", "Carlos", "Rafael"] // 3 coletores
  );
});

describe("Testes unitários da classe Setor.js", () => {
  
  describe("iniciarSetor()", () => {
    
    test("deve iniciar o setor com 1 motorista e 3 coletores", () => {
      // Act
      setor.iniciarSetor();

      // Assert
      expect(setor.ativo).toBe(true);
    });

    test("deve permitir iniciar com 2 motoristas e 2 coletores", () => {
      // Arrange
      setor.motoristas = ["João", "Carlos"];
      setor.coletores = ["Pedro", "Rafael"];

      // Act
      setor.iniciarSetor();

      // Assert
      expect(setor.ativo).toBe(true);
    });

    test("deve lançar erro se não houver caminhão", () => {
      // Arrange
      setor.caminhao = null;

      // Assert
      expect(() => setor.iniciarSetor()).toThrow("É necessário um caminhão escalado");
    });

    test("deve lançar erro se houver mais de 2 motoristas", () => {
      // Arrange
      setor.motoristas = ["João", "Carlos", "Marcos"];

      // Assert
      expect(() => setor.iniciarSetor()).toThrow("Não pode haver mais de 2 motoristas");
    });

    test("deve lançar erro se houver menos de 2 coletores", () => {
      // Arrange
      setor.coletores = ["Pedro"];

      // Assert
      expect(() => setor.iniciarSetor()).toThrow("O caminhão precisa de pelo menos 2 coletores");
    });

    test("deve lançar erro se houver mais de 3 coletores", () => {
      // Arrange
      setor.coletores = ["Pedro", "Carlos", "Rafael", "Bruno"];

      // Assert
      expect(() => setor.iniciarSetor()).toThrow("Máximo de 3 coletores");
    });
  });

  describe("encerrarSetor()", () => {
    test("deve encerrar um setor ativo", () => {
      // Arrange
      setor.iniciarSetor();

      // Act
      setor.encerrarSetor();

      // Assert
      expect(setor.ativo).toBe(false);
    });

    test("deve lançar erro ao tentar encerrar setor não iniciado", () => {
      // Assert
      expect(() => setor.encerrarSetor()).toThrow("ainda não foi iniciado");
    });
  });
});
