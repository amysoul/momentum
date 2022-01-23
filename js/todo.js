const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event){
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter(toDo => toDo.id != parseInt(li.id));
  saveToDos();
  
}

function paintTodo(newTodo){
  todoList.classList.remove("hidden");

  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  const button = document.createElement("button");
  li.appendChild(span);
  li.appendChild(button);
  span.innerText = newTodo.text;
  button.innerText = "X";
  button.addEventListener("click", deleteTodo);
  
  todoList.appendChild(li);
}

function handleTodoSubmit(event){
  event.preventDefault();

  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    id: Date.now(),
    text: newTodo,
  };
  toDos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveToDos();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintTodo);
}