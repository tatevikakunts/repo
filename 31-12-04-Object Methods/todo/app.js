function ToDo(title) {
  this.title = title;
  this.list = [];
  this.addNew = function (todoItem) {
    if (!todoItem.trim().length) {
      return;
    }
    this.list.push({
      id: this.list.length,
      text: todoItem.trim(),
      isDone: false,
    });
  };
  this.doneItem = function (id) {
    const idx = this.list.findIndex((item) => item.id === id);
    if (idx === -1) {
      return;
    }
    this.list[idx].isDone = !this.list[idx].isDone;
  };
}
const todo = new ToDo("List of our todos");
document.querySelector("h3").innerText = todo.title;

function main() {
  document.querySelector("form").addEventListener("submit", function () {
    const todoInput = document.querySelector("input");
    todo.addNew(todoInput.value);
    todoInput.value = "";
    generateUl();
  });
}
function generateUl() {
  document.querySelector("#todo").innerHTML = "";
  todo.list.forEach((item) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    const span = document.createElement("span");
    span.innerText = item.text + " ";
    btn.innerText = "Done";
    if (item.isDone) {
      li.classList.add("done");
    }
    btn.id = "btn_" + item.id;
    btn.addEventListener("click", isDoneHandler);
    li.appendChild(span);
    li.appendChild(btn);
    document.querySelector("#todo").appendChild(li);
  });
}
function isDoneHandler(event) {
  event.preventDefault();
  const id = +event.target.id.split("_")[1];
  todo.doneItem(id);
  generateUl;
}

main();
