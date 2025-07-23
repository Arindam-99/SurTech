// How to print anything in JavaScript
console.log("Hello World");

// Concepts of let, var, const
const accountId = 145698;             // 'const' means the value cannot be changed once assigned
let accountEmail = "dasarindam342@gmail.com"; // 'let' is block-scoped and can be reassigned
var accountPassword = "123456";       // 'var' is function-scoped (not recommended in modern JS)
let accountCity = "Kolkata";
let accountState; // Undefined by default

// accountId = 2; //  Not allowed because accountId is a constant

// Changing values of let and var variables
accountEmail = "das@3420";
accountPassword = "212121";
accountCity = "Delhi";

// You can also declare a variable without let/var/const, but it's not recommended
// someVariable = "test"; // Avoid this – it becomes a global variable

// Output values
console.log(accountId);

// Prefer not to use 'var'
// because of issues with block scope and hoisting behavior

// Display all values in a tabular format (good for debugging)
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
