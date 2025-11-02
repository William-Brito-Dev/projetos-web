const inputTarefa = document.getElementById('novaTarefa');
const botaoAdicionar = document.getElementById('botaoAdicionar');
const listaDeTarefas = document.getElementById('listaDeTarefas');

botaoAdicionar.addEventListener('click', adicionarTarefa);

// Adiciona a funcionalidade de adicionar tarefa ao apertar Enter
inputTarefa.addEventListener('keypress', (evento) => {
    if (evento.key === 'Enter') {
        adicionarTarefa();
    }
});

function adicionarTarefa() {
    const textoTarefa = inputTarefa.value.trim(); // .trim() remove espaços extras

    if (textoTarefa === '') {
        alert('Por favor, digite uma tarefa!'); // Um alerta simples de iniciante
        return;
    }

    const itemLista = document.createElement('li');
    itemLista.innerHTML = `
        <span>${textoTarefa}</span>
        <div class="botoes-acao">
            <button class="botao-completar">✔️</button>
            <button class="botao-remover">🗑️</button>
        </div>
    `;

    listaDeTarefas.appendChild(itemLista);
    inputTarefa.value = ''; // Limpa o input

    // Adiciona ouvintes de evento para os novos botões
    const botaoCompletar = itemLista.querySelector('.botao-completar');
    const botaoRemover = itemLista.querySelector('.botao-remover');

    botaoCompletar.addEventListener('click', () => {
        itemLista.classList.toggle('completa'); // Alterna a classe 'completa'
    });

    botaoRemover.addEventListener('click', () => {
        listaDeTarefas.removeChild(itemLista); // Remove o item da lista
    });

    // Uma "falha" comum de iniciante: não salvar as tarefas no Local Storage.
    // Assim, ao recarregar a página, as tarefas somem.
}