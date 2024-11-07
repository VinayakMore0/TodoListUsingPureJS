let currentIndex = 3;

function deleteTodo(index) {
    const element = document.getElementById("todo-" + index);
    if(element) {
        element.parentNode.removeChild(element);
    }
    currentIndex--;
}

function addTodo() {
    const inputEl = document.getElementById("inp");
    const todoText = inputEl.value;

    if(todoText === '') {
        alert('Please enter a todo item.')
        return;
    }

    const parentEl = document.getElementById("todos");

    const newTodo = document.createElement("div");
    newTodo.setAttribute("class", 'todo-item');
    newTodo.setAttribute("id", 'todo-' + currentIndex);

    const newHeading = document.createElement("h3");
    newHeading.textContent = currentIndex + ". " + todoText;

    const newButton = document.createElement("button");
    newButton.textContent = "Delete";
    newButton.setAttribute("onclick", 'deleteTodo(' + currentIndex + ')');

    newTodo.appendChild(newHeading);
    newTodo.appendChild(newButton);

    parentEl.appendChild(newTodo);

    currentIndex++;

    inputEl.value = '';
}
