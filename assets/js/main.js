const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');


function addTarefasSalvas(){
  const tarefas = localStorage.getItem('tarefas');
  const listaDeTarefas = JSON.parse(tarefas); 
  // JSON.parse converte o elemento JSON novamente para um objeto javascript

  for(let tarefa of listaDeTarefas){
    criaTarefa(tarefa);
  }

}
function salvarTarefa(){
  const liTarefas = tarefas.querySelectorAll('li');
  const listaDeTarefas = [];

  for(let tarefa of liTarefas){
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
    listaDeTarefas.push(tarefaTexto);
  }

  const tarefasJSON = JSON.stringify(listaDeTarefas); 
  // JSON.stringify converte um elemento javascript para uma string no formato JSON 
  localStorage.setItem('tarefas', tarefasJSON);

}

function criaBotaoApagar(li){s
  li.innerText += ' ';
  const botaoApagar = document.createElement('button');
  botaoApagar.innerText = 'Apagar';
  botaoApagar.setAttribute('class' ,'apagar');
  botaoApagar.setAttribute('title' ,'apagar esta tarefa');
  //botaoApagar.classList.add('apagar');
  li.appendChild(botaoApagar);
}

function criaLi(){
  const li = document.createElement('li');
  return li;
}

inputTarefa.addEventListener('keypress', function (e) {
  if(e.keyCode === 13){
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
    inputTarefa.value = '';
  }
});

function criaTarefa(textoInput){
  const li = criaLi();
  li.innerHTML = textoInput;
  tarefas.appendChild(li);
  criaBotaoApagar(li);
  salvarTarefa();
}


btnTarefa.addEventListener('click', function() {
  if (!inputTarefa.value) return;
  criaTarefa(inputTarefa.value);
});

document.addEventListener('click', function(e){
  const el = e.target;
    if (el.classList.contains('apagar')){
      el.parentElement.remove();
      salvarTarefa();
    }
});

addTarefasSalvas();

//kk
