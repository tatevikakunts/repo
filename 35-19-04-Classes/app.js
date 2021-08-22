// const ivan = {
//   name: "Ivan",
//   age: 29,
//   profession: "IT Manager",
// };

// const yuri = {
//   name: "Yuri",
//   age: 30,
//   profession: "Doctor",
// };

// function Person1(name, age, profession) {
//   this.name = name;
//   this.age = age;
//   this.profession = profession;
// } //constructor

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   sayHello() {
//     console.log(`hello, my name is ${this.name}`);
//   }
// }

// class Employee extends Person {
//   constructor(name, age, profession, salary) {
//     super(name, age);
//     this.salary = salary;
//     this.profession = profession;
//   }
//   aboutSalary() {
//     console.log(`I have a salary of ${this.salary}`);
//   }
// }

// class Child extends Person {
//   constructor(name, age, toy) {
//     super(name, age);
//     this.toy = toy;
//   }
//   canSmile() {
//     console.log(`${this.name} - I can smile`);
//   }
// }
// class SchoolChild extends Child {
//   constructor(name, age, toy, group) {
//     super(name, age, toy);
//     this.group = group;
//   }
//   sayHello() {
//     console.log(`hello, my name is ${this.name} and I study in ${this.group}`);
//   }
// }

// const ivan = new Person("Ivan", 29, "IT Manager", 1000);
// const yuri = new SchoolChild("Yuri", 10, "Bear", "10-a");
// yuri.canSmile();

// class Animal {
//   constructor(type) {
//     this._type = type;
//   }
//   get type() {
//     return this._type;
//   }
//   set type(value) {
//     if (value === "Cat") {
//       return;
//     }
//     this.type = value;
//   }
// }

// const dog = new Animal(null);

class Boy {
  constructor(value) {
    this._boyName = value;
  }
  get boyName() {
    return this._boyName;
  }
  set boyName(value) {
    if (value[value.length - 1] === "a") {
      this._boyName = "This must be a boy";
      return;
    }
    this._boyName = value;
  }
}
const boy = new Boy("");
