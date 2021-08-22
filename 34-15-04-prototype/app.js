// function printArray() {
//   this.forEach((element) => {
//     console.log(element);
//   });
// }

// Array.prototype.printArray = printArray;

// [1, 2, 3, 4].printArray();

// const user = {
//   fName: "Ivan",
//   lName: "Ivanov",
//   age: 26,
//   getFullName: function () {
//     return `${this.fName} ${this.lName}`;
//   },
// };

// const employee = {
//   profession: "JS developer",
//   salary: 150,
// };

// employee.__proto__ = user;

const printObject = (obj) => {
  const keys = Object.keys(obj);
  keys.forEach((key) => {
    if (typeof obj[key] === "object") {
      printObject(obj[key]);
    } else {
      console.log(`${key}: ${obj[key]}`);
    }
  });
};
// Object.prototype.printObject = printObject;

const animal = {
  name: "Murzik",
  type: "Cat",
  toy: {
    name: "sharik",
    material: "plastic",
  },
};
printObject(animal);
