// Javascript
// Ecmascript

// Javascript !== ecmascript

// Ecma is the organization that manages ecmascript



******** Array *******


// some
// Some function is used to check if any of the elements in the array satisfy the given condition


let array = [2,4,0,2,6,6];

let output = array.some((item) => item % 2 === 0 );
// console.log(output);

// every
// Every function is used to check if all the elements inside the array satisfy the condition



let everyOutput = array.every((item) => item % 2 === 0);
// console.log(everyOutput);


// FindIndex
let foundI = array.findIndex((item) => item === 2);
// console.log(foundI);



************ Object *********

// literal object
let obj = {
        a : 1,
  b: 2,
  c: 3
}

 // keys
 
console.log(Object.keys(obj));


// Another Example

let student = {
    name : "Daniel",
    college: "cornerstone",
    address: {
        city: "Vancouver",
        province: "BC",
        zipCOde: "xyz"
    }
}


let keyArray = Object.keys(student);
// ['name', 'college', 'address']



 // values
 
 let studentValues = Object.values(student)
// ['Daniel', 'college', 'address Object']
 
 
 // entries
 let studentEntries = Object.entries(student)


 
 
 // If you want to delete a key inside an object,
 delete object.property
 
 
 // freeze
 let object = {
    a : 1,
    b : 2

}

Object.freeze(object)

object.a = 5 // This won't change the property because object is frozen
object.c = 10 // This won't add any new property beacuse its frozen
delete object.c // This won't work because object is frozen

// to check if object is frozen
Object.isFrozen(object);
 
 // seal
 Object.seal(object);
 
 object.a = 10 // This will change, because seal allows it
 object.d = 5 // This won't happen, because seal does not allow it
 delete object.a // Seal won't allow it
 
 
 
 // ES6 featuers
  ************** Rest operator ********
 
 // There are situations when you need multiple parameters inside a funciton so we use rest operator to avoid passing multiple parameters
 // Rest operator is written by ...
 
 function sum(a, b) {
        return a + b;
}

// The above function for sum can be written like this, if parameters are dynamic
function sum(...a) {
    let sum = 0;
   for (let item of a) {
        sum += item;
   }
    return sum;
   
}


// You can also use rest operatr like this
function sum(a, b, c, ...d) {
    let sum = 0;
    console.log(a, b, c );
   for (let item of d) {
        sum += item;
   }
    return sum;

       
}




// THis will give an error, because rest operator should be last parameter
function sum(...d, b, c, a) {
    let sum = 0;
    console.log(a, b, c );
   for (let item of d) {
        sum += item;
   }
    return sum;

       
}



// Before Es6 we could pass multiple parameters using the arguments keyword
function Sumify() {

    for (let item of arguments) { console.log(item); }

}

 
 ************** spread operator ********
 
 // Spread operator is used when you want to distribute/spread values provided by an array
 function sum(a, b, c) {
console.log(a, b, c);
}

let array = [1,2,3];

// Here we are spreading the values inside an array
 sum(...array)
 
 
 // Quick HACK
 // Rest is used when you are declaring the function
// Spread is used when you are calling a function
 
 // Rest is used when you are declaring the function
// Spread is used when you are calling a function


// Other features of Spread Operator

1. You can create a new object or array from any other object
// let obj2 = {...obj1};

2. You can use it to concat arrays, or objects
// let newArray = [...array1, ...array2]





 
// Destructuring
// Destructuring is a mechanism or technique through which you can extract variables out of objects or arrays

 // Object
 let student = {
        name: "Daniel",
  college : "Cornerstone"
}

 let { college } = student; // Cornerstone
 
 
 // If the key you are accessign does not exist, then give default value
 let { rollNumber = 24 } = student; // since roll Number doesnot exist
 // inside student object

 
 
 // Array
 
 let array = [1,2,3,4]

 let [firstVal, secondVal ] = array;
 
 let array2 = [1];
 
 // Default value for the variable if it doesnot exist
 let [first, second = 10 ] = array2;



 ******** shallow copy *******
 // Shallow copy works on the basis of references
 let object = { a : 1, b : 2 }
let object2 = object;

object.a = 5;

// object2.a will also change to 5 because it is copied based on reference

let object = {
    a : 1,
    b : 2,
    c : {
        d : {
            e :1
        }
    }

}

let object3 = {...object}

NOTE: // If you copy using spread operator , it will deep copy only till the first level, nested objects would be shallow copied

******* deep copy *******
// When you can copy deeply only the values and not the reference

let newObject = JSON.parse(JSON.stringify(object));




// Examples for deep copy
// General folder structure in windows or mac systems

// Tomorrow when we come to class, everyone has to give an example of shallow copy
// Localstorage, cookies, session storage

// EVENTS
// Promises
// REST API



