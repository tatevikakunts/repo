//address-book -> []
// item -> {firstName, lastName}, phone, email}
// form (add item in address-book)

const addressBook = [];

const main = () => {
  document
    .querySelector("#address-form")
    .addEventListener("submit", createCard);
};
const createCard = (event) => {
  event.preventDefault();
  const firstName = document.querySelector("#first-name");
  const lastName = document.querySelector("#last-name");
  const phone = document.querySelector("#phone");
  const email = document.querySelector("#email");
  const addressItem = {
    id: addressBook.length,
    firstName: firstName.value,
    lastName: lastName.value,
    phone: phone.value,
    email: email.value,
  };
  addressBook.push(addressItem);
  firstName.value = "";
  lastName.value = "";
  phone.value = "";
  email.value = "";
  renderUl();
};

const renderUl = () => {
  const ul = document.createElement("ul");
  addressBook.forEach((element) => {
    const li = document.createElement("li");
    li.id = `card_${element.id}`;
    const h3 = document.createElement("h3");
    h3.innerText = `${element.firstName} ${element.lastName}`;
    li.appendChild(h3);
    const phone = document.createElement("p");
    phone.innerText = element.phone;
    const email = document.createElement("p");
    email.innerText = element.email;
    li.appendChild(phone);
    li.appendChild(email);
    ul.appendChild(li);
  });
  const div = document.querySelector("#address-list");
  div.innerHTML = "";
  div.appendChild(ul);
};

main();
