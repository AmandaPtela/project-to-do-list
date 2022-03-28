//  ok 1Título = Minha lista de tarefas
// ok 2abaixo do título, um paragrafo com id funcionamento e texto = Clique 2 vezes para marcar como completo
// ok 3input com id texto-tarefa (onde nova tarefa vai ser escrita)
// ok 4lista ordenada dom id lista-tarefas

//  8selecionar apenas 1 item por vez/ mais de um não pode


//  11botao remover finalizados (apenas concluidos são apagados)
//  12botao salvar lista. caso a página seja recarregada a lista permanece
//  13botao pra mudar posição do item pra cima (id mover-cima e mover-baixo) e pra baixo na lista
//  14remover selecionado. remover apenas o selecionado

const botaoCriar = document.querySelector('#criar-tarefa');
const botaoApagarTudo = document.querySelector('#apaga-tudo');
const listaTarefas = document.querySelector('#lista-tarefas');
const input = document.querySelector('#texto-tarefa');


// ok 5botao com id criar-tarefa ; qnd clica adiciona um item na lista e limpa o input
function criarItemLista() {
  let itemNovo = document.createElement('li');
  itemNovo.innerText = input.value;
  listaTarefas.appendChild(itemNovo);
  itemNovo.className="item";
  input.value = '';
} 
botaoCriar.addEventListener('click',criarItemLista) ;

// ok 6ordenar itens por ordem de criação

// ok 7 clicar num item muda bg pra cinza rgb(128 128 128)
function mudarbg() {
  for (i = 0; i < listaTarefas.length; i += 1);{
    let item = listaTarefas.children[i];
    item.style.backgroundColor = 'gray';
  }
}
listaTarefas.addEventListener('click', mudarbg)

// ok 10 botao id apaga-tudo limpa a lista

function apagarTudo() {
  while (listaTarefas.firstChild){
    listaTarefas.removeChild(listaTarefas.firstChild);
  }
}
botaoApagarTudo.addEventListener('click', apagarTudo);

//  9clicar duas vezes marcar como concluído(riscar item) e clicar duas vezes p desfazer a ação

function concluir() { 
  for (i = 0; i < listaTarefas.length; i += 1);{
    let li = document.querySelectorAll('li');
    let itemTexto = li[1];
    itemTexto.style.backgroundColor = 'blue';
  }
}// adicionar text-decoration e arrumar para reconhecer clique no item
listaTarefas.addEventListener('dblclick', concluir);