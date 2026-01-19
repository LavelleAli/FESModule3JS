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

// This is the first way to define a function:9
 function tempConvert (temp1celsius) {
     return temp1celsius * 1.8 + 32
 }


// The second way of defining a function is by making an "arrow"?... 
// This is the syntax of writting an "arrow":
// () => {} is the actual sytax of the "arrow"

const tempConvert1 = (celsius) => {
    return celsius * 1.8 + 32
}

console.log(tempConvert1(0))


// Arrays
console.log ("Arrays")
// Arrays are a Data structure that can hold multiple data values in one variable
// Instead of having to use mutiple variables we can use arrays to store in one variable.
// Example:
let item1 = 20
let item2 = 30
let item3 = 40
let item4 = 50
let item5 = 100
// To make an Array you need to put the square brackets 
// Example:
let arr = [20, 30 ,40 , 50 ,100,]
// In order to access items in the array you type the name of the array followed by square brackets;
// array elements are numbered starting from 0.

// First element of the array:
console.log (arr[0])

// Last element of the array:
console.log (arr[arr.length -1])
// you can access the last element of an array by using .length followed by -1 inside of the square brackets.

// To add elements in an array when you use the .push method
// Example:

// Add element onto end of array.
arr.push(200)

console.log(arr);

// The Array .filter Method
// First you have to create a "Callback Function" ; The syntax is () => {}
// Example:

// let newArr = arr.filter((element) => {
//     console.log ()
//     if (element < 50) {
//         return true
//     }
// })

// Note: The .filter returns a new array
// If we want to filter certain elements we can use the "if else" statements as in the above example.

// This is the shorter way to do the same thing:
// Example:

// let newArr = arr.filter (element => {
//     return element < 50
// })

// Note: When using multiple variables it is neccessary to input the ")" after the "element" but when only using a singular
// variable it is not neccessary.
    
    // This is an even shorter way to do the same thing:
// Example:
let newArr = arr.filter (element => element < 50 )

console.log (newArr)

// Exercise:
// Filter out all the "Fail" elements in an array
let arr1 = ["A+", "A", "FAIL"]
let newArr1 = arr1.filter (arr1 => arr1 != "FAIL")
console.log (newArr1)
let arr2 = ["FAIL", "FAIL", "B"]
let newArr2 = arr2.filter (arr2 => arr2 != "FAIL")
console.log (newArr2)
let arr3 = ["FAIL"]
let newArr3 = arr3.filter(arr3 => arr3 != "FAIL")
console.log (newArr3)

// You can also loop over every element in the array:
// Example:

let grades = ["A+", "A", "FAIL"]

for (let i = 0; i < grades.length; ++i) {
    console.log (grades[i])
}



// Exercise 2:
// Filter out all the "FAIL" elements in an array
// without using the Array.filter method

let grades1 = ["A+", "A", "FAIL"]
let goodGrades = []

for (let h = 0; h < grades1.length; ++h ) {
   if (grades1[h] != "FAIL") {
    goodGrades.push(grades1[h])
   }
    console.log(grades1[h])
}
console.log (goodGrades)
// 
let grades2 = ["FAIL", "FAIL", "B"]
let goodGrades2 = []

for (let j = 0; j < grades2.length; ++j) {
    if (grades2[j] != "FAIL") {
        goodGrades2.push(grades2[j])
    }
    console.log (grades2[j])
}
console.log(goodGrades2)
// 
let grades3 = ["FAIL"]
let goodGrades3 = []

for (let k = 0; k < grades3.length; ++k) {
    if (grades3[k] != "FAIL") {
        goodGrades3.push(grades3[k])
    }
    console.log(grades3[k])
    }
 console.log(goodGrades3)
 

//  The .map Method
console.log("The .map Method")

let jrr = [1,4,9,16]
// This is the long method:
// 
// let newJrr = jrr.map((element) => {
//     console.log(element)
//     return undefined;
// })
// console.log(newJrr)
// 
// This is the short method:
let newJrr = jrr.map(element => undefined)

console.log(newJrr)

// Exercise 1:
// This is the long way:
let dllr = [1,5,10,3]
let cents = dllr.map((element) => {
    return element * 100

})
console.log(cents)

// This is the short way:
let dllr2 = [0,10,20]
let cents2 = dllr2.map(conversion => conversion * 100)

console.log (cents2)

// Exercise 2:
// Do the same thing without using the .map method
console.log("This is without the .map method")

let dllr3 = [1,5,10,3]
let cents3 = []
for (let b = 0; b < dllr3.length; ++b) {
    // console.log(dllr3[b] * 100)
  cents3.push(dllr3[b] * 100)
}
console.log(cents3)
// 
let dllr4 = [ 0,10,20]
let cents4 = []

for (let n = 0; n < dllr4.length; ++n){
    // console.log(dllr4[n] * 100)
    cents4.push(dllr4[n] * 100)
}
console.log(cents4)

// Objects
console.log ("Objects:")
// Objects are used to store multiple properties in one variable
let userFirstName = "Lavelle"
let userLastName = "Ali"
let userDiscordId = "Lavelle Ali#001"
let userSubscriptionStatus = "VIP"

// To define a Object you will use "{}".
// To give the Object properties all you have to do is write the property name followed by a ":" then the value.
//  In order to store more than one variable you need to seperate them by a ",".
// Example:

let user = {
    username : "Lavelle" ,
    email : "123abc@jmail.com",
    subscriptionStatus: "VIP",
    discordId : "Lavelle Ali #0001",
    lessonsCompleted : [0, 1]
}

// If you want to access a property within an object all you have to do is write the object name followed by a "." .
// Example:

console.log(user.username);
// If you wanted to get the individual index of a property within the object you would use 
// square brackets after the property name. Note: indexies start from 0.

console.log (user.username[0])
console.log (user.subscriptionStatus)
console.log (user.lessonsCompleted)
console.log(user.lessonsCompleted.map(elem => elem * 2))

// Arrays can also store objects.
// Example:

let users = [ 
    {username : "Lavelle" ,
    email : "Lavelle@jmail.com",
    password : "test123",
    subscriptionStatus: "VIP",
    discordId : "Lavelle Ali #0001",
    lessonsCompleted : [0, 1]
},
{username : "Bilal" ,
    email : "bilal@jmail.com",
    password : "bilal123",
    subscriptionStatus: "VIP",
    discordId : "bilal #0001",
    lessonsCompleted : [0, 1, 2, 3]
},
{username : "Zen" ,
    email : "zen@jmail.com",
    password : "zen123",
    subscriptionStatus: "VIP",
    discordId : "Zen#0001",
    lessonsCompleted : [0, 1, 2, 3]
}
]
// To access the objects within an Array "[}" after the array name
// Example:
console.log(users[0])
// To access properties within that object is "." followed by the property name.
// Example:
console.log (users[0].lessonsCompleted.map(elem => elem * 2))
// 

function login (email, password ) {
    for (let i = 0; i < users.length; ++i) {
        if (users[i].email === email) {
            console.log (users[i]);
            if (users[i].password === password) {
                 console.log ("Log the user in - the details are correct")
            }
            else { 
                console.log ("password is incorrect - try again")
            }
            return;
        }
    }
    console.log("could not find an email that matches");
}
login("thisdoesnotexist@jmail.com", "wrong password");

// Exercise 1:

// Create a register function that accepts:
// - username
// - email
// - password
// - subscriptionStatus
// - discordId
// - lessonsCompleted
// 
// Inside your register function:
//  1. Creae a user object
//  2. Push this user object onto the "users" array

let users1 = [{}]

function register (newUser) {
    users1.push(newUser)
}


register ({
    username : "Lavelle",
    email : "Lavelle@gmail.com",
    password : "test123", 
    subscriptionStaus1 : "VIP", 
    discordId : "Lavelle#001",
    lessonsCompleted1 : [0,1,2,3]
});

console.log(users1)

// This was difficult... will have to review.


// Document Object Model (DOM):
console.log("Document Object Model (DOM):")
// The DOM allows you to access and change the stylingh and content of elements on your website.

// The first way of accessing an element:
document.querySelector("#title");
// The property that allows us to access an element is called "querySelector"; it is a method that accepts an argument.
// In order to access the element in your "html" is similar to CSS, as shown in the above example "#title".
// 
// *****
 console.log(document.querySelector("#title"));
//  The result from this "console.log" is "null" and that is because within the html the script "app.js"
// is loading before the html.
// There are 2 ways of making the html load before the js.
// One way is to use a "defer".***
// The second way is to put your script tag all the way to the end of your body tag.

// The second way of accessing an element:
// Note: this only works if the element has an "id".
// Example:
console.log(document.getElementById('title'))
// It is better practice to use the second method if you have an element with an Id.
// If the element does not have an "Id" you use the querySelector.
// Note: the querySelector also works with "class" but if you want to access a "class" you will need
// to use a ".xxxx" instead of the "#xxxx".

// Note: With the querySelector you can also access the element itself.
// Example:
console.log(document.querySelector('h1'))

// We can also change the inner HTML.
// Example:
document.querySelector("#title").innerHTML = 'Frontend Simplified'
// If you want to add to an element you use the "+=" operators 
// Example:
document.querySelector('#title').innerHTML += " Lavelle Ali"
// Note: This adds to the element in the order that it is written in the js.

// You can also change CSS by using the ".style" in the DOM followed by the property you want to change:
// Example:
// document.querySelector('#title').style.color = "blue"
// You can also change the font size.
document.querySelector('#title').style.fontSize = '20px'

function changeTitleToRed () {
document.querySelector('#title').style.color = 'red';
console.log('clicked')
}
// Note: along with the ".innerHTML" and ".style" methods you can also use the ".classlist" method.
function toggleDarkMode() {
    document.querySelector('body').classList.toggle("dark-theme")
}
// Another method that we can use is the ".toggle" method; This gives you the option the switch between themes