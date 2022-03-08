// synchronous vs asysnchronous


// *** SYNCRHONOUS JAVASCRIPT **** 

// Synchronous behaviour means reading code line by line and waiting for the the code to execute and then
// move to other line

// FOR EXAMPLE ----- 
// Lets say you are in a restauraunt
// Waiter that comes to your table and takes the order
// Then the waiter goes back to the kitchen and waits for the order to prepare
// Waiter comes back with the order and goes to the other table

// Practical Example in Javascript : console.log(1)



// *** ASYNCRHONOUS JAVASCRIPT **** 
// Asynchronous behaviour means reading code line by line and not waiting for the the code to execute and move forward to other line

// FOR EXAMPLE ----- 
// Lets say you are in a restauraunt
// Waiter that comes to your table and takes the order
// Then the waiter goes back to the kitchen
// Waiter comes back  and goes to the other table to take new order
// Waiter goes back if any of the order is complete
// Waiter brings back the order and serve on their respected tables

// Practical Example in Javascript : setTimeout

/* console.log(1);
console.log(2);

setTimeout(() => {
    console.log(3);
}, 1000);

console.log(4); */

// 1 2 4 3

// Common Application of Asynchronous Javascript - fetch api

// Promises
/* Its like a simple object that follows asynchronous behaviour
-- Through this you can make api calls */

// GENERALLY YOU WON't BE CREATING PROMISES BY YOUR OWN
// Because you would be using libraries that already return promises
// Its just that you have to handle them


// HOUW YOU CREATE YOUR OWN PROMISE
let promise1 = new Promise((resolve, reject) => {
    
})

// callback functions
// Call me back, whenever you want
// Callbacks are those functions which are passed as a parameter to
// other functions so that they can be called whenever you want

function a(func) {
    func();
}

function printMyName() {
    console.log("Prabh");
}

a(printMyName); // Prabh



// Callbacks are also used to achieve asynchronous behaviour
// For example - You can make api calls usiong callbacks

// callback hell is also called as pyramid of doom

// For example, how callback hell can be a problem
// There was a situation, where a company exposed there payment API, so that other companies can use it

// So the client, who was using that payment api, called the callbacks in such a manner that the payments were deducted frequently

// Paypal API



//******* Promises in depth ********

// states in promise
1. Pending State (Wait time of resolving/rejecting the promise)
2. Fulfilled State (When promise is succefully resolved )
3. Rejection state (When promise is rejected)


// Two ways through which you can either resolve or reject a promise

// 1.  Then and catch
// 2.  async and await


// THEN AND CATCH ********

// Lets understand how resolve works
let promise1 = new Promise((resolve, reject) => {
    resolve('Working');
})


promise1.then((response) => {
    console.log(response, "I CAME TO SUCCESS BLOCK");
}).catch((error) => {
    console.log(error, "I CAME TO ERROR BLOCK");
})

// The output of above code is - Working I CAME TO SUCCESS BLOCK because we resolved it when we created the promise


// Lets understand how reject works
let promise1 = new Promise((resolve, reject) => {
    reject('Working');
})

promise1.then((response) => {
    console.log(response, "I CAME TO SUCCESS BLOCK");
}).catch((error) => {
    console.log(error, "I CAME TO ERROR BLOCK");
})

// 
// The output of above code is - Working I CAME TO ERROR BLOCK because we rejected it when we created the promise


/// This is something your database is returning
let dataFetchedFromDatabase = false;

// HOW FETCH API WORKS BEHIND THE SCENE (JUST AN ASSUMPTION)
let promise1 = new Promise((resolve, reject) => {
    if (dataFetchedFromDatabase) {
            resolve({
             data :    dataFetchedFromDatabase,
                message: "Sucesfully completed"
            });
    } else {
            reject({
             data :    dataFetchedFromDatabase,
                message: " Operation unsuccesfull"
            });
    }
})

promise1.then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
})

// A PROMISE RETURNS A PROMISE

let number = 2;
let promise1 = new Promise(function(resolve, reject) {
    resolve(number);
});

promise1.then((data) => {
    return data * 2;
}) 
.then((newData) => {
   return newData * 5;
})
.then((finalData) => {
    console.log(finalData);
}) // 20

// The above example is promise chaining
// third promise (then block) is dependent on second and second is dependent on third


// EXAMPLE

api.then((data) => {
	return api2(data)	
}).then((newData) => {
	return api3(data);
})
.then((finalData) => {
	console.log(finalData);
})


// async await

function callAPI () {
	fetch('url').then((response) => {
  
  })
  .catch((error) => error)
}

async function callAPI () {
	const output = await fetch('url'); // syncrhonous
  console.log("Working");
}


// Catching errors inside async await

async function callAPI () {
	
  try {
  	const output = await fetch('url'); // syncrhonous
      console.log("Working");

  } catch(error) {
  	console.error("Something went wrong", error);
  }
}


// Localstorage'
// Localstorage is like a small database which holds your data on browser

let array = [1,2,3,4]

// storing value inside localstorage
localStorage.setItem('numberData', JSON.stringify(array))


// Retrieving data in its orignal form
const output = JSON.parse(localStorage.getItem('numberData'))


// Deleteing localstorage data
localStorage.removeItem('numberData')



// Tomorrow we discsus localstorage vs cookies vs sessionstorage



// REST API
