const animals = ["ant", "bison", "camel", "duck", "elephant"];
let returned = [];

// console.log(animals.indexOf("ant"));

// const str = "elephant".split("");
// console.log(str.indexOf("e"));
// console.log(str.lastIndexOf("e"));

// console.log(animals.includes("cat"));

// splice (from, count);
// animals.splice (2);
// const returned = animals.splice(2);
// animals.splice(2, 2, "anybody", "anybody2");
// console.log(returned);

//slice(from, to)
// returned = animals.slice(0, 2);
// returned = animals.slice(-2);

// concat (arg1, arg2,...)
// returned = animals.concat(["cat", "dog"], ["mouse", "horse"], "rabbit");

// animals.forEach((element, index, array) => {
//   console.log(element, index, array);
// });

// const ul = document.createElement("ul");

// returned = animals.filter((item) => {
//   return item.length > 4;
// });
// returned.forEach((element, index) => {
//   const li = document.createElement("li");
//   li.id = "animal_" + index;
//   li.innerText = element;
//   ul.appendChild(li);
// });

// animals.forEach((element, index) => {
//   const li = document.createElement("li");
//   li.id = "animal_" + index;
//   li.innerText = element;
//   ul.appendChild(li);
// });

// document.body.appendChild(ul);

// animals.sort();

// const numbers = [5, 32, 8, 6];
// console.log(
//   numbers.sort((a, b) => {
//     console.log(typeof a, typeof b);
//     return a - b;
//   })
// );

// const users = [
//   { name: "Ivan", age: 47, money: 100 },
//   { name: "Nikolay", age: 15, money: 1000 },
//   { name: "Marya", age: 37, money: 25 },
//   { name: "Alevtina", age: 64, money: 50 },
// ];

// users.sort((a, b) => a.age - b.age); //short form

// users.map((element) => element.age++); //age up can be +=10 etc

// let summ = users.reduce((sum, elem) => {
//   return (sum += elem.money);
// }, 0);
// console.log(summ);

// console.table(
//   users.sort((a, b) => {
//     return a.age - b.age;
//   })
// );
// console.table(
//   users.sort((a, b) => {
//     return a.name.localeCompare(b.name);
//   })
// );

// console.log(animals);
// console.log(returned);

// const oneNumbers = [];
// oneNumbers.length = 100;
// oneNumbers.fill("dog")
// oneNumbers.fill("cat", 49, 100);

let str = "а роза упала на лапу азора";

function isPolifil(str) {
  let _str = str.split(" ").join("");
  return _str.split("").reverse().join("") === _str.join("");
}
