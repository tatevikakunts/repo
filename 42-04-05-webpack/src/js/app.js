import users from "./users";
import todos from "./todos";
import User from "./UserClass";
import Todo from "./TodoClass";
import sayHello, { sayName as newSayName, sayGoodbye } from "./function";
function sayName(abra) {
  console.log(abra);
}
const userList = [];
users.forEach((user) => {
  userList.push(new User(user.name, user.username, user.email));
});
console.log(userList);
console.log(sayHello("Ivan"));
sayName("Ivan");
console.log(sayGoodbye("Ivan"));
console.log(newSayName("Ivan"));
