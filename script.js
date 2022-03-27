//1Título = Minha lista de tarefas
//2abaixo do título, um paragrafo com id funcionamento e texto = Clique 2 vezes para marcar como completo
//3input com id texto-tarefa (onde nova tarefa vai ser escrita)
//4lista ordenada dom id lista-tarefas
//5botao com id criar-tarefa ; qnd clica adiciona um item na lista e limpa o input
//6ordenar itens por ordem de criação
//7 clicar num item muda bg pra cinza rgb(128 128 128)
//8selecionar apenas 1 item por vez/ mais de um não pode
//9clicar duas vezes marcar como concluído(riscar item) e clicar duas vezes p desfazer a ação
//10botao id apaga-tudo limpa a lista
//11botao remover finalizados (apenas concluidos são apagados)
//12botao salvar lista. caso a página seja recarregada a lista permanece
//13botao pra mudar posição do item pra cima (id mover-cima e mover-baixo) e pra baixo na lista
//14remover selecionado. remover apenas o selecionado

const botao = document.querySelector("#criar-tarefa");
const listaTarefas = document.querySelector("#lista-tarefas");
const item = ["opa"];
const areaTexto = document.querySelector("#texto-tarefa");
const tarefaNova = areaTexto.value;

function criarItemLista(){
  for(let i=0; i < item.length; i +=1){
    let novoItem =  item[i];
     let itemNovo = document.createElement('li');
      itemNovo.innerText=tarefaNova;
      listaTarefas.appendChild(itemNovo);
  } 
} 
//adicionar a limpeza do input depois de clicar
botao.addEventListener("click",criarItemLista) ;

//
