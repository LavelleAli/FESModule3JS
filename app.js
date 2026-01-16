// Data Types:
// 1. String: A sequence of characters between "" marks e.g., "Hello, World!" 
//  Example:
console.log("Hello World!!" + "My name is Lavelle Ali" + " and I am 35 years old")

//  Index of Strings Start from 0
// Example:
let greeting = "Hello, World! " + "This is an example of string indexing.";
console.log (greeting [0])
console.log (greeting [7])
console.log (greeting [50])

// To find the length of a string use .length
// Example:
let message = "this is how you find the length of a string";
console.log (message.length)
// The output will be 43 because there are 43 characters in the string including spaces and punctuation.
// You can access the last character of a string using the length property
// Example:
let lastChar = message [message.length - 1];
console.log (lastChar)

// 2. Number: Numeric data type e.g., 42, 3.14
// Example:
let age = 30;
let pi = 3.14;
let negativeNum = -5;
console.log (age + pi + negativeNum)




// Variables and Data Types
// Strings (str), Numbers (num), Booleans (bool)

// Strings
let isRaining = true;
let temperature = 20;
let planet = "Earth";

temperature = temperature + 2;

console.log (temperature)


// Converting Temperature
// Celsius to Fahrenheit formula: (C × 1.8) + 32 = F
let celsius = 10;
let fahrenheit = (celsius * 1.8 + 32);
console.log (fahrenheit)

//  Equality Operators
// Loose Equality (==) - checks for value only
// Strict Equality (===) - checks for value and type
// Not Equal (!=) - checks for value only
// Strict Not Equal (!==) - checks for value and type

let bool = "1" === 1
console.log (bool)
console.log ("Conditionals:")

// Conditional Statements

// If-Else Statement:
// Example:
let subscribed = true;

if (subscribed === true)  {
    console.log("Show the video")
}
else if (loggedIn === true){
    console.log ("tell user to upgrade their subscription")
}
else {
     console.log("Tell User to log into account")
}


let cash = 50
let price = 40
let change = cash - price

if (cash > price) {
    console.log (`You paid extra - here's ${change} dollars change`)
}
else if (cash === price) {
    console.log ("You paid the exact amount, thank you! Have a nice day!")
}
else {
    console.log (`You don't have enough cash for this item. You still owe ${change * -1} dollars`)
}


//  Comparison Operators

// Equal Values ==
// Equal Values and Types ===
// Not Equal !=
// Not Equal Value and Equal Type !==
// Greater Than >
// Less Than <
// Greater Than or Equal To >=
// Less Than or Equal To <=


// Logical Operators
// "&&" Checks if the left AND right side of the  comparison is true

// true && true = true
// true && false = false
// false && true = false
// false && false =false

// Can be used within "if/else-if" statements;
// Example:

let cash2 = 30
let price2 = 40
let isStoreOpen = false
let difference = cash2 -price2 


if ( cash2 >= price2 && isStoreOpen === true) {
    console.log (`print the receipt`)
}
else if (cash2 >= price2 && isStoreOpen === false) {
    console.log (`Store is Closed`)
}
else if (cash2 <= price2 && isStoreOpen === true) {
    console.log (`You do not have enough money for this item, you still owe ${difference * -1} dollars.`)
}
else if (cash2 <= price2 && isStoreOpen === false) {
    console.log (`Store is closed`)
}


//  "||" is "or" opereator and checks if the left OR right side of the comparison if true

// true || true = true
// true || false = true
// false || true = true
// false || false = false

// Example:

let cash3 = 30
let price3 = 40

if (cash3 >= price3 || isStoreOpen === true) {
    console.log (`print the receipt`)
}

// In order to state that the variable false you can put an "!" in front of the variable
//  Example:

else if (cash3 <= price3 || !isStoreOpen) { 
    console.log (`store is closed`)
}

// Falsy Values
// A falsy value is considered as "false" when converted to a boolean

// undefined
// null
// NaN (not a number)
// 0
// ""
// false

// Truthy Values
// A truthy value is considered as "True" when converted to a boolean

// 10
// 3.14

// All Strings
// "Front End Simplified"
// "False"
// "0"

// []
// {}

// Example:
let cash4 = 50
let price4 = 40
let isStoreOpen2 = false

if (3.14) {
    console.log ( `turhty value`)
}
else {
    console.log (`falsy statement`)
}

//  To check if a value is "truthy" or "falsy" type "!!" in the console along with the value and it will return true or false.
// Can be used in if/else statements.
//  Example:
let val = "0"

if (val) {
    console.log (!!val)
}
else {
    console.log (!!val)
}

console.log ( `Ternary Operators`)

// Ternary Operators
// A shortcut for an if else condition
// isObese ? "unhealthy" : "Healthy"
// First is the condition followed by the question mark,
// If the condition is true then it will excecute the second line otherwise it will excecute the Third
// Example:

let hot = true
let subscribe = false
let loggeedIn2= true

hot ? console.log (`weather is hot outside`) : console.log (`weather is cold`)

let str = subscribe && loggeedIn2 ? `Play Video` : `Hide the video`
console.log (str)

// You can use a "Ternary Operator" when the line of code is only one line of code


// Practice

let cash5 = 50
let price5 = 40
let isStoreOpen3 = true

// 'give receipt' : 'do not give receipt'

let buy = cash5 >= price5 && isStoreOpen3 ? 'give receipt' : 'do not give receipt'
console.log (buy)

// Loops
// Loops repeat the same code over and over again unitl given a condition to stop
console.log ("Loops:")
let count = 1;

console.log (count);
count = count + 1;
console.log (count)

// DRY = Dont Repeat yourself

//  Three types of loops:
// 1. For Loop
// 2. While Loop
// 3.Do While loop

console.log ('This is a while loop')
let Lx1 = 1;

while (Lx1 <= 10) {
    console.log (Lx1)
    Lx1 = Lx1 + 1
}


// For Loops:
console.log ("For Loops")

// for (let i = 0; i <= 10; i+= 3) {
//     console.log (i)

// }

//  Notes:
//  let i = 0 sets the index start.
// i<= 10 is the amount of times you want the loop to occur.
// i + 1; i++; ++i; or i+= 2 determins the increment that the numbers increase by.
// If you want to subtract you jus use the "-" sign instead of the "+" sign.

// Exercise:
console.log ("Exercise:")

// Write a for-loop that. loops through 1 to 20
// If the number is divisible by 3, print "Frontend"
// If the number is divisible by 5, print "Simplified"
// If the number is divisible by 3 and 5, print " Frontend Simpified"
// If the number is NOT divisiblie by either 3 or 5, print number
// (This Challenge is asked in interviews)

// Solution:
console.log ("Solution")
for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log (`${i} -> Frontend Simplified`)
    }
    else if (i % 3 === 0) {
        console.log (`${i} -> Frontend`)
    }
    else if (i % 5 === 0) {
        console.log (`${i} -> Simplified`)
    }
    else {
        console.log (`${i} -> ${i}`)
    }
}

// Exercise 2 :
console.log ("Exercise 2:")

// Print out every character from the string:
//  "Frontend Simplified"

// Solution
console.log ("Solution")

const strg = "Frontend Simplified"

// If you want to loop over every single letter in the string
// all you want to do is loop till "i" is less than the str.length

for (let i = 0; i < strg.length; i++) {
    console.log (strg[i])
}

// Functions:
console.log ("Functions")
//  A Function is a block of code designed to perform a particular task
// DRY - Dont Repeat Yourself

// To create a function use the keyword "function", then type the name of the function followed by "()" for the parameters that you 
// may use, and finally "{}"

// This is a "Function Definition"
function welcomePersonToFES(firstName, lastName) {
    console.log (`Welcome to FES, ${firstName} ${lastName}`)
}

// This is how you call a function
welcomePersonToFES("Lavelle" , "Ali");
welcomePersonToFES("Tamale", "Anderson");
welcomePersonToFES("Tanesha", "Hodge");

// Within a function definition the "return keyword" exits the code any code that is writtin afterwards will not be used.
function fn() {
    return 5
    console.log ("my function")
}

console.log(fn())
// Example 2:
function sumOfTwoNumbers (num1, num2) {
    return num1 / num2
}

console.log(sumOfTwoNumbers(20, 10))

// Create a function that converts Celsius to Fahrenheit
// Celsius to Fahrenheit formula:
//  F = C * 1.8 + 32

// This is the first way to define a function:
 function tempConvert (temp1celsius) {
     return temp1celsius * 1.8 + 32
 }


// The second way of defineing a function is by making an "arrow"?... 
// This is the syntax of writting an "arrow":
// () => {} is the actual sytax of the "arrow"

const tempConvert = (celsius) => {
    return celsius * 1.8 + 32
}

console.log(tempConvert(0))

