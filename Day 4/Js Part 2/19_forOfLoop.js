// -------------------------------------------
// FOR...OF LOOP
// -------------------------------------------

//  Used to iterate over *iterable* values (arrays, strings, maps, etc.)

// Example: Array of numbers
const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    console.log(num);
}
/*
Output:
1
2
3
4
5
*/


// Example: String characters
const greeting = "Hello world";
for (const greet of greeting) {
    console.log(`Each char is ${greet}`);
}
/*
Output:
Each char is H
Each char is e
Each char is l
Each char is l
Each char is o
Each char is  
Each char is w
Each char is o
Each char is r
Each char is l
Each char is d
*/


// Example: Break on space
const greetings = "Hello world";
for (const greet of greetings) {
    if (greet === " ") {
        break;
    }
    console.log(`Each char is ${greet}`);
}
/*
Output:
Each char is H
Each char is e
Each char is l
Each char is l
Each char is o
*/


// -------------------------------------------
// MAPS IN JAVASCRIPT
// -------------------------------------------

/*
Map is a collection of key-value pairs where keys are unique.
It maintains insertion order and is iterable using for...of.
*/

const map = new Map();

map.set('IN', "India\n");
map.set('USA', "United State\n");
map.set('Fr', "France\n");

console.log(map);
/*
Output:
Map(3) {
  'IN' => 'India\n',
  'USA' => 'United State\n',
  'Fr' => 'France\n'
}
*/

//  Looping through a Map
for (const [key, value] of map) {
    console.log(`${key} :- ${value}`);
}
/*
Output:
IN :- India

USA :- United State

Fr :- France
*/


// -------------------------------------------
// NOTE: for...of does NOT work directly on plain objects
// -------------------------------------------

const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
};

//  This will throw an error:
// for (const [key, value] of myObject) { ... }

//  Instead use for...in or Object.entries()
for (const key in myObject) {
    console.log(`${key} :- ${myObject[key]}`);
}
/*
Output:
game1 :- NFS
game2 :- Spiderman
*/
