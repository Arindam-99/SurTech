//------------------------------------
// Comparison Operators
//------------------------------------
console.log("2" > 1);       // true
console.log("02" > 1);      // true

console.log(null > 0);      // false
console.log(null == 0);     // false
console.log(null >= 0);     // true

// === (Strict Equality)
console.log("2" === 2);     // false

//------------------------------------
// String Basics and Methods
//------------------------------------
const name = "Arindam";
const repoCount = 50;

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Arindam-Das-2004");
console.log(gameName[0]);                      // A
console.log(gameName.__proto__);               // Object [String]
console.log(gameName.toUpperCase());           // ARINDAM-DAS-2004

console.log(gameName.charAt(2));               // i
console.log(gameName.indexOf("n"));            // 3

const newstring = gameName.substring(0, 4);
console.log(newstring);                        // Arin

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);                    // rin

const newString1 = "    Arindam   ";
console.log(newString1.trim());                // Arindam

const url = "https://arindamdas.com/frontEnd%developer";
console.log(url.replace("%", "&"));            // https://arindamdas.com/frontEnd&developer
console.log(url.includes("arindam"));          // true

console.log(gameName.split('-'));              // [ 'Arindam', 'Das', '2004' ]

//------------------------------------
// Numbers and Math
//------------------------------------
const score = 400;
console.log(score);                            // 400

const balance = new Number(1000);
console.log(balance);                          // [Number: 1000]
console.log(balance.toString());               // "1000"
console.log(balance.toString().length);        // 4

const balance1 = new Number(100.9870);
console.log(balance1.toFixed(2));              // "100.99"

const otherNumber = 123.8966;
console.log(otherNumber.toPrecision(3));       // "124"

const hundreds = 10000000;
console.log(hundreds.toLocaleString('en-IN')); // "1,00,00,000"

// Math Object Operations
console.log(Math.abs(-4));                     // 4
console.log(Math.round(4.9));                  // 5
console.log(Math.ceil(4.1));                   // 5
console.log(Math.floor(4.9));                  // 4
console.log(Math.min(4, 3, 9, 5, 6, 7));        // 3
console.log(Math.max(4, 3, 9, 5, 6, 7));        // 9

// Random Number
console.log(Math.random());                    // 0.0 - 0.999...
console.log((Math.random() * 10) + 1);         
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);

//------------------------------------
// Date and Time
//------------------------------------
let mydate = new Date();
console.log(mydate);                           // Full Date object
console.log(mydate.toString());                // Human readable
console.log(mydate.toDateString());            // e.g., Sun Feb 09 2025
console.log(mydate.toJSON());                  // ISO format
console.log(mydate.toISOString());             // ISO format
console.log(mydate.toLocaleString());          // Locale specific

console.log(typeof mydate);                    // object

let myCreatedDate = new Date(2024, 7, 2);
console.log(myCreatedDate.toDateString());     // Fri Aug 02 2024
console.log(myCreatedDate.getTime());          // timestamp in ms

let createdDate2 = new Date(2023, 0, 23, 5, 3);
console.log(createdDate2.toLocaleString());    // 23/1/2023, 5:03:00 am

let createdDate3 = new Date("2023-01-14");
console.log(createdDate3.toLocaleString());    // 14/1/2023, 5:30:00 am

let myTimeStand = Date.now();
console.log(myTimeStand);                      // Current time in ms
console.log(Math.floor(Date.now() / 1000));    // In seconds

let newDate = new Date();
console.log(newDate.getDate());                // Day of the month
console.log(newDate.getDay());                 // Day of the week (0 = Sunday)
console.log(newDate.getMonth() + 1);           // Month (1-based)

console.log(newDate.toLocaleString('default', {
    weekday: "long"
})); // Will not print unless used properly
