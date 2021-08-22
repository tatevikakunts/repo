class Persons {
  constructor() {
    this.persons = [];
    this.sect = document.querySelector("section");
  }
  addPersons(person) {
    this.persons.push(person);
    this.renderPerson(person);
  }
  renderPerson(person) {
    let output = this.getRenderString(person);
    this.sect.innerHTML += output;
    this.addDeleteListener();
  }
  addDeleteListener() {
    const paragraphs = document.querySelectorAll("section p");
    paragraphs.forEach((p) => {
      p.addEventListener("click", (event) => {
        event.preventDefault();
        let [, id] = event.target.id.split("_");
        const idx = this.persons.findIndex(
          (person) => person.id.toString() === id
        );
        if (idx === -1) {
          return;
        }
        this.persons.splice(idx, 1);
        this.renderPersonsList();
      });
    });
  }

  renderPersonsList() {
    let output = "";
    this.persons.forEach((person) => {
      output += this.getRenderString(person);
    });
    this.sect.innerHTML = output;
    this.addDeleteListener();
  }
  getRenderString(person) {
    return `<p id = "person_${person.id}>${person.lastName}, ${person.firstName}- ${person.age}</p>`;
  }
}

class Person {
  constructor(fullName, age) {
    this.id = Date.now();
    this.age = age;
    [this.firstName, this.lastName] = fullName.split(" ");
  }
}
let persons = new Persons();

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const newPerson = new Person(
    document.querySelector("#fullName").value,
    document.querySelector("#age").value
  );
  document.querySelector("#fullName").value = "";
  document.querySelector("#age").value = "";
  persons.addPersons(newPerson);
});
