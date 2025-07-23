// ---------------------- Function Basics -----------------------

function sayMyName() {
    console.log("A");
    console.log("R");
    console.log("I");
    console.log("N");
    console.log("D");
    console.log("A");
    console.log("M");
} // Function definition

// sayMyName --> Function reference
// sayMyName(); // Function call
/*
    A
    R
    I
    N
    D
    A
    M
*/

// -------------------- Parameters vs Arguments -----------------

// function AddTwoNum(num1, num2) {
//     console.log(num1 + num2);
// }
// AddTwoNum(10, 20); // 30
// parameter --> num1, num2
// argument  --> 10, 20

// function AddTwoNum(num1, num2) {
//     let result = num1 + num2;
//     return result;
//     // console.log("Leo");  // Won’t execute (after return)
// }

// AddTwoNum(10, 20);

// function AddTwoNum(num1, num2) {
//     return num1 + num2;
// }
// AddTwoNum(10, 20);

// -------------------- Function with Conditions --------------------

function loginUserMessage(username) {
    return `${username} just logged in`;
}
console.log(loginUserMessage("Arindam")); // Arindam just logged in
console.log(loginUserMessage()); // undefined just logged in
console.log(loginUserMessage("")); // just logged in

// -------------------- With if-check --------------------

function loginUserMessage(username) {
    if (username === undefined) {
        console.log("Please enter a username...");
        return;
    }
    return `${username} just logged in`;
}
console.log(loginUserMessage()); // Please enter a username...

// -------------------- With Default Value --------------------

function loginUserMessage(username = "sam") {
    if (!username) {
        console.log("Please enter a username...");
        return;
    }
    return `${username} just logged in`;
}
// If no argument is passed, "sam" is used. If passed, overrides default.
console.log(loginUserMessage()); // sam just logged in
console.log(loginUserMessage("Arindam")); // Arindam just logged in

// -------------------- Rest Operator --------------------

function calculateCartPrice(...num1) {
    return num1;
}
console.log(calculateCartPrice(200, 300, 400)); // [ 200, 300, 400 ]

// Without rest operator
/*
function calculateCartPrice(num1) {
    return num1;
}
console.log(calculateCartPrice(200, 300, 400)); // 200
*/

// Using val1, val2 and rest
function calculateCartPrice(val1, val2, ...num1) {
    return num1;
}
console.log(calculateCartPrice(200, 300, 400, 2000)); // [ 400, 2000 ]

// -------------------- Passing Objects --------------------

const user = {
    username: "Arindam",
    price: 199
};

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
handleObject(user); // Username is Arindam and price is 199

// Direct object literal
handleObject({
    username: "Sujata",
    price: 599
}); // Username is Sujata and price is 599

// -------------------- Passing Arrays --------------------

const myNewArray = [200, 400, 500, 600];

function returnSecondValue(getArray) {
    return getArray[0];
}
console.log(returnSecondValue(myNewArray)); // 200

// Passing array directly
function returnValue(getArray) {
    return getArray[1];
}
console.log(returnValue([200, 400, 500])); // 400
