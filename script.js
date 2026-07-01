/**
 * 1. Lista de Objetos
 * Representa o estado inicial das tarefas.
 */
let tasks = [
    { id: 1, text: "Estudar métodos de array em JS", completed: false },
    { id: 2, text: "Praticar manipulação de DOM", completed: true },
    { id: 3, text: "Escrever reflexão sobre IA", completed: false }
];

/**
 * 2. Funções para dividir problemas
 */

// Função para criar um novo objeto de tarefa
function createTaskObject(text) {
    return {
        id: Date.now(),
        text: text,
        completed: false
    };
}

// Função para adicionar tarefa à lista (Lógica de dados)
function addTask(text) {
    if (text.trim() === "") return;
    const newTask = createTaskObject(text);
    tasks.push(newTask);
    renderTasks();
}

// Função para remover tarefa (Lógica de dados)
function removeTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
}

/**
 * 3. Métodos de JavaScript para manipular o DOM
 */

function renderTasks() {
    const taskListElement = document.getElementById('taskList');
    taskListElement.innerHTML = ''; // Limpa a lista antes de renderizar

    tasks.forEach(task => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${task.text}</span>
            <button onclick="removeTask(${task.id})" style="background-color: #e74c3c;">Excluir</button>
        `;
        taskListElement.appendChild(li);
    });
}

function renderReflection() {
    const reflectionElement = document.getElementById('reflectionContent');
    const reflectionText = `
        A Inteligência Artificial transformou-se de uma ferramenta de nicho em um copiloto essencial nas tarefas diárias. 
        Ao automatizar processos repetitivos, como a geração de código boilerplate ou a organização de dados, 
        a IA permite que os desenvolvedores se concentrem na arquitetura e na resolução de problemas complexos. 
        No entanto, a reflexão crítica é necessária: a IA deve ser vista como um amplificador da inteligência humana, 
        não um substituto para a compreensão profunda e a criatividade.
    `;
    reflectionElement.textContent = reflectionText;
}

// Event Listeners
document.getElementById('addTaskBtn').addEventListener('click', () => {
    const input = document.getElementById('taskInput');
    addTask(input.value);
    input.value = '';
});

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    renderTasks();
    renderReflection();
});
