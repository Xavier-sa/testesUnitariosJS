export class Setor {
  constructor(nome, caminhao, motoristas = [], coletores = []) {
    this.nome = nome;
    this.caminhao = caminhao;
    this.motoristas = motoristas;
    this.coletores = coletores;
    this.ativo = false;
  }

  // Método para iniciar o setor
  iniciarSetor() {
    this.#validarCaminhao();
    this.#validarMotoristas();
    this.#validarColetores();

    this.ativo = true;
    console.log(`✅ Setor "${this.nome}" iniciado com sucesso!`);
  }

  // Método para encerrar o setor
  encerrarSetor() {
    if (!this.ativo) {
      throw new Error(`❌ O setor "${this.nome}" ainda não foi iniciado.`);
    }
    this.ativo = false;
    console.log(`🛑 Setor "${this.nome}" encerrado.`);
  }

  // Métodos de validação privada
  #validarCaminhao() {
    if (!this.caminhao) {
      throw new Error("É necessário um caminhão escalado para iniciar o setor.");
    }
  }

  #validarMotoristas() {
    const total = this.motoristas.length;
    if (total < 1) {
      throw new Error("É necessário pelo menos 1 motorista.");
    }
    if (total > 2) {
      throw new Error("Não pode haver mais de 2 motoristas.");
    }
  }

  #validarColetores() {
    const total = this.coletores.length;
    if (total < 2) {
      throw new Error("O caminhão precisa de pelo menos 2 coletores para sair.");
    }
    if (total > 3) {
      throw new Error("Máximo de 3 coletores por setor.");
    }
  }

  // Método auxiliar para exibir status do setor
  status() {
    return {
      nome: this.nome,
      caminhao: this.caminhao,
      motoristas: this.motoristas,
      coletores: this.coletores,
      ativo: this.ativo ? "Em andamento" : "Parado"
    };
  }
}
