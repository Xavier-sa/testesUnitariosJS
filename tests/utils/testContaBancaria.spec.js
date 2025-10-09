import { ContaBancaria } from "../../src/utils/ContaBancaria.js";

/**
 * *****Classe de ContaBancaria
 * * ***Métodos:
 * - constructor(titular, saldoInicial): Inicializa a conta, exige titular.
 * - depositar(valor): Adiciona valor ao saldo, exige valor positivo.
 * - sacar(valor): Retira valor do saldo, exige valor positivo e saldo suficiente.
 * - consultarSaldo(): Retorna o saldo atual.
 */

let conta;

// Arrange: Configuração antes de cada teste
beforeEach(() => {
  // Inicializa uma conta padrão para a maioria dos testes de depósito/saque
  conta = new ContaBancaria("João da Silva", 100);
});

describe('Testes unitários da classe ContaBancaria', () => {

  describe("constructor()", () => {
    test("deve inicializar a conta com saldo zero se nenhum for fornecido", () => {
      // Act
      const novaConta = new ContaBancaria("Maria");

      // Assert
      expect(novaConta.titular).toBe("Maria");
      expect(novaConta.saldo).toBe(0);
    });

    test("deve inicializar a conta com o saldo inicial fornecido", () => {
      // Act
      const novaConta = new ContaBancaria("Pedro", 500);

      // Assert
      expect(novaConta.saldo).toBe(500);
    });

    test("deve lançar erro se o titular for nulo ou vazio", () => {
      // Act & Assert
      expect(() => new ContaBancaria(null)).toThrow("Titular é obrigatório");
      expect(() => new ContaBancaria("")).toThrow("Titular é obrigatório");
    });
  });

  describe("depositar()", () => {
    test("deve aumentar o saldo corretamente após o depósito", () => {
      // Arrange (Saldo inicial é 100)
      
      // Act
      conta.depositar(50);
      
      // Assert
      expect(conta.saldo).toBe(150);
    });

    test("deve lançar erro se o valor do depósito for zero", () => {
      // Act & Assert
      expect(() => conta.depositar(0)).toThrow("Valor inválido");
      // Assert: Saldo deve permanecer inalterado
      expect(conta.saldo).toBe(100);
    });

    test("deve lançar erro se o valor do depósito for negativo", () => {
      // Act & Assert
      expect(() => conta.depositar(-10)).toThrow("Valor inválido");
      // Assert: Saldo deve permanecer inalterado
      expect(conta.saldo).toBe(100);
    });
  });

  describe("sacar()", () => {
    test("deve diminuir o saldo corretamente após o saque", () => {
      // Arrange (Saldo inicial é 100)
      
      // Act
      conta.sacar(30);
      
      // Assert
      expect(conta.saldo).toBe(70);
    });

    test("deve permitir sacar o valor exato do saldo", () => {
      // Arrange (Saldo inicial é 100)

      // Act
      conta.sacar(100);

      // Assert
      expect(conta.saldo).toBe(0);
    });

    test("deve lançar erro se o valor do saque for zero", () => {
      // Act & Assert
      expect(() => conta.sacar(0)).toThrow("Valor inválido");
      // Assert: Saldo deve permanecer inalterado
      expect(conta.saldo).toBe(100);
    });

    test("deve lançar erro se o valor do saque for negativo", () => {
      // Act & Assert
      expect(() => conta.sacar(-10)).toThrow("Valor inválido");
      // Assert: Saldo deve permanecer inalterado
      expect(conta.saldo).toBe(100);
    });

    test("deve lançar erro se o valor do saque for maior que o saldo (saldo insuficiente)", () => {
      // Act & Assert
      expect(() => conta.sacar(150)).toThrow("Saldo insuficiente");
      // Assert: Saldo deve permanecer inalterado
      expect(conta.saldo).toBe(100);
    });
  });

  describe("consultarSaldo()", () => {
    test("deve retornar o saldo atual após a inicialização", () => {
      // Arrange: conta com saldo inicial de 100
      
      // Act
      const saldo = conta.consultarSaldo();
      
      // Assert
      expect(saldo).toBe(100);
    });

    test("deve retornar o saldo atual após operações de depósito e saque", () => {
      // Arrange: Saldo inicial é 100
      conta.depositar(200); // Saldo: 300
      conta.sacar(50);      // Saldo: 250
      
      // Act
      const saldo = conta.consultarSaldo();
      
      // Assert
      expect(saldo).toBe(250);
    });
  });
});