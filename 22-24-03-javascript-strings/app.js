let number = 123456789;

let sum = 0;
// while (number > 0){
//     sum += number%10;
//     // number =(number -(number%10))/10;
//     number =parseInt(number/10);
// }

number += ""; //makes the number a string number =String(number)
for (let i = 0; i < number.length; i++) {
  sum += +number[i];
  //   console.log(number[i]);
}

let str = "hello";
console.log(str[3]);

str = str.split("");
console.log(str);
str = str.join(" ");

let str1 = "Мама мыла раму";
str1 = str1.split(" ");
console.log(str1);
str1 = str1.join("");

let str2 = "ourE";
str2 = str2.split("");
let tmp = str2[str2.length - 1];
str2[str2.length - 1] = str2[0];
str2[0] = tmp;
str2 = str2.join("");

let i = 2;
let j = 3;
let array = [1, 2, 3, 4, 5, 6];
let _t = array[i];
array[i] = array[j];
array[j] = _t;

const numbers = [24, 5, 800, 20, 6, 44, -5, 0, 3, -10, 3.5, 37];
