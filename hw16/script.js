function Student(name, marks) {
  this.name = name;
  this.marks = marks;
  this.averageMark = function () {
    let totalMark = this.marks.reduce((sum, num) => sum + num);
    let averageMark = totalMark / this.marks.length;
    return averageMark;
  };
}

const students = [
  new Student("Student 1", [10, 9, 8, 0, 10]),
  new Student("Student 12", [10, 0, 8, 0, 3, 4]),
];

console.log(students);
