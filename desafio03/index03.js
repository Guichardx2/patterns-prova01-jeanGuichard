//Controller GRASP

class Task {
    constructor(nome, feita = false) {
        this.nome = nome;
        this.feita = feita;
    }
}

class TaskManager {
    constructor() {
        this.tasks = [];
    }

    adicionar(nome) {
        const tarefa = new Task(nome);
        this.tasks.push(tarefa);
        console.log(`Tarefa "${nome}" adicionada.`);
    }

    marcarFeita(nome) {
        const tarefa = this.tasks.find(t => t.nome === nome);
        if (tarefa) tarefa.feita = true;
        console.log(`Tarefa "${nome}" marcada como feita.`);
    }
}

const manager = new TaskManager();
manager.adicionar("Estudar Padrões GRASP G");
manager.adicionar("Estudar Padrões GRASP R");
manager.adicionar("Estudar Padrões GRASP A");
manager.adicionar("Estudar Padrões GRASP S");
manager.adicionar("Estudar Padrões GRASP P");
manager.marcarFeita("Estudar Padrões GRASP A");
manager.marcarFeita("Estudar Padrões GRASP S");
manager.marcarFeita("Estudar Padrões GRASP P");
console.log(manager.tasks);