// -------------------------------------------
// forEach LOOP
// -------------------------------------------

/*
The `forEach` loop in JavaScript is used to execute a callback function once for each element in an array.
It does not return a new array and is mainly used for side effects (like printing or modifying external variables).
*/


//  Basic Example using function expression
const coding = ["js", "ruby", "python", "cpp", "java"];

coding.forEach(function (item) {
    console.log(item);
});
/*
Output:
js
ruby
python
cpp
java
*/


//  Arrow function version
coding.forEach((value) => {
    console.log(value);
});
/*
Output:
js
ruby
python
cpp
java
*/


//  Passing a custom function
function printMe(item) {
    console.log(item);
}
coding.forEach(printMe);
/*
Output:
js
ruby
python
cpp
java
*/


//  Using all parameters: value, index, and array
coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
});
/*
Output:
js 0 [ 'js', 'ruby', 'python', 'cpp', 'java' ]
ruby 1 [ 'js', 'ruby', 'python', 'cpp', 'java' ]
python 2 [ 'js', 'ruby', 'python', 'cpp', 'java' ]
cpp 3 [ 'js', 'ruby', 'python', 'cpp', 'java' ]
java 4 [ 'js', 'ruby', 'python', 'cpp', 'java' ]
*/


//  forEach on array of objects
const myCoding = [
    {
        languageName: "JavaScript ",
        languageFileName: "js"
    },
    {
        languageName: "java ",
        languageFileName: "java"
    },
    {
        languageName: "python ",
        languageFileName: "py"
    },
];

myCoding.forEach((item) => {
    console.log(item.languageName);
});
/*
Output:
JavaScript 
java 
python 
*/


/*
 Notes:
- `forEach` does not support `break`, `continue`, or `return` to stop loop.
- It's best for operations where you're not transforming or filtering the array.
*/
