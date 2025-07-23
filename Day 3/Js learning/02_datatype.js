"use strict"; // Treat all JS code as newer version

// alert(3 + 3); // Will work in browser only, not in Node.js

// Avoid writing code like this 👇
// console.log(3 + 3) console.log("Arindam") 
// This breaks readability and may cause syntax errors

// Variable declarations
let name = "Arindam";
let num = 265;

//-------------------------------
// 📚 Data Types in JavaScript:
//-------------------------------
// number      => 2^53 range
// bigint
// string      => "", ''
// boolean     => true / false
// null        => standalone value
// undefined   => variable declared but not assigned
// symbol      => for uniqueness
// object      => non-primitive data type

// Type checking
console.log(typeof num);         // number
console.log(typeof null);        // object (quirky JS behavior)
console.log(typeof undefined);   // undefined

//-------------------------------------
// Type Conversion Examples
//-------------------------------------

let score = "33"; // string
let valueInNumber = Number(score);
console.log(typeof valueInNumber); // number

// Invalid conversion
let score1 = "33ccv";
let valueInNumber1 = Number(score1);
console.log(valueInNumber1); // NaN (Not a Number)

// Null to number conversion
let score2 = null;
let valueInNumber2 = Number(score2);
console.log(valueInNumber2); // 0

// Boolean conversions
// let isLogged = 1;          // true
// let isLogged = "";         // false
// let isLogged = "Arindam";  // true

// let booleanIsLoggedIn = Boolean(isLogged);
// console.log(booleanIsLoggedIn);

// Conversion Summary:
// "33"      => 33
// "33abc"   => NaN
// true      => 1
// false     => 0
// ""        => false
// "Text"    => true

//-------------------------------------
// String to Number and vice versa
//-------------------------------------

// let someNumber = 33;
// let stringNumber = String(someNumber);
// console.log(stringNumber);           // "33"
// console.log(typeof stringNumber);    // string

//-------------------------------------
// 🧮 Operators
//-------------------------------------

let value = 3;
let negval = -value;
console.log(negval); // -3

// Arithmetic
// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 ** 2); // Exponentiation
// console.log(2 / 3);
// console.log(2 % 2);

// String Concatenation
let str1 = "Hello";
let str2 = " Arindam";
console.log(str1 + str2); // Hello Arindam

// Weird JS behaviors
console.log("1" + 2);       // "12"
console.log(1 + "2");       // "12"
console.log("1" + 2 + 2);   // "122"
console.log(1 + 2 + "2");   // "32"

// Unary operators
console.log(+true);   // 1
console.log(+"");     // 0

// Multiple assignment (not best practice)
// let num1, num2, num3;
// num1 = num2 = num3 = 2 + 2;
// console.log(num1, num2, num3);

// Increment
let gameCounter = 100;
gameCounter++; // Post-increment
// ++gameCounter; // Pre-increment
console.log(gameCounter); // 101
