const users = [
  { name: "Ivan Ivanov", id: 0 },
  { name: "Petr Petrov", id: 1 },
  { name: "Nikolay Nikolayev", id: 2 },
  { name: "Sidor Sidorov", id: 3 },
];
const messages = [];
const select = document.querySelector("#user");
users.forEach((elem) => {
  const option = document.createElement("option");
  option.value = elem.id;
  option.innerText = elem.name;
  select.appendChild(option);
});
select.value = null;

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const message = {
    id: messages.length,
    userId: select.value,
    text: document.querySelector("#message").value,
  };
  messages.push(message);
  document.querySelector("#message").value = "";
  select.value = null;
  renderMessages();
});

const renderMessages = () => {
  const div = document.querySelector("#messages");
  const ul = document.createElement("ul");
  messages.forEach((elem) => {
    const li = document.createElement("li");
    const h3 = document.createElement("h3");
    h3.innerText = getUserName(elem.userId);
    const p = document.createElement("p");
    p.innerText = elem.text;
    li.appendChild(h3);
    li.appendChild(p);
    li.id = "message_" + elem.id;
    li.addEventListener("click", (event) => {
      event.preventDefault();
      renderOneMessage(event.target.id);
    });
    ul.appendChild(li);
  });
  div.innerHTML = "";
  div.appendChild(ul);
};

const getUserName = (id) => {
  const user = users.filter((user) => {
    return user.id === id;
  });

  return user ? user[0].name : "User not found";
};
const renderOneMessage = (elementId) => {
  let id = +elementId.split("_")[1];
  const message = messages.filter((elem) => elem.id === id);
  if (!message.length) {
    return;
  }

  const messageWrapper = document.querySelector("#oneMessage");
  const h2 = document.createElement("h2");
  h2.innerText = getUserName(message[0].userId);
  const p = document.createElement("p");
  p.innerText = message[0].text;
  messageWrapper.innerHTML = "";
  messageWrapper.appendChild(h2);
  messageWrapper.appendChild(p);
};
