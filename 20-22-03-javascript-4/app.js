// let source = 10;
// while (source > 0) {
//   source--;
//   console.log(`Baking pancake N ${10 - source}`);
// }
// console.log("Time to eat pancakes");

// let i = 0;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// console.log("end while i");

// let k = 10;
// while (k < 5) {
//   console.log(k);
//   k--;
// }

// do {
//   console.log(`Do while ${k}`);
//   k--;
// } while (k < 5);
// console.log(`After do-while k=${k}`);

// let j;
// for (j = 1; j <= 10; j++) {
//   console.log(`For loop j=${j}`);
// }
// let counter = 1;
// for (; counter <= 10; counter++) {}

// for (; counter <= 10; ) {
//   console.log(counter++);
// }

// for (j = 1; j <= 10; j = j + 1) {
//   console.log(`For loop j=${j}`);
// }

// let m;
// for (m = 0; m <= 20; m = m + 2) {
//   console.log(m);
// }

// let m;
// for (m = 0; m <= 20; m = m + 1) {
//   if (m % 2) {
//     console.log(m);
//   }
// }
// for (m = 0; m <= 20; m = m + 2) {
//   if (m === 0) {
//     m++;
//   }
//   console.log(m);
// }

// let x, y;
// for (x = 1; x <= 9; x++) {
//   for (y = 1; y <= 9; y++) {
//     console.log(`x=${x}, y=${y}, x*y=${x * y}`);
//   }
// }

// for (let x = 0; x <= 100; x += 5) {
//   if (x === 55) {
//     break;
//   }
//   console.log(x);
// }

// for (let x = 0; x <= 100; x += 5) {
//   if (x >= 50 && x <= 60) {
//     continue;
//   }
//   console.log(x);
// }

// for (m = 0; m <= 20; m = m + 1) {
//   if (m % 2 !== 0) {
//     continue;
//   }
//   console.log(m);
// }

// outer: for (let x = 0; x < 10; x++) {
//   for (let y = 0; y < 10; y++) {
//     if (x === y) {
//       continue outer;
//     }
//     console.log(x, y);
//   }
// }

//ARRAYS
// [1,2,3,4,5,6]
//["Apple","Cherry", "Peach"]

// const arrNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const fruit = ["Apple", "Cherry", "Peach"];
// const arrNumber2 = new Array();
// console.log(arrNumber);
// console.table(arrNumber);
// console.log(arrNumber2);
// console.log(fruit[1]);

// for (let i = 0; i < 3; i++) {
//   console.log(fruit[i]);
// }
// for (let i = 0; i < fruit.length; i++) {
//   console.log(fruit[i]);
// }
// fruit[1] = "Orange";
// for (let i = 0; i < fruit.length; i++) {
//   console.log(fruit[i]);
// }

// fruit[fruit.length] = "Lemon";
// fruit.push("Lemon"); //for the last index
// for (let i = 0; i < fruit.length; i++) {
//   console.log(fruit[i]);
// }

// fruit[100] = "Kiwi";
// console.table(fruit);
// console.log(fruit[90]);

// fruit.pop(); //for the last index
// console.table(fruit);

// fruit.shift(); //for the 0 index
// console.table(fruit);

// fruit.unshift("Apple"); //for the 0 index
// console.table(fruit);

// fruit.push(200,300,400);

// for (let abc in fruit) {
//   console.log(fruit[abc]);
// }

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(matrix[1][1]);
