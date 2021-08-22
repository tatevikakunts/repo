
// function add alement to todo-item
// todo-item -> {text, isDone=false, id=todo-list.length}
// todo-list -> [todo-item, todo-item, todo-item]
// rendering ul from todo-list

const todoList = [
  {
    id: 0,
    text: "First",
    isDone: false,
  },
];
const form = document.querySelector("#todo-form");

const renderUl = () => {
  const ul = document.querySelector("#app");
  ul.innerHTML = "";
  todoList.forEach((todoItem) => {
    const li = document.createElement("li");
    li.id = "todo_" + todoItem.id;
    li.innerText = todoItem.text;
    if (todoItem.isDone) {
      li.classList.add("done");
    }
    ul.appendChild(li);
    li.addEventListener("click", (event) => {
      let id = event.target.id.split("_")[1];
      todoList[id].isDone = !todoList[id].isDone;
      renderUl();
    });
  });
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let todoText = document.querySelector("#todo-text").value;
  todoText = todoText.trim();
  if (!todoText) {
    return;
  }
  const todoItem = {
    text: todoText,
    isDone: false,
    id: todoList.length,
  };
  todoList.push(todoItem);
  document.querySelector("#todo-text").value = "";
  renderUl();
});
renderUl();
