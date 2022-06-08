// define your variables
var todoDiv = document.getElementById("todo");
var newButton = document.getElementById("newButton");
var count = 0;

// define onclick event listener
newButton.onclick = newItem;

// newItem function -- creates a new todo
function newItem() {
  var newTodo = document.createElement("input");
  newTodo.className = "todo";
  newTodo.draggable = true;
  newTodo.id = count;
  newTodo.ondragstart = drag;
  count = count + 1;
  todoDiv.appendChild(newTodo);
}

// allowDrop function -- allows something to be dropped
function allowDrop(event) {
  event.preventDefault();
}

// drag function -- stores the id of an element
function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
  console.log(event.target.id);
}

// drop function -- gets an element to drop into place
function drop(event, element) {
  var todoId = event.dataTransfer.getData("text");
  var todo = document.getElementById(todoId);
  element.appendChild(todo);
}