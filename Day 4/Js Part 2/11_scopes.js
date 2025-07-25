//---------------- Variable Scopes ----------------//

// Global scope vs Block scope
// var is function-scoped
// let and const are block-scoped

if (true) {
    let a = 10;
    const b = 20;
    var c = 30;
}

// console.log(a); //  ReferenceError
// console.log(b); //  ReferenceError
console.log(c); //  30 (because var is not block-scoped)

let a = 300;
if (true) {
    let a = 30;
    const b = 20;
    console.log("INNER:", a); // INNER: 30
}
console.log(a); // 300 (outer scope)

//---------------- Function Scope Example ----------------//

function one() {
    const username = "Arindam";

    function two() {
        const website = "youtube";
        console.log(username); //  Accesses parent scope
    }

    two();
    // console.log(website);  Error: website is block scoped inside two()
}
// one(); // Uncomment to call the function

//---------------- Nested If with Block Scope ----------------//

if (true) {
    const username = "arindam";
    if (username === "arindam") {
        const website = "youtube";
        console.log(username + website); //  arindamyoutube
    }
    // console.log(website);  Error
}
// console.log(username);  Error

//---------------- Function Declarations ----------------//

//  Way 1: Normal Function Declaration
function addOne(num) {
    return num + 1;
}
console.log(addOne(5)); // 6

//  Way 2: Function Expression
const addTwo = function(num) {
    return num + 2;
}
console.log(addTwo(5)); // 7
