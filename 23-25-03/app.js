// function howOld(age) {
//   let msg = age < 18 ? "So young?" : "Welcome!!!";
//   //   if (age < 18) {
//   //     msg="So young?";
//   //   } else {
//   //     msg="Welcome!";
//   //   }
//   alert(msg);
// }

// // let myAge = 25;
// // howOld(myAge);
// // howOld(10);
// // howOld(13);
// // howOld(30);
// // howOld(myAge);
// howOld(+prompt("How old are you?"));

// const sayHello = function (name, msg = "Hello") {
//   alert(`${msg}, ${name}`);
// };
// sayHello("Ann");
// sayHello("Ann", "Bye");

const sumNumbers = (x, y) => {
  return x + y;
  //   alert(x+y);
};

let result = sumNumbers(2, 3);
console.log(sumNUmbers(2, 3));
// sumNumbers(5,3);

const sortArray = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let _t = array[j];
        array[j] = array[j + 1];
        array[j + 1] = _t;
      }
    }
  }
  return array;
};
const numbers = [24, 5, 800, 20, 6, 44, -5, 0, 3, -10, 3.5, 37];
const sortNumbers = sortArray(numbers);

const letters = "Hello World".split("");
console.log(sortArray(letters));



