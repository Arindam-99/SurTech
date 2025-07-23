"use strict";

// --------------------------------------------
//  Number Basics
// --------------------------------------------

const score = 400;
console.log(score); // 400

const balance = new Number(1000);
console.log(balance); // [Number: 1000]

console.log(balance.toString());       // "1000"
console.log(balance.toString().length); // 4

const balance1 = new Number(100.9870);
console.log(balance1.toFixed(2));       // "100.99" — rounded to 2 decimals

const otherNumber = 123.8966;
console.log(otherNumber.toPrecision(3)); // "124" — rounds to 3 significant digits

const hundreds = 10000000;
console.log(hundreds.toLocaleString('en-IN')); // "1,00,00,000" — Indian format

// --------------------------------------------
//  Math Object in JavaScript
// --------------------------------------------

console.log(Math);               // Object with math constants and functions
console.log(Math.abs(-4));       // 4 — converts negative to positive
console.log(Math.round(4.9));    // 5 — rounds to nearest integer
console.log(Math.ceil(4.1));     // 5 — always rounds up
console.log(Math.floor(4.9));    // 4 — always rounds down
console.log(Math.min(4, 3, 9, 5, 6, 7)); // 3
console.log(Math.max(4, 3, 9, 5, 6, 7)); // 9

// --------------------------------------------
//  Random Number Generation
// --------------------------------------------

console.log(Math.random());                // Random decimal between 0 and 1
console.log((Math.random() * 10) + 1);     // Random between 1 and 11 (float)
console.log(Math.floor(Math.random() * 10) + 1); // Random integer 1–10

//  Random number between a range (min to max)
const min = 10;
const max = 20;

const randomInRange = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomInRange);

/* 
 Explanation of Random Range Formula:
1. Set range:
   const min = 10;
   const max = 20;

2. Math.random() returns decimal between 0 and 1

3. (max - min + 1) ensures the range includes `max`
   → 20 - 10 + 1 = 11

4. Multiply random decimal with range:
   Math.random() * 11

5. Round down using Math.floor()

6. Shift result to start from `min`:
   Add `min` at the end → final range is 10 to 20 (inclusive)
*/
