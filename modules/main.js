var root = document.querySelector(":root");
var container = document.querySelector(".container");
var newTodoInput = document.getElementById("new_todo_input");
var todoBtn = document.getElementById("new_todo_input_btn");
var todoform = document.getElementById("create_new_todo");
var todoList = document.getElementById("todoList");


todoform.addEventListener("submit", function (e) {
    e.preventDefault();
    var newtodoInputValue = todoform.elements.new_todo_input;

    addTodo(newtodoInputValue.value);
    window.localStorage.setItem(newtodoInputValue.value, newtodoInputValue.value)

    newtodoInputValue.value = "";
    container.classList.remove("todo_list_empty");
});

function addTodo(newTodo) {
    const newTodoItem = document.createElement("li");
    newTodoItem.setAttribute("class", "todo_item");

    const newModifyBtn = document.createElement("div");
    newModifyBtn.setAttribute("class", "todo_modify_btn");

    const newTodoBio = document.createElement("span");
    newTodoBio.setAttribute("class", "todo_bio");
    newTodoBio.innerText = newTodo; 

    todoList.appendChild(newTodoItem);
    newTodoItem.appendChild(newModifyBtn);
    newTodoItem.appendChild(newTodoBio);

    onTodoDelete(newModifyBtn, newTodo);
}

function onTodoDelete(btns, newTodo) {
    btns.addEventListener("click", function (element) {
        var parents = element.target.parentElement;

        window.localStorage.removeItem(newTodo);

        parents.classList.add("todo-completed"); 
        setTimeout(() => {
            parents.remove();
        }, 400);

        if (todoList.childNodes.length === 1) {
            setTimeout(() => {
                container.classList.add("todo_list_empty");
            }, 200);
        }
    });
}

function sortToDos() {
    var list, i, switching, b, shouldSwitch, dir, switchcount = 0;
    list = document.getElementById("todoList");
    switching = true;
    dir = "asc";
    while (switching) {
      switching = false;
      b = list.getElementsByTagName("LI");
      for (i = 0; i < (b.length - 1); i++) {
        shouldSwitch = false;
        if (dir == "asc") {
          if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        } else if (dir == "desc") {
          if (b[i].innerHTML.toLowerCase() < b[i + 1].innerHTML.toLowerCase()) {
            shouldSwitch= true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        b[i].parentNode.insertBefore(b[i + 1], b[i]);
        switching = true;
        switchcount ++;
      } else {
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }}
}
  
