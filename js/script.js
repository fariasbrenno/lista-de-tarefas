let contador = 0;
let input = document.getElementById('input-tarefa');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('area-lista');

//Funções
function addTarefa(){
    let valorInput = input.value;
    if((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)){
        
        ++contador;

        let novoItem = `<div id="${contador}" class="item">
            <div onclick="marcarTarefa(${contador})" class="item-icone">
                <i id="icone_${contador}" class="mdi mdi-circle-outline"></i>
            </div>
            <div onclick="marcarTarefa(${contador})" class="item-nome">
                ${valorInput}
            </div>
            <div class="item-botao">
                <button class="delete" onclick="deletar(${contador})">Deletar
                    <i class="mdi mdi-delete"></i>
                </button>
            </div>
        </div>`
    //Adiciona novos itens no main
    main.innerHTML += novoItem;

    //Zerar campo de input
    input.value = null;
    input.focus();

    }else{
        alert("Sem texto")
    }
}

function deletar(id){
    var tarefa = document.getElementById(id);
    tarefa.remove();
}

function marcarTarefa(id){
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');

    if(classe == "item"){
        item.classList.add('clicado');

        var icone = document.getElementById('icone_' + id)
        icone.classList.remove('mdi-circle-outline');
        icone.classList.add('mdi-check-circle');

        item.parentNode.appendChild(item);
    }else{
        item.classList.remove('clicado');
        
        var icone = document.getElementById('icone_' + id)
        icone.classList.remove('mdi-check-circle');
        icone.classList.add('mdi-circle-outline');
    }
}

//Eventos
btnAdd.addEventListener('click', addTarefa);

input.addEventListener('keyup', function (event){
    if(event.keyCode === 13){
        event.preventDefault();
        btnAdd.click();
    }
})