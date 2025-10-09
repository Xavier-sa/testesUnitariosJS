import { CarrinhoDeCompras } from "../../src/utils/CarrinhoCompras.js";

/**
 * *****Classe de CarrinhoDeCompras
 * * ***Métodos:
 * - constructor(): Inicializa o carrinho.
 * - adicionarItem(nome, preco, quantidade): Adiciona um item ao carrinho.
 * - removerItem(nome): Remove um item pelo nome.
 * - calcularTotal(): Calcula o valor total dos itens.
 * - limparCarrinho(): Esvazia o carrinho.
 */

let carrinho;

// Arrange: Configuração antes de cada teste
beforeEach(() => {
  carrinho = new CarrinhoDeCompras();
});

describe('Testes unitários da classe CarrinhoDeCompras', () => {

  describe("constructor()", () => {
    test("deve inicializar o carrinho com a lista de itens vazia", () => {
      // Assert
      expect(carrinho.itens).toEqual([]);
      expect(carrinho.itens.length).toBe(0);
    });
  });

  describe("adicionarItem()", () => {
    test("deve adicionar um item com quantidade padrão de 1", () => {
      // Act
      carrinho.adicionarItem("Pão", 5.0);

      // Assert
      expect(carrinho.itens.length).toBe(1);
      expect(carrinho.itens[0]).toEqual({ nome: "Pão", preco: 5.0, quantidade: 1 });
    });

    test("deve adicionar um item com quantidade especificada", () => {
      // Act
      carrinho.adicionarItem("Leite", 4.50, 2);

      // Assert
      expect(carrinho.itens.length).toBe(1);
      expect(carrinho.itens[0]).toEqual({ nome: "Leite", preco: 4.50, quantidade: 2 });
    });

    test("deve lançar erro se o nome do item for inválido (null ou vazio)", () => {
      // Act & Assert
      expect(() => carrinho.adicionarItem(null, 10.0)).toThrow("Dados do item inválidos");
      expect(() => carrinho.adicionarItem("", 10.0)).toThrow("Dados do item inválidos");
    });

    test("deve lançar erro se o preço for zero ou negativo", () => {
      // Act & Assert
      expect(() => carrinho.adicionarItem("Café", 0, 1)).toThrow("Dados do item inválidos");
      expect(() => carrinho.adicionarItem("Café", -5.0, 1)).toThrow("Dados do item inválidos");
    });

    test("deve lançar erro se a quantidade for zero ou negativa", () => {
      // Act & Assert
      expect(() => carrinho.adicionarItem("Água", 2.0, 0)).toThrow("Dados do item inválidos");
      expect(() => carrinho.adicionarItem("Água", 2.0, -2)).toThrow("Dados do item inválidos");
    });
  });

  describe("removerItem()", () => {
    test("deve remover um item existente do carrinho", () => {
      // Arrange
      carrinho.adicionarItem("Arroz", 20.0, 1);
      carrinho.adicionarItem("Feijão", 10.0, 2);

      // Act
      carrinho.removerItem("Arroz");

      // Assert
      expect(carrinho.itens.length).toBe(1);
      expect(carrinho.itens[0].nome).toBe("Feijão");
    });

    test("deve lançar erro se o item a ser removido não for encontrado", () => {
      // Arrange
      carrinho.adicionarItem("Macarrão", 5.0);

      // Act & Assert
      expect(() => carrinho.removerItem("Molho")).toThrow("Item não encontrado");
    });
  });

  describe("calcularTotal()", () => {
    test("deve retornar 0 se o carrinho estiver vazio", () => {
      // Act
      const total = carrinho.calcularTotal();

      // Assert
      expect(total).toBe(0);
    });

    test("deve calcular o total corretamente para um único item", () => {
      // Arrange
      carrinho.adicionarItem("Cerveja", 4.0, 6); // R$ 24.0

      // Act
      const total = carrinho.calcularTotal();

      // Assert
      expect(total).toBe(24.0);
    });

    test("deve calcular o total corretamente para múltiplos itens", () => {
      // Arrange
      carrinho.adicionarItem("Carne", 50.0, 1); // R$ 50.0
      carrinho.adicionarItem("Refrigerante", 8.50, 2); // R$ 17.0
      // Total: 50.0 + 17.0 = 67.0

      // Act
      const total = carrinho.calcularTotal();

      // Assert
      expect(total).toBeCloseTo(67.0);
    });
  });

  describe("limparCarrinho()", () => {
    test("deve remover todos os itens do carrinho", () => {
      // Arrange
      carrinho.adicionarItem("Cenoura", 3.0);
      carrinho.adicionarItem("Alface", 2.50);

      // Act
      carrinho.limparCarrinho();

      // Assert
      expect(carrinho.itens.length).toBe(0);
      expect(carrinho.calcularTotal()).toBe(0);
    });
  });


  test("deve permitir adicionar itens com o mesmo nome (duplicatas)", () => {
    carrinho.adicionarItem("Pão", 5.0, 1);
    carrinho.adicionarItem("Pão", 5.0, 2);
    expect(carrinho.itens.length).toBe(2);
  });

});