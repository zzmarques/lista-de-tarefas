let contador = 0
const input = document.getElementById('tarefa');
const btnAdd  = document.getElementById('btn-add');
const main = document.getElementById('lista');

function addTarefa() {
    
    const valorInput = input.value;

    if ((valorInput !== '') && (valorInput !== null) && (valorInput !== undefined)) {

        ++contador;
        
        const novoItem = `<div id="${contador}" class="item">
            <div onclick="marcarTarefa(${contador})" class="item-icone">
                <i id="icone_${contador}" class="material-symbols-outlined">
                    circle
                </i>
            </div>
            <div marcarTarefa(${contador}) class="item-nome">
                ${valorInput}
            </div>
            <div class="item-btn">
                <button onclick="deletar(${contador})" class="delete">
                    <i class="material-symbols-outlined dele">delete</i>
                    Deletar
                </button>
            </div>
        </div>`;

        main.innerHTML += novoItem;

        input.value = '';
        input.focus();

    }
}

function deletar(id) {
    const tarefa = document.getElementById(id);
    tarefa.remove()
}

function marcarTarefa(id) {
    const item = document.getElementById(id);
    const classe = item.getAttribute('class');

    if (classe == 'item') {
        item.classList.add('clicado');

        const icone = document.getElementById('icone_'+id);

        icone.remove('mdi-circle-outline');
        icone.add('mdi-check-circle');

        item.parentNode.appendChild(item);
    }else {
        item.classList.remove('clicado');

        const icone = document.getElementById('icone_'+id);

        icone.remove('mdi-check-circle');
        icone.add('mdi-circle-outline');
    }
}

input.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
        event.preventDefault();
        btnAdd.click();
    }
});
