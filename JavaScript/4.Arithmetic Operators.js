//Template Literals
//Template literals provide a more readable and convenient way to include variables in strings. They are enclosed by backticks (`) and allow embedded expressions using ${}.
let username = "Nandini";
let age = 23;
let message = `My name is ${username} and I am ${age} years old.`;
console.log(message);

//Operators
//1.Arithmetic Operators: +: 
/*+: Addition operator
-: Subtraction operator
*: Multiplication operator
/: Division operator
%: Remainder (modulus) operator
**: Exponentiation operator*/

let a = 4;
let b = 3;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(++b);
console.log(--a);

//2.Assignment Operators
/*=    // Assignment
+=   // Addition assignment
-=   // Subtraction assignment
*=   // Multiplication assignment
/=   // Division assignment
%=   // Modulus assignment*/
let x = 10;
let y = 5;

x += y;  // Equivalent to x = x + y
console.log(x);  // Output: 15

y -= x;  // Equivalent to y = y - x
console.log(y);  // Output: -10

//3.Comparison Operators:
/*==   // Equal to
!=   // Not equal to
===  // Strict equal to
!==  // Strict not equal to
>    // Greater than
>=   // Greater than or equal to
<    // Less than
<=   // Less than or equal to*/

let A = 10;
let B = 20;
let C = "10";

console.log(A==B); //False
console.log(A==C); //True
console.log(A===C); //False

//4.Logical Opearators
/*Logical operators are used to combine two or more Boolean expressions and return a Boolean value. The following are the logical operators in JavaScript:

&&   // Logical AND
||   // Logical OR
!    // Logical NOT
Example:*/

let X = 10;
let Y = 5;

console.log(X > 5 && Y < 10);   // Output: true
console.log(X > 5 || Y > 10);   // Output: true
console.log(!(X > Y));         // Output: false

//5.Bitwise Operators:











