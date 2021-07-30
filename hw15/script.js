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