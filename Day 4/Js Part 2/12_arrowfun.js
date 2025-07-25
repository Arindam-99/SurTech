//---------------- Arrow Function & `this` Keyword ----------------//

// Brief: `this` refers to the current context (depends on how a function is called).

const user = {
    username: "Arindam",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, Welcome to website`);
        console.log(this); // Refers to the current object
    }
};

user.welcomeMessage();
/*
Output:
Arindam, Welcome to website
{
  username: 'Arindam',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}
*/

user.username = "sam";
user.welcomeMessage();
/*
Output:
sam, Welcome to website
{
  username: 'sam',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}
*/

console.log(this); // In Node.js context → {} (empty object)

//---------------- Function vs Arrow Function with `this` ----------------//

function chai() {
    console.log(this); // Returns various internal context in Node
}
chai();

function chai2() {
    let username = "Arindam";
    console.log(this.username); // undefined, because `this` doesn't refer to chai2
}
chai2();

//---------------- Arrow Function ----------------//

const chacha = function () {
    let username = "Rio";
    console.log(this.username); // undefined
};
chacha();

const chacha1 = () => {
    let username = "Rio";
    console.log(this.username); // undefined
};
chacha1();

/*
Note:
- In regular functions, `this` refers to the object from which it's called.
- In arrow functions, `this` does not bind to its own context; it takes `this` from the enclosing scope (lexical scope).
*/

//---------------- Arrow Function Syntax Variants ----------------//

// Standard arrow function with return
const addTwoNum = (n1, n2) => {
    return n1 + n2;
};
console.log(addTwoNum(3, 4)); // 7

// Implicit return (no need for curly braces or `return`)
const addTwoNum1 = (n1, n2) => n1 + n2;
console.log(addTwoNum1(3, 4)); // 7

// Using parentheses (still implicit return)
const addTwoNum2 = (n1, n2) => (n1 + n2);
console.log(addTwoNum2(10, 20)); // 30

//---------------- Returning Object from Arrow Function ----------------//

//  Wrong way: returns undefined
// const addTwoNum3 = (n1, n2) => { username: "Arindam" };

//  Correct way: wrap object in parentheses
const addTwoNum3 = (n1, n2) => ({ username: "Arindam" });
console.log(addTwoNum3(10, 20)); // { username: 'Arindam' }
