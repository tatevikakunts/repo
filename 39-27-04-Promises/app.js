const connection = {
  isOK: false,
};
const getPerson = () => {
  return new Promise((resolve, reject) => {
    if (!connection.isOK) {
      reject(new Error("Auth error"));
    }
    setTimeout(() => {
      const person = {
        firstName: "Ivan",
        lastName: "Ivanov",
        age: 30,
      };
      resolve(JSON.stringify(person));
    }, 3000);
  });
};
console.log(getPerson());

let person = {};

getPerson()
  .then((person) => {
    console.log(person);
    if (1 !== 2) {
      throw new Error("Auth");
    }
    return JSON.parse(person);
  })
  .then((ivan) => {
    console.log("ivan", ivan);
    person = ivan;
    console.log("person", person);
  })
  .catch((err) => {
    console.log(err.toString());
  })
  .finally(() => {
    console.log("Finally");
  });

// function division(a, b) {
//   if (b === 0) {
//     throw new Error("Division by zero");
//   }
//   return a / b;
// }
// try {
//   console.log(division(5, 2));
// } catch (e) {
//   console.log(e.toString());
// }
