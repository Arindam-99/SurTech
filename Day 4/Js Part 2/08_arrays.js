// Array
// JS arrays are resizable and can hold mixed data types.

/* NOTES:
JavaScript arrays:
- Are resizable.
- Can contain mixed data types.
- Are zero-indexed.
- Cannot use strings as indexes (not associative).
*/

const myarr = [0, 1, 2, 3, 4, 5];
console.log(myarr[0]); // 0

const myHeros = ["Tony stark", "Hulk"];
console.log(myHeros); // ["Tony stark", "Hulk"]

const myarr2 = new Array(1, 2, 3, 4);
console.log(myarr2[0]); // 1

// Array Methods
myarr.push(6);
myarr.push(7);
console.log(myarr); // [0,1,2,3,4,5,6,7]

myHeros.pop();
console.log(myHeros); // ['Tony stark']

// myarr2.unshift(9); // Uncomment to see result
myarr2.shift();
console.log(myarr2); // [2, 3, 4]

console.log(myarr.includes(9)); // false
console.log(myarr.indexOf(3)); // 3

const newarry = myarr.join();
console.log(myarr); // Original remains unchanged
console.log(newarry); // '0,1,2,3,4,5,6,7'
console.log(typeof newarry); // string

// slice and splice
console.log("A", myarr); 
const myn1 = myarr.slice(1, 3);
console.log(myn1); // [1, 2]
console.log("B", myarr); // No change after slice

const myn2 = myarr.splice(1, 3);
console.log("C", myarr); // Splice mutates original
console.log(myn2); // [1, 2, 3]

// Array merging
const dc_heros = ["superman", "flash", "batman"];
const Marvel_heros = ["Ironman", "Hulk", "Doctor strange"];

Marvel_heros.push(dc_heros); // Nested array
console.log(Marvel_heros);
console.log(Marvel_heros[3][1]); // flash

const allheros = Marvel_heros.concat(dc_heros);
console.log(allheros); // Merges normally, no nesting

// Spread Operator
let allNewHeros = [...Marvel_heros, ...dc_heros];
console.log(allNewHeros);

// Flatten array
const another_array = [1, 2, 3, [4, 5, 6], 7, [4, [9, 8], 5]];
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

// Array utilities
console.log(Array.isArray("Arindam")); // false
console.log(Array.from("Rio")); // ['R', 'i', 'o']
console.log(Array.from({ name: "arindam" })); // []

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3)); // [100, 200, 300]
