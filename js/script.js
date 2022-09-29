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
            <div class="item-icone">
                <i class="mdi mdi-circle-outline"></i>
            </div>
            <div class="item-nome">
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
    

}
//Eventos
btnAdd.addEventListener('click', addTarefa);

input.addEventListener('keyup', function (event){
    if(event.keyCode === 13){
        event.preventDefault();
        btnAdd.click();
    }
})