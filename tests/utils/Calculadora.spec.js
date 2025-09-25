import { Calculadora } from "../../src/utils/Calculadora.js";

/**
 * ****Classe de Criar Usuário
 * 
 * **Método: criar caminho feliz
 * - Recebe o objeto do usuário.
 * - Valida se já existe um usuário com o mesmo CPF no banco.
 * - Cria o usuário no banco, monta a saída em JSON.
 * - Retorna a saída.
 * 
 * Testes:
 * - Quando chamar o método buscarUsuárioPorCpf, deve retornar vazio.
 * - Quando chamar o método criarUsuário, deve retornar o usuário.
 * 
 * Exemplo de asserção:
 * assert(saida).toEqual({...........})
 * 
 * Verificações:
 * - Verifica se o mock do model.buscarUsuarioPorCpf foi chamado X vezes.
 * - Verifica se o mock do model.buscarUsuarioPorCpf foi chamado com o parâmetro Y.
 */

let calculadora;
//arrange
beforeEach(() => {
  calculadora = new Calculadora();
});

describe('Testes unitários da classe Calculadora.js', () => {

  describe("somar()", () => {
    test("deve somar dois valores", () => {
      // Act
      const resultado = calculadora.somar(1, 2);
      // Assert
      expect(resultado).toBe(3);
    });

    test("deve lançar erro se valor não for número", () => {
      expect(() => calculadora.somar("a", 2)).toThrow(TypeError);
    });
  });

  describe("subtrair()", () => {
    test("deve subtrair dois valores", () => {
      // Act
      const resultado = calculadora.subtrair(1, 2);
      // Assert
      expect(resultado).toBe(-1);  // Corrigido aqui
    });

    test("deve lançar erro se valor não for número", () => {
      expect(() => calculadora.subtrair("a", 2)).toThrow(TypeError);
    });
  });

  describe("multiplicar()", () => {
    test("deve multiplicar dois valores", () => {
      expect(calculadora.multiplicar(4, 3)).toBe(12);
    });
  });

  describe("dividir()", () => {
    test("deve dividir dois valores", () => {
      expect(calculadora.dividir(10, 2)).toBe(5);
    });

    test("deve lançar erro ao dividir por zero", () => {
      expect(() => calculadora.dividir(10, 0)).toThrow("Divisão por zero não é permitida");
    });
  });

  describe("jurosSimples()", () => {
    test("deve calcular juros simples corretamente", () => {
      expect(calculadora.jurosSimples(1000, 0.05, 2)).toBe(100);
    });
  });

  describe("jurosCompostos()", () => {
    test("deve calcular juros compostos corretamente", () => {
      // 1000 * (1 + 0.05)^2 = 1102.5
      expect(calculadora.jurosCompostos(1000, 0.05, 2)).toBeCloseTo(1102.5);
    });
  });

  describe("descontoPercentual()", () => {
    test("deve aplicar desconto percentual corretamente", () => {
      expect(calculadora.descontoPercentual(200, 0.1)).toBe(180);
    });

    test("deve lançar erro se percentual não estiver entre 0 e 1", () => {
      expect(() => calculadora.descontoPercentual(200, 1.5)).toThrow("Percentual deve estar entre 0 e 1");
    });
  });

  describe("descontoFixo()", () => {
    test("deve aplicar desconto fixo corretamente", () => {
      expect(calculadora.descontoFixo(200, 50)).toBe(150);
    });

    test("deve lançar erro se desconto for maior que o valor", () => {
      expect(() => calculadora.descontoFixo(100, 150)).toThrow("Desconto maior que o valor");
    });
  });

});
