// -------------------------------------------
// Truthy & Falsy Check + Nullish Coalescing + Ternary Operator
// -------------------------------------------

const userEmail = "dasarindam@2004.ai";
// const userEmail = "";
// const userEmail = [];

if (userEmail) {
    console.log("Got user email:");
} else {
    console.log("Don't have user email.");
}

/*
Falsy Values: 
false, 0, -0, BigInt 0n, "", null, undefined, NaN

Truthy Values:
true, "0", 'false', "false", " ", [], {}, function(){}
*/

if (userEmail.length === 0) {
    console.log("Array is empty:");
}

const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// -------------------------------------------
// Nullish Coalescing Operator (??)
// Works only with null and undefined
// -------------------------------------------

// let val1;
let val1 = 5 ?? 10;           // 5
let val2 = null ?? 10;        // 10
let val3 = undefined ?? 15;   // 15
let val4 = null ?? 10 ?? 20;  // 10

console.log(val1); // 5
console.log(val2); // 10
console.log(val3); // 15
console.log(val4); // 10

// -------------------------------------------
// Ternary Operator
// condition ? expression_if_true : expression_if_false
// -------------------------------------------

const iceTeaPrice = 100;

iceTeaPrice <= 80 
    ? console.log("Less than or equal to 80") 
    : console.log("More than 80");  // Output: More than 80
