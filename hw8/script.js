const obj = {
    name: 'Alina', 
    age: 23, 
    address: { 
            country: 'UA', 
            city:'Kyiv'
        }
};

const objCopy = copy(obj);

function copy(object) {
    const newObject = {};
    for (let key in object) {
        if (typeof object[key] === 'object') {
            newObject[key] = copy(object[key]);
        } else {
            newObject[key] = object[key];
        }
    }
    return newObject;
}

console.log(obj);
console.log(objCopy);