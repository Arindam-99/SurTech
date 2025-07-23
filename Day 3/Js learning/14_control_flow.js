//-------------------- IF Statements in JavaScript --------------------//

// Syntax:
// if (condition) {
//   // code block
// }

// Comparison Operators:
// <, >, <=, >=, ==, !=, ===, !==

// Example:
const isUserLoggedIn = true;

if (isUserLoggedIn) {
    console.log("User is logged in");
}

// Loose equality (==) allows type coercion
if (2 == "2") {
    console.log("Executed (==)"); // true
}

// Not equal (!=)
if (2 != 3) {
    console.log("Executed (!=)"); // true
}

//-------------------- IF-ELSE Example --------------------//
const temp = 41;

if (temp < 50) {
    console.log("Temperature is less than 50");
} else {
    console.log("Temperature is not less than 50");
}

//-------------------- Block Scope with `const` --------------------//
const score = 200;

if (score > 100) {
    const power = "fly";
    console.log(`User power: ${power}`);
}

// console.log(`User power: ${power}`); //  Error: power is not defined outside the block

//-------------------- Implicit One-Liner IF --------------------//
const balance = 1000;

if (balance > 500) console.log("Test"); //  Valid for single line

//  Avoid comma-separated one-liners (for readability)
if (balance > 500) console.log("Test"),
console.log("Hello Arindam"); // This will run regardless of IF condition

//-------------------- ELSE-IF LADDER --------------------//
const marks = 81;

if (marks >= 100) {
    console.log("Marks are greater than or equal to 100");
} else if (marks > 90) {
    console.log("Marks are greater than 90");
} else if (marks > 80) {
    console.log("Marks are greater than 80");
} else {
    console.log("Marks are greater than 70");
}

//-------------------- Logical Operators --------------------//

const userLoggedIn = true;
const debitCard = true;

if (userLoggedIn && debitCard) {
    console.log("Allow to buy course"); //  AND operator: both must be true
}

const loggedInGoogle = false;
const loggedInEmail = true;

if (loggedInGoogle || loggedInEmail) {
    console.log("User logged in"); //  OR operator: any one is true
}
