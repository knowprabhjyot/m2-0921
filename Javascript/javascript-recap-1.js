var firstName = "Prabh"; // Global Scope
let secondName = "Gambhir"; // Block Scope

if (true) {
    let studentName = "Daniel";
}
console.log(studentName); // This will give an error, because the variable is declared within the if block

if (true) {
    var studentName = "Daniel";
}
console.log(studentName); // This would work

const studentAge = 25; // Block Scope
// It cannot be changed because its mutable

student.name = "Sae" // This won't give an error
student = "Sae" // This will give an error, because we are assigning 
// directly to a const variable


// ***** HOISTING ****** //

console.log(c)
var c = "name";

var c;
console.log(c);
c = "name";


// This concept is also known as temporal dead zone
console.log(e); // Reference Error
// let e = "Prabh";

// var, let, const all get hoisted

// ******* FUNCTIONS ******** //
// Do you think functions get hoisted ?
// Functions also get hoisted

getName();

function getName() {
	console.log("Prabh");
}

// How Compiler understands this as

function getName() {
	console.log("Prabh");
}

getName();


// How many ways you can declare a function

1. function getName() {} // Only this works with hoisting without error
2. Arrow Functions (ES6) , const getName = () => {} // this gives error for hoisting
3. const getName = function () {} // this gives error for hoisting 


// 2016 (Let and const)

// Var is from the start (Hoisting was a concept widely used back then)

// Hoisting makes sense in function (Paradigm for development)
// Many people use function hoisting for code readability


// What is the differnce between Functions and Arrow Functions
// You might have heard about "THIS KEYWORD"

// If you are using this keyword with arrow functions, // it points to the global scope instead of the current scope


// THIS KEYWORD
//This keyword refers to the current context
// Most cases its the data before . (HACK)

console.log(this); // prints window object


let studentObject = {
    firstName: "Daniel",
    lastName: "Osaki",
    getName() {
        console.log(this) // Here current context is studentObject
    }
}


let studentObject = {
    firstName: "Daniel",
    lastName: "Osaki",
    getName: () => {
        console.log(this) // Here current context is global object
    }
}


// OBJECTS******
// Objects are data structures in which you can store data collectively

let object = {
    key: value
}


// Example
let studentObject = {
    firstName: "Daniel",
    lastName: "Osaki",
    getName() {
        console.log(this)
    },
    age: 27
}




studentObject.firstName 
studentObject["lastName"] // This is generally used when things are dynamic


// ***** ARRAYS ***** //
let array = [1,2,3,4];
let array1 = [studentObject, studentObject, 27]

const array3 = [1,2,3];
array3 = [] // this will give an error because its constant

array3.push(4) // This won't give an error

console.log(array3.push(10)); // Output




// **** FUNCTIONS IN ARRAYS ***** //

1. Push Function, returns the length
 - It adds an element in the last index
array3.push(4) 


2. Pop Function, returns the element you removed
 - It removes an element from the last index
 
 
3. Shift Function
 - It removes an element from the first index

4. Unshift Function
 - It adds an element to the first index
 
5. Splice Function
	- It is used to add an element and also for deleting an element
  
  // In splice first parameter is - starting index
  // Second Parameter is count of items you want to delete
  
  // Number of items you want to add
  
  // NOTE: Operation performed is inplace

Example :
	let array = [1,2,3];
  array.splice(0, 1, 4); // Output [4,2,3];

6. Slice Function
 // Its similar to slicing a cake
 
 Note: // It doesnot include the second parameter index.
 
 // Also the operation performed on. the array, 
 // is not inplace
 
 let array = [1,2,3]
let newArray = array.slice(0, 2); // [1,2]


// ES5 Functions 

7. Map
// So map function is used to manipulate,
// an array without affecting its orignal length

// map function doesn't work inplace


// Example

let studentArray = [

    {
        name: "Acekay",
        college: "Cornerstone"
    },
    {
        name: "Cecilla",
        college: "Cornerstone"
    },
    {
        name: "Elham",
        college: "Corner"
    },
    {
        name: "Hector",
        college: "Cornerstone"
    }


]


let modifiedArray = studentArray.map((student) => {
    if (student.name === "Elham") {
        student.college = "Cornerstone";
    }
    return student;
}) 

8. Filter
// Filter function is used to reduce down
// the array based on some given logic

let studentArray = [

    {
        name: "Acekay",
        college: "Cornerstone",
        grade: 95
    },
    {
        name: "Cecilla",
        college: "Cornerstone",
        grade: 90
    },
    {
        name: "Elham",
        college: "Corner",
        grade: 99
    },
    {
        name: "Hector",
        college: "Cornerstone",
        grade: 85
    }

]

let modifiedStudentList = studentArray.filter(function(student) {
    if (student.grade >= 95) {
})

// NOTE: 1. Array is not modified in place
// 2. It changes the length of array because we are filtering


// Trick question

let array = [1,2,3,4,5,0,20,11]
let newArray = array.filter(item => item);
// [1, 2, 3, 4, 5, 20, 11]

Reason - 0 is falsy in nature, that's why its not filtered


9. Reduce
// Reduce function in array is used to 

let sum = list.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);


// If you want to understand reduce using for loop for the above logic

let sumOfList = 0; // sumOflist means accumulator

for (let i = 0 ; i < list.length ; i++) {
    sumOfList  = sumOfList + list[i] // list[i] means current Value
}


10. Find

// Its used to search for an element inside an array


let array = [1,2,3,4,5,3];


function findItem(list, target) {
    let value;
    let foundItem = list.find((item, index) => {
        if (item === target) {
            return true;
        }
    } );
    
    if (!foundItem) {
        console.log("Value not found")
    }

return foundItem;

}

finditem(array, 3); // output : 3
finditem(array, 10); // output: "value not found", undifned


8.30 - 9.30 (Teaching)
9.30 - 10 (break)
10 - 10.30 or 11 (teaching)
11 - 12.30 (In class assignment)




// FOR TOMORROW
// Classes
// Inheriting classes
// static variables
// EVENTS
// Promises
// REST API (If we left some time)

// ES6 Features
// let const (already covered)
// Destructuring
// rest and spread operators
// 11. every
// 12. some