// movies = {
//   title: "List of my movies",
//   list: [],
//   addNew: function (name) {
//     this.list.push(name);
//   },
// };
// const main = () => {
//   document.querySelector("h3").innerText = movies.title;
//   generationList();
//   document.querySelector("form").addEventListener("submit", (event) => {
//     movies.addNew(document.querySelector("input".value));
//     generationList();
//   });
// };

// const generationList = () => {
//   const ul = document.querySelector("#app");
//   ul.innerHTML = "";
//   movies.list.forEach((movie) => {
//     const li = document.createElement("li");
//     li.innerText = movie;
//     ul.appendChild(li);
//   });
// };

// main();

// const user = {
//   fName: "Ivan",
//   lName: "Ivanov",
//   fullName: function () {
//     return `${this.fName} ${this.lName}`;
//   },
// };
// console.log(user.fullName());

// const cart = {
//   sum: 0,
//   limit: 100,
//   cash:100,
//   goods: [],
//   calculate: function () {
//     this.sum = this.goods.reduce((sum, product) => {
//       return sum + product.price * product.quantity;
//     }, 0);
//     this.cash = this.goods.reduce((alpha, product) => {
//       return alpha - product.price * product.quantity;
//     }, this.limit);
//   },
// };

// cart.goods.push({
//   name: "apple",
//   price: 2.5,
//   quantity: 3,
// });
// cart.goods.push({
//   name: "onion",
//   price: 1.5,
//   quantity: 10,
// });

// cart.calculate();

// console.log(cart.sum);

function User(fName, lName, age, profession) {
  this.fName = fName;
  this.lName = lName;
  this.age = age;
  this.profession = profession;
  this.fullName = function () {
    return `${this.fName} ${this.lName}`;
  };
}

const ivan = new User("Ivan", "Ivanov", 25, "IT");
const petr = new User("Petr", "Petrov", 40, "Manager");

ivan.sayHello = function () {
  console.log(`Hello, I am ${this.fullName}`);
};
ivan.sayHello();
