const todoList = document.querySelector(".todos ul");
const todoInput = document.querySelector(".form input");
const btn = document.querySelector(".form button");

const todos = ["Hund", "Min familj", "Illustrera", "Roadtrips med husbileen", "Surfa"];

btn.addEventListener("click", addTodos);

renderTodos ();

function renderTodos () {
    todoList.innerHtml= "";

    for (const todo of todos) {
        const li = document.createElement("li");

        const liText = document.createTextNode(todo);
        li.appendChild(liText);

        const icon = document.createElement("i");
        icon.classList.add("fa-solid", "fa-check");
        li.appendChild(icon);
        
        todoList.appendChild(li);
        
        li.addEventListener("click", removeTodo);
    }
}

function addTodos() {
   todos.push(todoInput.value)
   todoInput.value = "";
   renderTodos();
}

function removeTodo(event) {
    const index = todos.indexOf(event.target.innerText);
    todos.splice(index, 1);
    renderTodos();
}