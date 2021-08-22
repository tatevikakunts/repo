const renderLi = (name) => {
  document.querySelector("ul").innerHTML += `<li>${name}</li>`;
};

const renderList = (array) => {
  array.forEach((name) => {
    renderLi(name);
  });
};

(function main() {
  let nameList = [];
  if (localStorage.names) {
    nameList = JSON.parse(localStorage.getItem("names"));
    // const nameList = localStorage.getItem("names").split(",");
    renderList(nameList);
  }

  document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.querySelector("input");
    nameList.push(name.value);
    localStorage.setItem("names", JSON.stringify(nameList));
    renderLi(name.value);
    name.value = "";
  });
  document.querySelector("#erase").addEventListener("click", (event) => {
    event.preventDefault();
    nameList = [];
    localStorage.removeItem("names");
    document.querySelector("ul").innerHTML = "";
  });
})();

const person = {
  name: "Ivan",
};
const persons = [person, person, person];
console.log(persons);

let jsonText = JSON.stringify(person);
console.log(JSON.stringify(person));
let jsonObject = JSON.parse(jsonText);
console.log(jsonObject);
let jTextArray = JSON.stringify(persons);
