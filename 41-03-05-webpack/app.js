const person = {
  fName: "Ivan",
  lName: "Ivanov",
  getFullName: function () {
    return `${this.fName} ${this.lName}`;
  },
};

console.table(person);
console.log(person.getFullName());
