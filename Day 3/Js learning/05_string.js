// stringBasics.js
"use strict";

// ----------------------------------------------
//  JavaScript String Handling (Basics + Modern)
// ----------------------------------------------

const name = "Arindam";
const repoCount = 50;

//  Old-style concatenation (avoid this)
// console.log(name + repoCount + " Value");

//  Template literals (modern way)
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// ----------------------------------------------
//  Declaring string using String object
// ----------------------------------------------
const gameName = new String("Arindam-Das-265");

console.log(gameName[0]);               // A
console.log(gameName.__proto__);        // Shows all string methods
console.log(gameName.toUpperCase());    // ARINDAM-DAS-2004
console.log(gameName.charAt(2));        // i
console.log(gameName.indexOf("n"));     // 3

// ----------------------------------------------
//  Substring vs Slice
// ----------------------------------------------
const newstring = gameName.substring(0, 4);
console.log(newstring);                 // Arin

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);             // rin

// ----------------------------------------------
//  Trimming spaces
// ----------------------------------------------
const newString1 = "    Arindam   ";
console.log(newString1);                // "    Arindam   "
console.log(newString1.trim());         // "Arindam"

// ----------------------------------------------
//  URL manipulation
// ----------------------------------------------
const url = "https://arindamdas.com/frontEnd%developer";
console.log(url.replace("%", "&"));     // https://arindamdas.com/frontEnd&developer
console.log(url.includes("arindam"));   // true

// ----------------------------------------------
//  Split strings
// ----------------------------------------------
console.log(gameName.split('-'));       // ['Arindam', 'Das', '2004']
