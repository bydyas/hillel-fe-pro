// Task #1
const user = {
    firstName: "Nikola",
    secondName: "Tesla",
    getFullName: function() {
        return this.firstName + ' ' + this.secondName;
    }
}

user.getFullName.call({ firstName: "Steve", secondName: "Jobs" });

user.getFullName.apply({ firstName: "Steve", secondName: "Wozniak " });

const getBindedFullName = user.getFullName.bind({ firstName: "Julia ", secondName: "Roberts" });

function Person(name, surname) {
    this.firstName = name;
    this.secondName = surname;
    this.getFullName = function() {
        return this.firstName + ' ' + this.secondName;
    }
}

const friends = [
    new Person('Alejandro', 'Garcia'),
    new Person('Bartolomeo', 'Wilson'),
    new Person('Karl', 'Gustav'),
]

// Task #2
function Calculator(initValue) {
    this.value = initValue;
    this.sum = function (addValue) {
        return this.value += addValue;
    };
    this.mult = function (addValue) {
        return this.value *= addValue;
    };
    this.sub = function (addValue) {
        return this.value -= addValue;
    };
    this.div = function (addValue) {
        return this.value /= addValue;
    };
    this.set = function (addValue) {
        return this.value = addValue;
    };
}
const calc = new Calculator(10);

console.log(calc.sum(5)); /// 15
console.log(calc.mult(10)); // 150
console.log(calc.sub(40)); // 110
console.log(calc.div(10)); // 11
console.log(calc.set(100)); //