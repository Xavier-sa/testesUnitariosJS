export class CarrinhoDeCompras {
    constructor() {
        this.itens = [];
    }

    adicionarItem(nome, preco, quantidade = 1) {
        if (!nome || preco <= 0 || quantidade <= 0) {
            throw new Error("Dados do item inválidos");
        }
        this.itens.push({ nome, preco, quantidade });
    }

    removerItem(nome) {
        const index = this.itens.findIndex(i => i.nome === nome);
        if (index === -1) {
            throw new Error("Item não encontrado");
        }
        this.itens.splice(index, 1);
    }

    calcularTotal() {
        return this.itens.reduce((total, item) => total + item.preco * item.quantidade, 0);
    }

    limparCarrinho() {
        this.itens = [];
    }
}
