// Task #1
const personJohn = {
  name: "John",
  sayHello: function() {
    console.log(`Hello, I'm ${this.name}`);
  }
}

const sysAdmin = {
  name: "Bob",
  __proto__: personJohn
}

const clientNatalia = {
  name: "Natalia",
  __proto__: personJohn
}
//console.log(sysAdmin.sayHello());

// Task #2
function Person(name) {
  this.name = name;
  this.sayHello = function() {
    console.log(`Hello, I'm ${this.name}`);
  }
}

function Employee(name) {
  this.name = name;
}

function Client(name) {
  this.name = name;
}

Employee.prototype = new Person();
Client.prototype = new Person();

const personJohn = new Person("John");
const sysAdmin = new Employee("Bob");
const clientNatalia = new Client("Natalia");
//console.log(Employee.sayHello());

// Task #3
function Student(name, marks) {
  this.name = name;
  this.marks = marks;
  this.averageMark = function () {
    let totalMark = this.marks.reduce((sum, mark) => sum + mark);
    let averageMark = Math.ceil((totalMark / this.marks.length)*100)/100;
    return averageMark;
  };
}

const students = [
  new Student("Student 1", [10, 9, 8, 0, 10]),
  new Student("Student 12", [10, 0, 8, 0, 3, 4]),
];
//console.log(students[1].averageMark());
