//Manipulating objects and arrays

//Objects and Arrays can be manipulated using various methods and techniques. Here are some common ways of manipulating objects and arrays:

//1. Accessing properties: Objects and arrays can be accessed using their properties or keys. For objects, you can use the dot notation or the square bracket notation to access its properties. For arrays, you can use the index notation.
const myCars = ["Fortuner","Thar","GWAGON","audi","range rover"];
const person = {
    "name" : "NS" ,
    "age"   : 23,
    "Gender":"Female",
    "Mobile number" : 25896317,
    "address":{
        "city":"Varanasi",
        "Street": "Rm",
        "State" : "UttarPradesh"
    },
    "hobbies" : ["bd","ct"]
};
console.log(person.Gender);
console.log(person['address']['Street']);

console.log(myCars[2]);
console.log(person.hobbies[0]);

//2. Adding properties: You can add new properties to an object or elements to an array using the dot notation or the square bracket notation.

person.skills = ["C","Java","JS","SQL"];

console.log(person);

//3. Deleting properties: You can delete properties from an object using the delete keyword.

delete person.age;

console.log(person);

//4. Looping through objects and arrays: You can use loops to iterate through objects and arrays. For objects, you can use the for...in loop, and for arrays, you can use the for loop or the forEach method.

for(let key in person){
    console.log(`${key} is ${person[key]}`);
    
}






