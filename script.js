
//starting
console.log("hello world!");
console.warn("  this is a warning");
console.error("this is an error");
//var and let
var a = 10;
let v1 = 2;
let v2 = "3";
console.log(v1 + v2);

//parseINt changin the string to integer
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

//difference between == and === is == checks the value wheras === checks the value and the type.
let val1 = "10";
let val2 = 10;

console.log(val1 == val2); 
console.log(val1 === val2);    

//condition


let type = (age >= 18)? "adult" :"Minor";
console.log(type);

//loop



//function 

let x = 10;
let y = 20;
let z = x + y;
console.log(z);

console.log("function");

function string(){
    console.log("Hello World!");
}

console.log(person);

var person = {
    name: "Akhil",
    age: 20,
    isStudent: true
}
var { name, age, isStudent} = person;

console.log(name);
console.log(age);
console.log(isStudent);


var promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("done");
    }, 2000);
}  );

promise.then((result) => {
    console.log(result);
});


//spred operator

let arr1 = [1,2,3,4,5];
var newNumber = [...numbers, 6, 7, 8];
console.log(newNumber);
