var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderToDos(){
  listElement.innerHTML = '';

  for(todo of todos){
    var todoElement = document.createElement('li');
    var todoText = document.createTextNode(todo);

    var linkElement = document.createElement('a');
    var linkText = document.createTextNode('Excluir');

    linkElement.appendChild(linkText);
    linkElement.setAttribute('href','#');

    var pos = todos.indexOf(todo);
    linkElement.setAttribute('onclick','deleteToDo('+ pos +');');

    todoElement.appendChild(todoText);
    todoElement.appendChild(linkElement);

    listElement.appendChild(todoElement);

    saveToStorage();
  }
}

renderToDos();

function addToDo(){
  var todoText = inputElement.value;

  todos.push(todoText);
  inputElement.value='';
  renderToDos();
}

buttonElement.onclick = addToDo;

function deleteToDo(pos){
  todos.splice(pos, 1);
  renderToDos();
}

function saveToStorage(){
  localStorage.setItem('list_todos', JSON.stringify(todos));
}
