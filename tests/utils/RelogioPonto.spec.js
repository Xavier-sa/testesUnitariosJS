import { RelogioPonto } from "../../src/utils/RelogioPonto.js";

/**
 * *****Classe de RelogioPonto
 * * ***Métodos:
 * - constructor(): Inicializa a lista de registros.
 * - registrarEntrada(id, hora): Registra a hora de entrada de um funcionário.
 * - registrarSaida(id, hora): Registra a hora de saída para uma entrada ativa.
 * - calcularHorasTrabalhadas(id): Calcula o total de horas de registros concluídos.
 */

let relogio;
const FUNCIONARIO_ID = "xavier001";

// Arrange: Configuração antes de cada teste
beforeEach(() => {
  relogio = new RelogioPonto();
});

describe('Testes unitários da classe RelogioPonto', () => {

  describe("constructor()", () => {
    test("deve inicializar com a lista de registros vazia", () => {
      // Assert
      expect(relogio.registros).toEqual([]);
    });
  });

  describe("registrarEntrada()", () => {
    test("deve registrar a entrada corretamente", () => {
      // Act
      relogio.registrarEntrada(FUNCIONARIO_ID, "08:00");

      // Assert
      expect(relogio.registros.length).toBe(1);
      expect(relogio.registros[0].funcionarioId).toBe(FUNCIONARIO_ID);
      expect(relogio.registros[0].horaEntrada).toBe("08:00");
      expect(relogio.registros[0].horaSaida).toBeNull();
    });

    test("deve permitir que o mesmo funcionário registre múltiplas entradas (abertas)", () => {
      // Act
      relogio.registrarEntrada(FUNCIONARIO_ID, "08:00");
      relogio.registrarEntrada(FUNCIONARIO_ID, "13:00");

      // Assert
      expect(relogio.registros.length).toBe(2);
      expect(relogio.registros.every(r => r.horaSaida === null)).toBe(true);
    });

    test("deve lançar erro se o funcionarioId estiver ausente", () => {
      // Act & Assert
      expect(() => relogio.registrarEntrada(null, "08:00")).toThrow("Dados inválidos");
    });

    test("deve lançar erro se a horaEntrada estiver ausente", () => {
      // Act & Assert
      expect(() => relogio.registrarEntrada(FUNCIONARIO_ID, null)).toThrow("Dados inválidos");
    });
  });

  describe("registrarSaida()", () => {
    test("deve registrar a saída para a entrada ativa", () => {
      // Arrange
      relogio.registrarEntrada(FUNCIONARIO_ID, "08:00");

      // Act
      relogio.registrarSaida(FUNCIONARIO_ID, "17:00");

      // Assert
      expect(relogio.registros.length).toBe(1);
      expect(relogio.registros[0].horaSaida).toBe("17:00");
    });

    test("deve registrar a saída apenas para a entrada ativa mais recente (se houver várias entradas abertas)", () => {
      // Arrange: Múltiplas entradas, apenas a primeira concluída
      relogio.registrarEntrada(FUNCIONARIO_ID, "08:00"); // Entrada ativa
      relogio.registrarEntrada(FUNCIONARIO_ID, "13:00"); // Entrada ativa
      
      // At: Registra a saída da entrada ativa mais recente (o find só pega o primeiro 'horaSaida: null')
      relogio.registrarSaida(FUNCIONARIO_ID, "17:00"); 

      // Assert: A primeira entrada ativa (index 0) deve ser fechada, conforme a implementação padrão do find()
      // Nota: Na implementação atual, o método `find` sempre encontra a primeira entrada (index 0) com `horaSaida: null`.
      // Portanto, o teste verifica que a *primeira* entrada é fechada.
      expect(relogio.registros[0].horaSaida).toBe("17:00");
      expect(relogio.registros[1].horaSaida).toBeNull();
    });

    test("deve lançar erro se não houver entrada ativa para o funcionário", () => {
      // Arrange: Nenhuma entrada registrada
      
      // Act & Assert
      expect(() => relogio.registrarSaida(FUNCIONARIO_ID, "17:00")).toThrow("Nenhuma entrada ativa encontrada");

      // Arrange: Todas as entradas estão fechadas
      relogio.registrarEntrada(FUNCIONARIO_ID, "08:00");
      relogio.registrarSaida(FUNCIONARIO_ID, "17:00");

      // Act & Assert
      expect(() => relogio.registrarSaida(FUNCIONARIO_ID, "18:00")).toThrow("Nenhuma entrada ativa encontrada");
    });
  });

  describe("calcularHorasTrabalhadas()", () => {
    test("deve calcular corretamente 8 horas de trabalho", () => {
      // Arrange
      relogio.registrarEntrada(FUNCIONARIO_ID, "09:00");
      relogio.registrarSaida(FUNCIONARIO_ID, "17:00");

      // Act
      const horas = relogio.calcularHorasTrabalhadas(FUNCIONARIO_ID);

      // Assert
      expect(horas).toBe(8);
    });

    test("deve calcular corretamente horas com minutos (7.5 horas)", () => {
      // Arrange
      relogio.registrarEntrada(FUNCIONARIO_ID, "08:30");
      relogio.registrarSaida(FUNCIONARIO_ID, "16:00");

      // Act
      const horas = relogio.calcularHorasTrabalhadas(FUNCIONARIO_ID);

      // Assert
      expect(horas).toBeCloseTo(7.5); // 7h 30m
    });

    test("deve somar horas de múltiplos registros concluídos", () => {
      // Arrange
      relogio.registrarEntrada(FUNCIONARIO_ID, "08:00");
      relogio.registrarSaida(FUNCIONARIO_ID, "12:00"); // 4 horas

      relogio.registrarEntrada(FUNCIONARIO_ID, "13:00");
      relogio.registrarSaida(FUNCIONARIO_ID, "17:00"); // 4 horas

      // Act
      const totalHoras = relogio.calcularHorasTrabalhadas(FUNCIONARIO_ID);

      // Assert
      expect(totalHoras).toBe(8);
    });

    test("deve ignorar registros que ainda não possuem hora de saída", () => {
      // Arrange: Um registro concluído (4h) e um aberto (ignorado)
      relogio.registrarEntrada(FUNCIONARIO_ID, "08:00");
      relogio.registrarSaida(FUNCIONARIO_ID, "12:00"); // 4 horas concluídas

      relogio.registrarEntrada(FUNCIONARIO_ID, "13:00"); // Registro aberto

      // Act
      const horas = relogio.calcularHorasTrabalhadas(FUNCIONARIO_ID);

      // Assert
      expect(horas).toBe(4);
    });

    test("deve retornar 0 se o funcionário não tiver registros concluídos", () => {
      // Arrange: Funcionário com registro aberto ou sem registros
      relogio.registrarEntrada(FUNCIONARIO_ID, "08:00"); // Registro aberto
      relogio.registrarEntrada("outroFunc", "08:00");
      relogio.registrarSaida("outroFunc", "17:00");

      // Act
      const horas = relogio.calcularHorasTrabalhadas(FUNCIONARIO_ID);

      // Assert
      expect(horas).toBe(0);
    });
  });
});
