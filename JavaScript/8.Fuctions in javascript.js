//Function : A function is a reusable block of code that performs a specific tasks

/*There are four types of functions i  JS : 1)Function declaration 
                                            2)function expression
                                            3)Anonymous function
                                            4)Arrow function*/

//Function declaration : This is a nammed function 

function add(a,b){
    console.log(a+b);   
}
add(4,3);

//Function expression: This is a function that is assigned to a variable or constant

const name = function(){
    console.log("Hello function without name is called that is function expression");
}
name();

const greet = function(name) {
    console.log(`hello${name}`);
  };
  greet('Nandini');

//Anonymous function : This is a function without name it is often used as a callback function.

let anonymousFunction = function(){
    console.log("Hello from UP");
    
};
anonymousFunction();

//Arrow Function : This is a shorthand way of writing a function expression using the => syntax.

let sub = (x,y) => {
    return x-y;
};
console.log(sub(10,3));

let mul = (x,y) => console.log(x*y);

mul(4,2);


