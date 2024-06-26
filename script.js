
//starting
console.log("hello world!");
console.warn("  this is a warning");
console.error("this is an error");
// var and let
var a = 10;
let v1 = 2;
let v2 = "3";
console.log(v1 + v2);

// parseINt changin the string to integer
console.log(v1 + parseInt(v2));
console.log(a);

//array
arrayOne = ["john",30,true,null,undefined]
console.log(arrayOne);
console.log(arrayOne[0]);
console.log(arrayOne.push("apple"));
console.log(arrayOne.pop());
arrayOne.splice(3,1);
console.log(arrayOne);

// difference between == and === is == checks the value wheras === checks the value and the type.
let val1 = "10";
let val2 = 10;

console.log(val1 == val2); 
console.log(val1 === val2);    

//condition

let age = 20;
let type = (age >= 18)? "adult" :"Minor";
console.log(type);

