/**
 * Cria instâncias de alunos e professores e os adiciona a uma turma.
 */

// Função para criar instâncias de alunos, professores e adicioná-los à turma
function adicionarParticipantes() {
    // Cria instâncias de alunos
    let aluno1 = new Aluno('Marya', '111.111.111.11', '24-05-2004', '02-23-01');
    let aluno2 = new Aluno('Marley', '222.222.222.22', '23-08-2003', '02-23-02');
    let aluno3 = new Aluno('M. Paula', '333.333.333.33', '21-05-2004', '02-23-03');
    let aluno4 = new Aluno('Victor', '444.444.444.44', '27-01-1996', '02-23-04');
    let aluno5 = new Aluno('Victchinho', '555.555.555.55', '28-08-2000', '02-23-05');
    let aluno6 = new Aluno('Jeniffer', '666.666.666.66', '25-05-1996', '02-23-06');

    // Cria instâncias de professores
    let professor = new Professor('Aleksandar', '777.777.777.77', '15-03-1986', '42-42-564', 'Doutorado');
    let professor2 = new Professor('Glauber', '888.888.888.88', '19-07-1976', '42-42-564', 'Doutorado');

    // Cria uma instância de uma turma
    let modulo2 = new Turma();

    // Adiciona participantes (alunos e professores) à turma
    modulo2.adicionarParticipante(aluno1);
    modulo2.adicionarParticipante(aluno2);
    modulo2.adicionarParticipante(aluno3);
    modulo2.adicionarParticipante(aluno4);
    modulo2.adicionarParticipante(aluno5);
    modulo2.adicionarParticipante(aluno6);
    modulo2.adicionarParticipante(professor);
    modulo2.adicionarParticipante(professor2);

    // Exibe a turma no console
    console.log(modulo2);
}

// Associa a função ao botão
document.getElementById('adicionarAlunoButton').addEventListener('click', adicionarParticipantes);
