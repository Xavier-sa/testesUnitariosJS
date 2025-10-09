export class RelogioPonto {
    constructor() {
        this.registros = [];
    }

    registrarEntrada(funcionarioId, horaEntrada) {
        if (!funcionarioId || !horaEntrada) {
            throw new Error("Dados inválidos");
        }
        this.registros.push({ funcionarioId, horaEntrada, horaSaida: null });
    }

    registrarSaida(funcionarioId, horaSaida) {
        const registro = this.registros.find(r => r.funcionarioId === funcionarioId && r.horaSaida === null);
        if (!registro) {
            throw new Error("Nenhuma entrada ativa encontrada");
        }
        registro.horaSaida = horaSaida;
    }

    calcularHorasTrabalhadas(funcionarioId) {
        const registros = this.registros.filter(r => r.funcionarioId === funcionarioId && r.horaSaida);
        return registros.reduce((total, r) => {
            const inicio = new Date(`2025-01-01T${r.horaEntrada}:00`);
            const fim = new Date(`2025-01-01T${r.horaSaida}:00`);
            const horas = (fim - inicio) / 1000 / 60 / 60;
            return total + horas;
        }, 0);
    }
}
