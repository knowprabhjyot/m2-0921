// **** EVENTS **** /// 
// Javascript is an event driven language
// Example - something is clicked maybe on a button
// Example 2 - When you scroll in browser
// Example 3 - When you Drag item from one place to another


// Async vs Defer

// When I use async, when I am using a script that is not dependent on my script. Google Maps API


// Defer is preferably used when we want to parse the html first , and then execute our logic


// *** SET TIME OUT
// Set timeout is a feature offered by browser so that you can execute a piece of code after the given delay

setTimeout(function() {
    console.log('Prabh');   
}, 3000);


// **** SET INTERAVAL
// Set Interval is a feature offered by browser so that you can execute your code everytime after the given delay

let timer = setInterval(function() {
    console.log('hello')
}, 1000);

// If you want to stop the timer
clearInterval(timer);

function callMe() {
	alert('Prabh');
}


// ****** EVENTS ********

// onclick - It is an even which is fired when you click on a button or any relevant element

//  <button onclick="callMe()">Click</button>

function callMe() {
	alert('Prabh');
}

// onchange - It is an event which is fired when you change something inside input box

  // <input onchange="getValue(event)" />
function getValue(event) {
	console.log(event.target.value);
}

// Real life example - Autocomplete feature


// onfocus - On focus is fired when you put the focus on the particular element

//   <input  onfocus="getFocus()" />

function getFocus() {
	console.log("I am fired");
}


// onmouseover - On Mouse over fires when you enter a region

function onMouseEnter() {
	console.log("I entered the div");
}

// Real life example - Zoom functionality on product description page on an ecommerce website


// onmouseout -  On Mouse out fires when you exit a region

function onMouseExit() {
	console.log("I exited the div");
}


// Real life example - Zoom functionality on product description page on an ecommerce website, to loose focus on the zoomed product



// onsubmit - Onsubmit works when the form is submitted as explaiend in the example below

<form onsubmit="formSubmitted(event)">
        <input type="text" placeholder="Name" />
        <button type="submit">
          Submit
        </button>
        
        <button type="button">
           Cancel
        </button>
    </form>

function formSubmitted(event) {
	event.preventDefault();
	console.log("Form is submitted");
}



// ******. CLASSES ******* // 

// Classes are the blueprints of a particular type


class Cars {

    // This constructor is a method that is executed by default when
    // you make an instance of this class
    constructor(color, type, topSpeed) {
        this.color = color;
        this.type = type;
        this.topSpeed = topSpeed;
    }


}

let ferrari = new Cars('red', 'hatchback', 400);

let buggatti = new Cars('red', 'hatchback', 500)


// This ferrari and bugatti is an object of type Cars

// buggatti.color // red
// bugatti.type // hatchback


// Another Example


class Animal {

  constructor(name, type, numberOfLegs, speed, speak) {
      this.type = type;
      this.legs = numberOfLegs;
      this.speed = speed;
      this.speak = speak;
      this.name = name;
  }

  getVoice() {
    console.log(this.name + 'speaks like ' + this.speak);
  }

   
}


let dog = new Animal('Fluffy', 'huskey', 4, 20, 'bark');


// 2 questions
1. when we will use a class
// When we want to organize data and keep a type




2. How can i optimize a class

// Using OOP concepts
// Object Oriented Programming 
// Classes come under OOP
// Inheritance using extends keywords
// Polymorphism



// Example of Inheritance
class People {
    constructor(name) {
        this.name = name;
    }

    greeting() {
        console.log(`Hi ${this.name} how are you`);
    }

}


// Here we inherited from people class
class Men extends People {
    constructor(name, age) { 
        super(name); // Super is used to invoke parent class's constructor so that you can use name keyword
        this.age = age;
    }
}

// Instance of Men class
let Prabhjyot = new Men('Prabhjyot', 27)

Prabhjyot.name // Prabhjyot
Prabhjyot.greeting() //  Hi Prabhjyot how are you

Note: 1) We are able to access greeting method because we are inheriting that from People class
2) We use super keyword to tell the parent class the value of name variable so that it can use that in greeting method





// Promises
    // synchronous vs asysnchronous
    // callback functions
    // callback hell
    // promises
      // states in promise
    // then, catch
    // async await
    // fetch api
h
// ON Tuesday *****
// REST API
// Localstorage, cookies, session storage


