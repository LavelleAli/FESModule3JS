// Promises:
console.log("Promises:");
// A Promise is used to handle asynchronous operations in JavaScript.
// A Promise is a placeholder for a value that will be available in the future.
// EXAMPLE:

// // fetch ("https://jsonplaceholder.typicode.com/users/1")
const emailRef = document.querySelector(".email");
const statusRef = document.querySelector(".status");
// // In order to get the data from a promise, there are two methods we can use:

// // 1. ".then"
// fetch("https://jsonplaceholder.typicode.com/users/1")
//   .then((response) => {
//     // console.log(response.json());
//     // The ".json()" is used to convert something from the backend into something that the frontend can understand.
//     return response.json();
//   })
//   .then((data) => {
//       emailRef.innerHTML = data.email;
//       console.log(data);
//   });
//  Note: In order to make the backend compatible with the frontend, use the .json() method
//  to convert the response into a JSON object.

// 2. "Async/Await" !!**!!

//  In order to use async/await, we need to make the function async
// to make an async function, we use the "async" keyword before the function keyword.
// We then use the "await" keyword before the promise we want to wait for.

async function main() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const data = await response.json();
  console.log(data);
  emailRef.innerHTML = data.email;
}
main();

// How to create a promise manually: see FES Module 3 "Promises" video; time-stamped: 19:31

// 1. Create a function called "getVideo"
// 2. Accept a parameter called "subscriptionStatus"
// 3. Return a new Promise inside of the function that:
//    -if "VIP" resolve("show video")
//    -if "FREE" resolve("show trailer")
//    - otherwise reject("no video")
// 4. console.log the result of getVideo() in main()

function getSubcriptionStatus() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("VIP");
    }, 2000);
  });
}

function getVideo(subscriptionStatus) {
  return new Promise((resolve, reject) => {
    if (subscriptionStatus === "VIP") {
      resolve("show video");
    } else if (subscriptionStatus === "FREE") {
      resolve("show trailer");
    } else {
      reject("no video");
    }
  });
}

async function main1() {
  const status = await getSubcriptionStatus();
  // statusRef.innerHTML = status;
  console.log(await getVideo(status));
}

main1();

// Chanllenge Questions:

// Q1: Create a function that takes two numbers as functions and returns their sum.
console.log("Q1: Sum of Numbers");

function sumof(num1, num2) {
  return num1 + num2;
}
console.log(sumof(3, 2));
console.log(sumof(-3, -6));
console.log(sumof(7, 3));

// Q2:Create a function that converts hours into seconds.
console.log("Q2:timeConversion");

function timeConversion(hour) {
  return hour * 60 * 60;
}

console.log(timeConversion(2));
console.log(timeConversion(10));
console.log(timeConversion(24));

// Q3: Calculate the Perimeter of a rectangle.
console.log("Q3: Perimeter of Rectangle");

function rectanglePerimeter(length, width) {
  return (length + width) * 2;
}

console.log(rectanglePerimeter(6, 7));
console.log(rectanglePerimeter(20, 10));
console.log(rectanglePerimeter(2, 9));

// Q4: Calculate the Area of a triangle.
// Note: Area of Triangle = 0.5 * base * height
console.log("Q4: Area of Triangle");

function triangleArea(base, height) {
  return 0.5 * base * height;
}

console.log(triangleArea(3, 2));
console.log(triangleArea(10, 10));
console.log(triangleArea(20, 20));

// Q5: Extend a String
// Create a function that adds "Frontend" to the end of a string.
// Note: adding a "+" in front of a parameter will convert it to a number.
console.log("Q5: Extend a String");

function extendString(str) {
  return str + " Frontend";
}

console.log(extendString("Apple"));
console.log(extendString("Banana"));
console.log(extendString("Orange"));

// Q6: Greater than 100
console.log("Q6: Greater than 100");
// Given two numbers, return true if the sum of both numbers is greater than 100. Otherwise return false.

function greaterThan100(num1, num2) {
  return num1 + num2 >= 100;
}

console.log(greaterThan100(20, 10));
console.log(greaterThan100(50, 60));
console.log(greaterThan100(100, -50));

// Q7: Less than or Equal to Zero
console.log("Q7: Less than or Equal to Zero");
// Given a number, return true if it is less than or equal to zero. Otherwise, return false.

function lessThanOrEqualToZero(num) {
  return num <= 0;
}

console.log(lessThanOrEqualToZero(3));
console.log(lessThanOrEqualToZero(0));
console.log(lessThanOrEqualToZero(-2));

// Q8: Opposite Boolean
console.log("Q8: Opposite Boolean");
// Given a boolean value, return the opposite of its value.
// Note: An "!" in front of a boolean value will return the opposite value.

function oppositeBoolean(bool) {
  return !bool;
}

console.log(oppositeBoolean(true));
console.log(oppositeBoolean(false));

// Q9: Is Not the Number 0
console.log("Q9: Is Not the Number 0");
// Given a number, return true if the number is not equal to zero. Otherwise, return false.

function notZero(val) {
  return val !== 0;
}
console.log(notZero(5));
console.log(notZero(0));
console.log(notZero(null));

// Q10: Calculate the Remainder
console.log("Q10: Calculate the Remainder");
// Given two numbers, return the remainder of the first number divided by the second number.

function calculateRemainder(num1, num2) {
  return num1 % num2;
}

console.log(calculateRemainder(4, 2));
console.log(calculateRemainder(7, 8));
console.log(calculateRemainder(9, 8));

// Q11: Is the number Odd
console.log("Q11: Is the number Odd");
// Given a number, return true if the number is odd. Otherwise, return false.
// Note: An odd number is a number that is not divisible by 2.
// You can use the modulus operator (%) to determine if a number is odd.

function isOdd(num) {
  return num % 2 !== 0;
}

console.log(isOdd(1));
console.log(isOdd(2));
console.log(isOdd(3));

// Q12: If a number is even, return 1, otherwise return -1.
// Note: Use a Ternary Operator (x ? y : z) and the Modulus Operator (%).
console.log("Q12: Even or Odd");

function evenOdd(num) {
  return num % 2 === 0 ? 1 : -1;
}

console.log(evenOdd(1));
console.log(evenOdd(2));
console.log(evenOdd(5));

// Q13: Check if a user is logged in AND subscribed.
console.log("Q13: Logged in and Subscribed");
// Given two boolean values, return true if both values are true. Otherwise, return false.

function isLoggedInAndSubscribed(loggedIn, subscribed) {
  return loggedIn === "Logged_In" && subscribed === "subscribed" ? true : false;
}

console.log(isLoggedInAndSubscribed("Logged_In", "subscribed"));
console.log(isLoggedInAndSubscribed("Logged_In", "Unsubscribed"));
console.log(isLoggedInAndSubscribed("Logged_Out", "subscribed"));

// Medium JavaScript Challenges
console.log("Medium JavaScript Challenges:");

// Q1: Given two values return the first one if it is falsy otherwise return the second one.

function filterFalsy(val1, val2) {
  return !val1 ? val1 : val2;
}

console.log(filterFalsy(0, 500));
console.log(filterFalsy(false, 100));
console.log(filterFalsy(true, "Dog"));

// Q2: Return the length of any given array.
console.log("Q2: Return the length of any given array:");

function arrayLength(arr) {
  return arr.length;
}

console.log(arrayLength([1, 2, 3]));
console.log(arrayLength([5, 0, -4, 1]));
console.log(arrayLength([]));

// Q3: Return the last element of any given array.
console.log("Q3: Return the last element of any given array:");

function lastArrayElement(lastElem) {
  return lastElem[lastElem.length - 1];
}

console.log(lastArrayElement([1, 2, 3, 4]));

// Q4: Find the sum of an array.
console.log("Q4: Find the sum of an array:");

// This is how to add the elements of an array together.
let sum = 0;

function sumArray(arr) {
  for (let i = 0; i < arr.length; ++i) {
    sum = sum + arr[i];
  }
  return sum;
}

console.log(sumArray([2, 2, 2]));

// Q5: Given a number, Add up all the numbers from 1 to the number that is given.
console.log("Q5: Add up all the numbers from 1 to the number that is given:");

function addUpTo(num) {
  let total = 0;
  for (let i = 1; i <= num; ++i) {
    total = total + i;
  }
  return total;
}

console.log(addUpTo(3));
console.log(addUpTo(4));
console.log(addUpTo(600));

// Q6: Calculate the time:
console.log("Calculate the time:");
// Given a number in seconds, return this number in mm:ss format.
// To convert a number to a string place ".toString().length" after the number/variable

function calcTime(seconds) {
  let timerMin = Math.floor(seconds / 60);
  let timerSeconds = seconds % 60;
  if (timerMin.toString().length === 1) {
    timerMin = "0" + timerMin;
  }
  return timerMin + ":" + timerSeconds;
}

console.log(calcTime(66));
console.log(calcTime(50));
console.log(calcTime(300));
console.log(calcTime(5000));

// Q7: Find the largest number
console.log("Find the largest number");
// Given an array of numbers, return the largest number of that array.

function largestNum(arrNum) {
  let max = arrNum[0];
  for (let i = 0; i <= arrNum.length; ++i) {
    if (arrNum[i] > max) {
      max = arrNum[i];
    }
  }
  return max;
}

console.log(largestNum([5, 100, 0]));
console.log(largestNum([12, 10, -20]));
console.log(largestNum([-300, -100, -200]));

// Q8: Reverse a String
console.log("Reverse a String");
// Given a String, return the reverse String:
// This is how to reverse a string using the "incrementing loop" method.
// Note: The order of the syntax within the "for loop" determines how it gets reversed.

let Rev = "";

function strRev(string) {
  for (let i = 0; i < string.length; ++i) {
    Rev = string[i] + Rev;
  }
  return Rev;
}
console.log(strRev("abc"));
//
//
// The array reverse method:
// In order to turn a string into an array you must use ".split" followed by an empty string.
// Here is the syntax of how to reverse a string using the reverse array method
//  first convert the string to a array
// EXAMPLE: "abc".split("")
// Then add the ".reverse()" followed by the ".join('')"
// Note: the ".join('')" is followed by another empty string
// So the full syntax for this method is as follows:
// "abc".split('').reverse().join('')

function revStrArrayMethod(str) {
  return str.split("").reverse().join("");
}

console.log(revStrArrayMethod("Lavelle"));

// Q9: Turn every element in an array into 0:
console.log("Q9: Turn every element in an array into 0");

// Solution 1:
// My solution:
function convertToZero(arr) {
  for (let i = 0; i <= arr.length; ++i) {
    let conv = arr;
    let zeroCnvrt = conv.map((elem) => {
      return elem * 0;
    });
    return zeroCnvrt;
  }
}
console.log(convertToZero([1, 2, 3, 4, 5, 6]));

// Solution 2:
function zeroConversion(arr) {
  for (let i = 0; i < arr.length; ++i) {
    arr[i] = 0;
  }
  return arr;
}
console.log(zeroConversion([1, 2, 3, 4, 5, 6]));

// Solution 3:
// The ".fill()" method

function convZero(arr) {
  return new Array(arrayLength.length).fill(0);
}
console.log(convZero([1, 2, 3, 4, 5, 6, , 7, 8, 9, 10]));

// The ".map()" method
// Note: If you are going to use an "object" "{}" in the .map() method you need to put a "return"  in the object
// EXAMPLE:
// allZero.map(elem => { return somting})

function mapZero(allZero) {
  return allZero.map((elem) => elem * 0);
}

console.log(mapZero([1, 2, 3, 4, 5]));

// Q10: Filter out all the apples
console.log("Q10: Fitlter out all the apples");

function noApples(para1) {
  let onlyApples = para1.filter((para1) => para1 !== "Apples");
  return onlyApples;
}
console.log(noApples(["Banana", "Apples", "Orange", "Apples"]));
console.log(noApples(["Apples", "Apples", "Orange", "Strawberries"]));
console.log(noApples(["Watermelon", "Apples", "Candy", "Apples"]));

// Q11: Filter out all the falsy values.
console.log("Filter out all the falsy values");

function noFalsy(para1) {
  let truthy = para1.filter((para1) => !!para1 === true);
  return truthy;
}

console.log(noFalsy(["", [], 0, null, undefined, "0"]));

// Q12: Truthy to true, Falsy to false
console.log("Q12: Truthy to true, Falsy to false")

function convertToBoolean(para1) {
    return para1.map(elem => !!elem)
}
console.log(convertToBoolean([500, 0,"Lavelle", "", []]))

// Advanced Chanllenges:

// Q1: Show rating
// Given a rating, display a (8) for each full reting and a full-stop (.) for each half rating.
// Note: The "Math.floor" rounds the number down when an integer has an decimal.
// Note: Try writing in english what you want the code to do then start writing the actual code that will make that happen.
// this is to help anotate, organize and visualize what is happening in the code.
// Note: The "+=" is just a shorthand of saying "variable = variable + ("") "
console.log("Show rating")

function showRating(rating) {
    let ratings = ""
    for (i = 0 ; i < Math.floor(rating) ; ++i) {
        ratings += "*";
        if ( i !== Math.floor(rating) -1) {
            ratings += " ";
        }
    }
    if (!Number.isInteger(rating)) {
        return ratings += " ."
    }
}

console.log(showRating(4.5))

//  How to answer this problem: Q1:
// Initialise an empty string
// loop through the rounded down rating
//  Add a star for every iteratino
// if its not the last iteration add a space
// if the number is not an integer add a full stop
// return


// Q2: Sort by lowest to highest price.
//  Given an array of numbers, return the prices sorted by low to high.
// Note: The ".sort()" method automatically sorts alphabetically; if you want to sort numerically. 
console.log("Q2: Sort by lowest to highest")

function sortLowToHigh(numbers) {
// The first method of sorting numbers:
// Note: to sort high to low you just reverse the "a - b" to "b - a"
     return numbers.sort((a, b) => a - b)

    //  The Second method of sorting numbers:
    // Note: using the "brackets "{}" allows you to add other instructions.

    // return numbers.sort((a , b) => {
    //     return a - b
    // })
    
}
console.log(sortLowToHigh([1, 5, 0, 10, 10000005]));



// Q3: Sort by highest to lowest price.
// Given an array of objects, return the prices sorted by high to low.
console.log("Q3: Sort by highest to lowest price")

// Note: In order to isolate the "price" section of the object you put ".price" after the name of the compared "variables"
function priceOrder(price) {
    return price.sort((a, b) => {
        return b.price - a.price /* <---- This is the  variables as mentioned in the  "Note:"*/
    })
}

console.log(priceOrder([
    {id: 1, price: 50},
    {id: 2, price: 30},
    {id: 3, price: 60},
    {id: 4, price: 10}
]))

// Q4: Promises:
// On Youtube, watch:
// "The Async Await Episode I Promised" - Fireship
// "Async Await JavaScript ES7" - Techsith (1.5x Speed)
// "Async JS Crash Course - Callbacks, Promises, Async Await" -Travsery Media (1.5x Speed)




// Q5: Find all the post by a single user.
console.log("Q5: Find all the post by a single user:")
// Call this API "https://jsonplaceholder.typicode.com/posts" and return all the ppost by any given user Id.
// First: Get the API
// Second: Translate the API
// Thrid: Filter the results
// Fourth: console.log the function

async function postByUser (userId) {
    const promise = await fetch ("https://jsonplaceholder.typicode.com/posts")
    const result = (await promise.json())
    const posts = result.filter(element => element.userId === userId)
    console.log(posts)
}
postByUser(4)


// Q6: First 6 incomplete Todos
console.log("Q6: First 6 incomplete Todos")
// Call this API "https://jsonplaceholder.typicode.com/todos" and return the first 6 incomplete todo's from the result.
// Note: it is the same process as 'Q5', only difference is that I add a "for loop" to only show the first 6 on the results.

async function firstSixIncompleteTodos (todos) {
    const promise = await fetch ("https://jsonplaceholder.typicode.com/todos")
    const result = await promise.json()
    const resultFilter = result.filter(elem => !elem.completed).slice(0, 6)
    // for (let i = 0 ; i <= 5; ++i) {
       console.log(resultFilter)
    // }
}
firstSixIncompleteTodos()
