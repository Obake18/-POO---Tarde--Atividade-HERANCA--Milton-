/**
 * Representa um participante genérico.
 * @class
 */
class Participante {
    /**
     * Cria uma instância de Participante.
     * @constructor
     * @param {string} nome - O nome do participante.
     * @param {string} cpf - O CPF do participante.
     * @param {string} dataDeNascimento - A data de nascimento do participante.
     */
    constructor(nome, cpf, dataDeNascimento) {
        this.nome = nome;
        this.cpf = cpf;
        this.dataDeNascimento = dataDeNascimento;
    }
}

/**
 * Representa um aluno.
 * @class
 * @extends Participante
 */
class Aluno extends Participante {
    /**
     * Cria uma instância de Aluno.
     * @constructor
     * @param {string} nome - O nome do aluno.
     * @param {string} cpf - O CPF do aluno.
     * @param {string} dataDeNascimento - A data de nascimento do aluno.
     * @param {string} matricula - A matrícula do aluno.
     */
    constructor(nome, cpf, dataDeNascimento, matricula) {
        // Chama o construtor da classe pai (Participante) com super().
        super(nome, cpf, dataDeNascimento);
        this.matricula = matricula;
    }
}

/**
 * Representa um professor.
 * @class
 * @extends Participante
 */
class Professor extends Participante {
    /**
     * Cria uma instância de Professor.
     * @constructor
     * @param {string} nome - O nome do professor.
     * @param {string} cpf - O CPF do professor.
     * @param {string} dataDeNascimento - A data de nascimento do professor.
     * @param {string} siape - O número SIAPE do professor.
     * @param {string} formacao - A formação acadêmica do professor.
     */
    constructor(nome, cpf, dataDeNascimento, siape, formacao) {
        // Chama o construtor da classe pai (Participante) com super().
        super(nome, cpf, dataDeNascimento);
        this.siape = siape;
        this.formacao = formacao;
    }
}

/**
 * Representa uma turma.
 * @class
 */
class Turma {
    /**
     * Cria uma instância de Turma.
     * @constructor
     * @param {Array} listaDeParticipantes - Uma lista de participantes da turma (alunos e professores).
     */
    constructor(listaDeParticipantes) {
        // Inicialize a lista de participantes com um array vazio ou com a lista fornecida.
        this.listaDeParticipantes = listaDeParticipantes || [];
    }

    /**
     * Adiciona um participante (aluno ou professor) à lista de participantes da turma.
     * @param {object} participante - O participante a ser adicionado.
     */
    adicionarParticipante(participante) {
        this.listaDeParticipantes.push(participante);
    }
}
