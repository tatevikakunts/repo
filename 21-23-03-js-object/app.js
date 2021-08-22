const person = {
  fName: "Ivan",
  lName: "Ivanoff",
  age: 25,
  languages: ["ru", "de", "en"],
  isSmoking: false,
  likeCinema: true,
};
person.lName = "Ivanov";
console.table(person);

console.log(person.languages[0]);
console.log(person.fName);

//fName || lName
let prop = "lName";
console.log(person[prop]);

let prop;
let rnd = Math.floor(Math.random() * Math.floor(5));
if (rnd % 2) {
  prop = "fName";
} else {
  prop = "lName";
}
console.log(person[prop]);

const child = {};
// const emptyObj1 = new Object();

child.fName = "Semen";
child.lName = person.lName;
child.age = 1;

console.table(child);

person.children = [];
person.children.push(child);

delete person.isSmoking;

const wife = {
  fName: "Manya",
  lName: "Borisova",
  age: 19,
  children: [child],
};

person.wife = wife;

console.log(person);

person.likeCinema;

for (let key in person) {
  log(`${key} -> ${person[key]}`);
}
