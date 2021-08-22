const getUsers = (id) => {
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((response) => response.json())
    .then((json) => {
      renderUsers(json);
      getTodo(id);
    });
};
const renderUsers = (user) => {
  document.querySelector("#userInfo").innerHTML = `<h3>${user.name}</h3>
<p>${user.email}</p>
<p>${user.phone}</p>`;
};

const getTodo = (userId) => {
  fetch(`https://jsonplaceholder.typicode.com/todos/?userId=${id}`)
    .then((response) => response.json())
    .then((json) => {
      renderTodoList(json);
    });
};

const renderTodoList = (list) => {
  list.forEach((element) => {
    document.querySelector("#userTodos").innerHTML += `<p>${element.title}</p>`;
  });
};
getUsers(2);
