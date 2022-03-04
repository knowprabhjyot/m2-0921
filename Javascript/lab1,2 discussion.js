

// FAANG only cares about problem solving
// FOLLOW The course curriculum + I might 
// Leet code 



// ****** LAB 1 *******

// Write a function that returns the maximum in an array, using ES5/ES6
// standards ? HINT: Reduce

function maxValue(array) {
	let max = -Infinity;
  for (let i = 0 ; i < array.length ; i++) {
  	if (array[i] > max) {
    		max = array[i];
    }
  }
  return max;
}

function maxValueWithReduce(array) {
	const maxValue = array.reduce((accumulator, currentValue) => {
  		return accumulator > currentValue ? accumulator: currentValue;
  })
  
  return maxValue;
}

function maxValueWithMaxMethod(array) {
// HACK : If you are using ... while calling a function then it is spread
	return Math.max(...array);
}

let array = [1,20,55,-100,21, 49, 51];

console.log(maxValueWithMaxMethod(array));

// NaN
// Coercian in Javascript
// Not a number 



/* Write a function that takes an array as a parameter and returns true if
a value is repeated twice or more, else returns false
Does the following array contains a duplicate */


// NOT A GOOD APPROACH
// Time complexity - O ( n* 2))
// BRUTE FORCE APPROACH
function checkDuplicates(array) {
		for (let i = 0 ; i < array.length ; i ++) {
    	for (let j = i + 1; j < array.length - 1; j++) {
      	if (array[i] === array[j]) {
        		return true;
        }
      }
    }
    
    return false;
}


// let array = [1,2,3,1];


// WHY WE DONT USE 1 FOR LOOP for this problem
/* function checkDuplicates(array) {

    for (let i = 0 ; i < array.length ; i ++) {
        if (array[i] === array[i + 1]) {
            return true;
        }
    }
    return false;
} */
    
    // i = 0, array[i] = 1,          i+1 = 1, array[i+1] = 2
    // i = 1, array[i] = 2           i+1 = 2, array[i+1] = 3
    // i = 2, array[i] = 3.          i+1 = 3, array[i+1] = 1
    
    
    
 // let array = [1,2,1,4]
 // Time Complexity - O (n + 2) // O(n)
 function checkDuplicatesByObject(array) {
 		let object = {};
    for (let i = 0 ; i < array.length ; i++ ) {
    	if (object[array[i]]) {
      		object[array[i]] += 1;
          
          // object = {1 : 2, 2 : 1}
          // array[i] = 1
          // object[1] ?
          // 
      } else {
      	object[array[i]] = 1;
        // object[2] = 1
      }
    }
    
    for (let item in object) {
    	if (object[item] > 1) {
      	return true;
      }
    }
    
    return false;
 }
 
 
 // Write a function that returns a the missing integer, provided a given
// array from 1 to N, Note: Numbers will be in sequence
    
  // Best apprach
  function findMissingNumber(n, array) {
  let sum = 0;
  	for (let i = 1 ; i <= n ; i++) {
    	sum+= i;
    }
    
    let sumOfGivenArray = array.reduce((acc, cv) => acc + cV, 0);
    
    return sum - sumOfGivenArray;
    
    // 50
  }
 
 // Expected array = [1,2,3,4,5,6,7,8,9,10];
 // Given array = 
 let array = [1,2,3,4,6,7,8,9,10];
  findMissingNumber(10,array) // 5
  
  


/* 
Write a function that Reverses an array without using Es6 Reverse Method */

let array = [1,2,3,4,5]
// expected output = [5,4,3,2,1];


// Best solution
function reverseMyArray(array) {
	let low = 0;
  let high = array.length -1;
  
  while(high >= low) {
    let temp = array[low];
    array[low] = array[high];
    array[high] = temp;
    low++;
    high--;
  }
  
  return array;
}


// Other Appraoch
for (let i = array.length - 1; i > 0 ; i--) {
 (O (n))
}

/* 
// array = [1,2,3,4, 5]

// array.length
// array.push , O (1) // constant time 

// array.unshift()

 [1,2,3,4]
    
 [5,1,2,3,4]  // O(n)
    
    // for loop */
    
    
    
/* Write a function that returns a new array/same array after removing Duplicates from an array */
    
 function removeDuplicates(array) {
 		let object = {};
    let newArray = [];
    for (let i = 0 ; i < array.length ; i++ ) {
    	if (object[array[i]]) {
      		object[array[i]] += 1;
          
          // object = {1 : 2, 2 : 1}
          // array[i] = 1
          // object[1] ?
          // 
      } else {
      	object[array[i]] = 1;
        // object[2] = 1
      }
    }
    
    for (let item in object) {
  		newArray.push(+item);
    }
    
	return newArray;
}
 
// indexof and filter method
    
    
// ****** LAB 2 *******

// Write a function that returns the duplicates with the array?


// Approach 1
function giveDuplicates(array) {
	return array.concat(array);
}

// Approach 2
function giveDuplicates(array) {
	return [...array,...array]
}

// Write your own function to replace, Object.keys,

function getKeys(object) {
	// Object.keys 
  let array = [];
  for (let key in object) {
  	array.push(key);
  }
  return array;
}

// Write your own function to replace, Object.values
    
function getValues(object) {
	// Object.keys 
  let array = [];
  for (let key in object) {
  	array.push(object[key]);
  }
  return array;
}


/* Given an array of integers and an integer target, return numbers
such that they add up to target. (Challenging)
 */
 
 
 // BRUTE FORCE APPROACH
 
 function twoSumBruteForce(array, target) {
 	for (let i = 0 ; i < array.length ; i ++) {
  		for (let j = i + 1; j <= array.length - 1; j++) {
      		if (array[i] + array[j] === target) {
          		return [array[i], array[j]];
          }
      }
  }
  return [];
 } 
 
 // Best approach
 
var twoSum = function(array, target) {
    const object = {};

    array.forEach((item, index) => {
        object[item] = index
    });
    
    console.log(object);

    for (let i = 0; i < array.length; i++) {
        const difference = target - array[i];

        // 17 - 2 = 15
    
        if (object[difference] !== undefined && object[difference] !== i) {
            return [array[i], difference]
        }
    } 
}
    
    