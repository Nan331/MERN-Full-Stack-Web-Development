//Objects : An object is a non-primitive data type that represents a collection of properties. It is a key-value pair data structure where each key is a string (or symbol) and each value can be any valid JavaScript data type, including another object.

//1. Object Literals:  An object literal is a comma-separated list of name-value pairs wrapped in curly braces {}.

const person = {
    "name": "Nandini",
    "age" : 24,
    "Gender" : "Female"
};
//Object inside object
const employes = {
    "name": "Rowshan",
    "age" : 24,
    "Gender" : "Female",
    "address" :{
        "city" : "patna",
        "state": "Bihar"
    }
};

//2. Constructor Functions:  A constructor function is a function that is used to create new objects.

function Person(name , age){
    this.name = name;
    this.age = age;
}

const person1 = new Person("Kishlay",25);
const person2 = new Person("Nandini",23);

//3. Object.create() Method: It creates a new object with the specified prototype object and properties.
function Guest(name , age){
    name = "NS";
    age = 23;
}
const newPerson = Object.create(Guest);
newPerson.name = "NS"
newPerson.age = 30;
console.log(newPerson.name);
console.log(newPerson.age);

