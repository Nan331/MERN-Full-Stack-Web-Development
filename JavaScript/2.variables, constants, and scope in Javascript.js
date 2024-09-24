//1. Variables are used to store values and are declared using the "let" or "var" keyword. For example:

let x = 10; //let is block-scoped, meaning it’s only accessible within the block where it's defined (like loops or conditionals). It can't be re-declared but can be updated.
var y = 5; //var is function-scoped, meaning it’s accessible throughout the entire function. It can be re-declared and updated.

//2. Constants are similar to variables but their values cannot be changed once they are declared. They are declared using the "const" keyword. For example:

const PI = 3.14159;

//3. Scope refers to the visibility of variables and constants within different parts of your code. There are two types of scope: 
// a.Global scope refers to variables that are declared outside of any function and are visible throughout the entire program. For example:
let a =10;

function myFunction(){
    console.log(a);
    
}
myFunction();

//b.Local scope refers to variables that are declared inside a function and are only visible within that function. For example:
function myFunction() {
    let x = 5;
    console.log(x); 
  }
  console.log(x); // Throws an error because x is not defined
