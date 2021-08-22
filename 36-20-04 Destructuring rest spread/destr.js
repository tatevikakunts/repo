//Destructuring, Rest, Spread

const array = [1, 2, 3, 4, 5];

let [first, second] = array;
let [, second, third] = array;
let [, , third, fourth] = array;

let [, second, ...rest] = array;
console.log(second);
console.log(rest);

const fullName = "Ivan Ivanov";
let [fName, lName] = fullName.split(" ");
console.log(fName);
console.log(lName);

console.log(...array); //spread

const nArray = array;
const n1Array = [...array];
array[0] = "HELLO";
console.log(nArray);
console.log(n1Array);

let options = {
  title: "Menu",
  width: 100,
  height: 200,
  dict: {
    any: {
      field: 1,
    },
  },
};
let { width, height, title } = options;
console.log(title);
console.log(width);
console.log(height);

let {
  width,
  dict: {
    any: { field },
  },
  ...fields
} = options; //rest

// except the arrow functions

function abc(a, b, c, d) {
  console.log(arguments);
  console.log(arguments[0]);
}
abc(1, 2, 3, 4); //returns an object of the arguments, we can address to it with arguments[0]
