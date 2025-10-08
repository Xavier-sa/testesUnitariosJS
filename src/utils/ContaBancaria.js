export class ContaBancaria {
    constructor(titular, saldoInicial = 0) {
        if (!titular) {
            throw new Error("Titular é obrigatório");
        }
        this.titular = titular;
        this.saldo = saldoInicial;
    }

    depositar(valor) {
        if (valor <= 0) {
            throw new Error("Valor inválido");
        }
        this.saldo += valor;
    }

    sacar(valor) {
        if (valor <= 0) {
            throw new Error("Valor inválido");
        }
        if (valor > this.saldo) {
            throw new Error("Saldo insuficiente");
        }
        this.saldo -= valor;
    }

    consultarSaldo() {
        return this.saldo;
    }
}
