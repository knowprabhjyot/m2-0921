// Variables************************

// In Javascript
// let studentName = "Daniel";
// const studentAge = 24;
// const isHappy = true;

// In Typescript
let studentName : string = "Daniel";

// Type 'number' is not assignable to type 'string'.(2322)
// studentName = 24;

const studentAge : number = 24;
const isHappy : boolean = true;


// A type any allows you to change the type of variable
// let student : any = {
//     name: "Prabh"
// }

// student = 4;

type Student = {
    name: string,
    age: number, // In javascript we have only variable to represent numbers, integers,decimals = number
    // in java langauge => integer => int, decimals => floats, decimals with a large range => doubles
    college: string,
    newStudent: boolean
}

let student1 : Student =  {
    name: "Daniel",
    age: 24,
    college: "Cornerstone",
    newStudent: true
}

// Type '{}' is missing the following properties from type 'Student': name, age, college, newStudent(2739)
// let student2 : Student = {

// }


// arrays *******************
// In Javascript
// let array = [ 1,2,3,4];

// In Typescript
let array : number[] = [ 1,2,3,4];
let stringarray : string[] = ["1", "2", "3"];

let miscArray : any = [1, "prabh", "cornerstone"]


// tuples *******************
let studentArray : [number, string, boolean] = [1, "Daniel", true];


// Unions **************
let age : number | string = 24;



// Optional parameters
type College = {
    name: string,
    squareFeet: number, // In javascript we have only variable to represent numbers, integers,decimals = number
    // in java langauge => integer => int, decimals => floats, decimals with a large range => doubles
    ceo?: string, // the question mark before the colon makes sure that field inside the object would be optional
    address ?: string | undefined
}


let cornerstone : College = {
    name: "cornerstone",
    squareFeet: 10000000,
}



// Tomorrow 
// Enum
// Generic Types in typescript 
// React + typescript using a small project