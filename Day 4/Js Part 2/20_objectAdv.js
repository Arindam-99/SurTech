// -------------------------------------------
// FOR...IN LOOP
// -------------------------------------------

/*
The `for...in` loop is used to iterate over the **keys** (properties/indexes) of an object or array.
It works for both plain objects and arrays, but for arrays, `for...of` is usually preferred.
*/


//  Example: Iterating over object properties
const myObject = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift by apple"
};

for (const key in myObject) {
    // Accessing the value using the key
    console.log(myObject[key]);
    /*
    Output:
    javascript
    c++
    ruby
    swift by apple
    */

    // Accessing both key and value
    console.log(`${key} shortcut is for ${myObject[key]}`);
    /*
    Output:
    js shortcut is for javascript
    cpp shortcut is for c++
    rb shortcut is for ruby
    swift shortcut is for swift by apple
    */
}


//  Example: Iterating over array indexes
const programming = ["js", "java", "cpp", "react"];

for (const key in programming) {
    console.log(key);             // index (as a string)
    /*
    Output:
    0
    1
    2
    3
    */

    console.log(programming[key]); // actual array value
    /*
    Output:
    js
    java
    cpp
    react
    */
}

/*
 Note:
- In arrays, `key` is the index (as a string).
- Use `for...of` if you just want the values directly.
*/
