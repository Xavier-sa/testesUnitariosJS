import { Calculadora } from "../../src/utils/Calculadora.js";

/**
 *****Classe de Criar Usuário
 * 
 ***Método: criar caminho feliz
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

// Arrange
beforeEach(() => {
  calculadora = new Calculadora();
});

describe('Testes unitários da classe Calculadora.js', () => {
  
  describe("somar()", () => {
    test("deve somar dois valores positivos", () => {//#01
      // Act
      const resultado = calculadora.somar(1, 2);
      
      // Assert
      expect(resultado).toBe(3);
    });
    
    test("deve somar dois valores negativos", () => {//#02
      // Act
      const resultado = calculadora.somar(-5, -3);
      
      // Assert
      expect(resultado).toBe(-8);
    });
    
    test("deve somar valor positivo com negativo", () => {//#03
      // Act
      const resultado = calculadora.somar(10, -3);
      
      // Assert
      expect(resultado).toBe(7);
    });
    
    test("deve somar com zero", () => {//#04
      // Act
      const resultado = calculadora.somar(5, 0);
      
      // Assert
      expect(resultado).toBe(5);
    });
    
    test("deve somar números decimais", () => {//#05
      // Act
      const resultado = calculadora.somar(2.5, 3.2);
      
      // Assert
      expect(resultado).toBeCloseTo(5.7);
    });
    
    test("deve lançar erro se primeiro valor não for número", () => {//#06
      // Act & Assert
      expect(() => calculadora.somar("a", 2)).toThrow(TypeError);
    });
    
    test("deve lançar erro se segundo valor não for número", () => {//#07
      // Act & Assert
      expect(() => calculadora.somar(2, "b")).toThrow(TypeError);
    });
    
    test("deve lançar erro se ambos valores não forem números", () => {//#08
      // Act & Assert
      expect(() => calculadora.somar("a", "b")).toThrow(TypeError);
    });
  });

  describe("subtrair()", () => {
    test("deve subtrair dois valores positivos", () => {//
      // Act
      const resultado = calculadora.subtrair(5, 2);
      
      // Assert
      expect(resultado).toBe(3);
    });
    
    test("deve subtrair quando resultado é negativo", () => {
      // Act
      const resultado = calculadora.subtrair(1, 2);
      
      // Assert
      expect(resultado).toBe(-1);
    });
    
    test("deve subtrair dois valores negativos", () => {
      // Act
      const resultado = calculadora.subtrair(-10, -10);
      
      // Assert
      expect(resultado).toBe(0);
    });
    
    test("deve subtrair valor positivo de negativo", () => {
      // Act
      const resultado = calculadora.subtrair(-5, 3);
      
      // Assert
      expect(resultado).toBe(-8);
    });
    
    test("deve subtrair valor negativo de positivo", () => {
      // Act
      const resultado = calculadora.subtrair(5, -3);
      
      // Assert
      expect(resultado).toBe(8);
    });
    
    test("deve subtrair com zero", () => {
      // Act
      const resultado = calculadora.subtrair(5, 0);
      
      // Assert
      expect(resultado).toBe(5);
    });
    
    test("deve subtrair números decimais", () => {
      // Act
      const resultado = calculadora.subtrair(5.5, 2.3);
      
      // Assert
      expect(resultado).toBeCloseTo(3.2);
    });
    
    test("deve lançar erro se primeiro valor não for número", () => {
      // Act & Assert
      expect(() => calculadora.subtrair("a", 2)).toThrow(TypeError);
    });
    
    test("deve lançar erro se segundo valor não for número", () => {
      // Act & Assert
      expect(() => calculadora.subtrair(2, "b")).toThrow(TypeError);
    });
  });

  describe("multiplicar()", () => {
    test("deve multiplicar dois valores positivos", () => {
      // Act
      const resultado = calculadora.multiplicar(4, 3);
      
      // Assert
      expect(resultado).toBe(12);
    });
    
    test("deve multiplicar dois valores negativos", () => {
      // Act
      const resultado = calculadora.multiplicar(-4, -3);
      
      // Assert
      expect(resultado).toBe(12);
    });
    
    test("deve multiplicar valor positivo por negativo", () => {
      // Act
      const resultado = calculadora.multiplicar(4, -3);
      
      // Assert
      expect(resultado).toBe(-12);
    });
    
    test("deve multiplicar por zero", () => {
      // Act
      const resultado = calculadora.multiplicar(5, 0);
      
      // Assert
      expect(resultado).toBe(0);
    });
    
    test("deve multiplicar por um", () => {
      // Act
      const resultado = calculadora.multiplicar(7, 1);
      
      // Assert
      expect(resultado).toBe(7);
    });
    
    test("deve multiplicar números decimais", () => {
      // Act
      const resultado = calculadora.multiplicar(2.5, 4);
      
      // Assert
      expect(resultado).toBeCloseTo(10);
    });
    
    test("deve lançar erro se primeiro valor não for número", () => {
      // Act & Assert
      expect(() => calculadora.multiplicar("a", 2)).toThrow(TypeError);
    });
    
    test("deve lançar erro se segundo valor não for número", () => {
      // Act & Assert
      expect(() => calculadora.multiplicar(2, "b")).toThrow(TypeError);
    });
  });

  describe("dividir()", () => {
    test("deve dividir dois valores positivos", () => {
      // Act
      const resultado = calculadora.dividir(10, 2);
      
      // Assert
      expect(resultado).toBe(5);
    });
    
    test("deve dividir dois valores negativos", () => {
      // Act
      const resultado = calculadora.dividir(-12, -3);
      
      // Assert
      expect(resultado).toBe(4);
    });
    
    test("deve dividir valor positivo por negativo", () => {
      // Act
      const resultado = calculadora.dividir(15, -3);
      
      // Assert
      expect(resultado).toBe(-5);
    });
    
    test("deve dividir valor negativo por positivo", () => {
      // Act
      const resultado = calculadora.dividir(-20, 4);
      
      // Assert
      expect(resultado).toBe(-5);
    });
    
    test("deve dividir zero por número", () => {
      // Act
      const resultado = calculadora.dividir(0, 5);
      
      // Assert
      expect(resultado).toBe(0);
    });
    
    test("deve dividir números decimais", () => {
      // Act
      const resultado = calculadora.dividir(7.5, 2.5);
      
      // Assert
      expect(resultado).toBeCloseTo(3);
    });
    
    test("deve dividir por um", () => {
      // Act
      const resultado = calculadora.dividir(8, 1);
      
      // Assert
      expect(resultado).toBe(8);
    });
    
    test("deve lançar erro ao dividir por zero", () => {
      // Act & Assert
      expect(() => calculadora.dividir(10, 0)).toThrow("Divisão por zero não é permitida");
    });
    
    test("deve lançar erro se primeiro valor não for número", () => {
      // Act & Assert
      expect(() => calculadora.dividir("a", 2)).toThrow(TypeError);
    });
    
    test("deve lançar erro se segundo valor não for número", () => {
      // Act & Assert
      expect(() => calculadora.dividir(10, "b")).toThrow(TypeError);
    });
  });

  describe("jurosSimples()", () => {
    test("deve calcular juros simples corretamente", () => {
      // Act
      const resultado = calculadora.jurosSimples(1000, 0.05, 2);
      
      // Assert
      expect(resultado).toBe(100);
    });
    
    test("deve calcular juros simples com taxa zero", () => {
      // Act
      const resultado = calculadora.jurosSimples(1000, 0, 5);
      
      // Assert
      expect(resultado).toBe(0);
    });
    
    test("deve calcular juros simples com tempo zero", () => {
      // Act
      const resultado = calculadora.jurosSimples(1000, 0.1, 0);
      
      // Assert
      expect(resultado).toBe(0);
    });
    
    test("deve calcular juros simples com capital zero", () => {
      // Act
      const resultado = calculadora.jurosSimples(0, 0.1, 2);
      
      // Assert
      expect(resultado).toBe(0);
    });
    
    test("deve calcular juros simples com valores decimais", () => {
      // Act
      const resultado = calculadora.jurosSimples(1500.50, 0.03, 1.5);
      
      // Assert
      expect(resultado).toBeCloseTo(67.52, 1);
    });
    
    test("deve lançar erro se capital não for número", () => {
      // Act & Assert
      expect(() => calculadora.jurosSimples("a", 0.05, 2)).toThrow(TypeError);
    });
    
    test("deve lançar erro se taxa não for número", () => {
      // Act & Assert
      expect(() => calculadora.jurosSimples(1000, "b", 2)).toThrow(TypeError);
    });
    
    test("deve lançar erro se tempo não for número", () => {
      // Act & Assert
      expect(() => calculadora.jurosSimples(1000, 0.05, "c")).toThrow(TypeError);
    });
  });

  describe("jurosCompostos()", () => {
    test("deve calcular juros compostos corretamente", () => {
      // Act
      const resultado = calculadora.jurosCompostos(1000, 0.05, 2);
      
      // Assert
      expect(resultado).toBeCloseTo(1102.5);
    });
    
    test("deve calcular juros compostos com taxa zero", () => {
      // Act
      const resultado = calculadora.jurosCompostos(1000, 0, 5);
      
      // Assert
      expect(resultado).toBe(1000);
    });
    
    test("deve calcular juros compostos com tempo zero", () => {
      // Act
      const resultado = calculadora.jurosCompostos(1000, 0.1, 0);
      
      // Assert
      expect(resultado).toBe(1000);
    });
    
    test("deve calcular juros compostos com tempo 1", () => {
      // Act
      const resultado = calculadora.jurosCompostos(1000, 0.1, 1);
      
      // Assert
      expect(resultado).toBeCloseTo(1100);
    });
    
    test("deve calcular juros compostos com valores decimais", () => {
      // Act
      const resultado = calculadora.jurosCompostos(1500, 0.08, 3);
      
      // Assert
      expect(resultado).toBeCloseTo(1889.57, 1);
    });
    
    test("deve lançar erro se capital não for número", () => {
      // Act & Assert
      expect(() => calculadora.jurosCompostos("a", 0.05, 2)).toThrow(TypeError);
    });
    
    test("deve lançar erro se taxa não for número", () => {
      // Act & Assert
      expect(() => calculadora.jurosCompostos(1000, "b", 2)).toThrow(TypeError);
    });
    
    test("deve lançar erro se tempo não for número", () => {
      // Act & Assert
      expect(() => calculadora.jurosCompostos(1000, 0.05, "c")).toThrow(TypeError);
    });
  });

  describe("descontoPercentual()", () => {
    test("deve aplicar desconto percentual corretamente", () => {
      // Act
      const resultado = calculadora.descontoPercentual(200, 0.1);
      
      // Assert
      expect(resultado).toBe(180);
    });
    
    test("deve aplicar desconto percentual de 50%", () => {
      // Act
      const resultado = calculadora.descontoPercentual(100, 0.5);
      
      // Assert
      expect(resultado).toBe(50);
    });
    
    test("deve aplicar desconto percentual de 100%", () => {
      // Act
      const resultado = calculadora.descontoPercentual(200, 1);
      
      // Assert
      expect(resultado).toBe(0);
    });
    
    test("deve aplicar desconto percentual zero", () => {
      // Act
      const resultado = calculadora.descontoPercentual(200, 0);
      
      // Assert
      expect(resultado).toBe(200);
    });
    
    test("deve aplicar desconto percentual com valores decimais", () => {
      // Act
      const resultado = calculadora.descontoPercentual(150.75, 0.15);
      
      // Assert
      expect(resultado).toBeCloseTo(128.14, 2);
    });
    
    test("deve lançar erro se percentual não estiver entre 0 e 1", () => {
      // Act & Assert
      expect(() => calculadora.descontoPercentual(200, 1.5)).toThrow("Percentual deve estar entre 0 e 1");
    });
    
    test("deve lançar erro se percentual for negativo", () => {
      // Act & Assert
      expect(() => calculadora.descontoPercentual(200, -0.1)).toThrow("Percentual deve estar entre 0 e 1");
    });
    
    test("deve lançar erro se valor não for número", () => {
      // Act & Assert
      expect(() => calculadora.descontoPercentual("a", 0.1)).toThrow(TypeError);
    });
    
    test("deve lançar erro se percentual não for número", () => {
      // Act & Assert
      expect(() => calculadora.descontoPercentual(200, "b")).toThrow(TypeError);
    });
  });

  describe("descontoFixo()", () => {
    test("deve aplicar desconto fixo corretamente", () => {
      // Act
      const resultado = calculadora.descontoFixo(200, 50);
      
      // Assert
      expect(resultado).toBe(150);
    });
    
    test("deve aplicar desconto fixo igual ao valor", () => {
      // Act
      const resultado = calculadora.descontoFixo(100, 100);
      
      // Assert
      expect(resultado).toBe(0);
    });
    
    test("deve aplicar desconto fixo zero", () => {
      // Act
      const resultado = calculadora.descontoFixo(200, 0);
      
      // Assert
      expect(resultado).toBe(200);
    });
    
    test("deve aplicar desconto fixo com valores decimais", () => {
      // Act
      const resultado = calculadora.descontoFixo(99.99, 19.99);
      
      // Assert
      expect(resultado).toBeCloseTo(80);
    });
    
    test("deve lançar erro se desconto for maior que o valor", () => {
      // Act & Assert
      expect(() => calculadora.descontoFixo(100, 150)).toThrow("Desconto maior que o valor");
    });
    
    test("deve lançar erro se desconto for negativo", () => {
      // Act & Assert
      expect(() => calculadora.descontoFixo(100, -10)).toThrow("Desconto não pode ser negativo");
    });
    
    test("deve lançar erro se valor não for número", () => {
      // Act & Assert
      expect(() => calculadora.descontoFixo("a", 50)).toThrow(TypeError);
    });
    
    test("deve lançar erro se desconto não for número", () => {
      // Act & Assert
      expect(() => calculadora.descontoFixo(100, "b")).toThrow(TypeError);
    });
  });
});