// -------------------------------------------
//  Data Types in JavaScript
// -------------------------------------------

/* 
 Primitive Types (7 total):
    - String
    - Number
    - Boolean
    - null
    - undefined
    - Symbol
    - BigInt

Note: Primitive data types are stored in **stack memory**.
*/

//  Examples of Primitive Types
const score = 100;                  // Number
const scoreValue = 100.3;           // Number (float)
const outsideTemp = null;           // null → object type (quirk in JS)
let userEmail;                      // undefined

// Symbols → unique even if they contain same description
const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId);      // false

// BigInt → for very large integers
const bigNumber = 4367245371983651639n;
console.log(typeof bigNumber);      // bigint

// -------------------------------------------
//  Reference Types (Non-Primitive):
//      - Array
//      - Object
//      - Function
//
// Note: These are stored in **heap memory** and reference-based.
// JavaScript is dynamically typed.
// -------------------------------------------

//  Examples of Reference Types
const heros = ["shaktiman", "naagraj", "doga"]; // Array

let myObj = {
    name: "Arindam",
    age: 22
}; // Object

const myFun = function () {
    console.log("Hello World..");
}; // Function

console.log(typeof myFun); // function (technically "object function")

// -------------------------------------------
//  Stack vs Heap Memory in JavaScript
// -------------------------------------------

//  Stack Memory (Primitive):
let cllg_name = "BWU";
let anotherName = cllg_name;
anotherName = "BHS";

console.log(cllg_name);   // "BWU"
console.log(anotherName); // "BHS"
//  Primitive types are copied by value

//  Heap Memory (Reference):
let userOne = {
    email: "user@google.com",
    upi: "user@bl"
};

let userTwo = userOne; // Both point to the same object in heap
userTwo.email = "Arindamdas";

console.log(userOne.email); // "Arindamdas"
console.log(userTwo.email); // "Arindamdas"
//  Non-primitive types are copied by reference
