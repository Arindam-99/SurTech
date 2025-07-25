// -------------------------------------------
// ITERATIONS: FOR LOOP
// -------------------------------------------

//  Basic For Loop
for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        console.log("5 is best number");
    }
    console.log(element);
}


//  Nested For Loop (Multiplication Table)
for (let i = 1; i <= 10; i++) {
    console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // Uncomment to display multiplication table
        // console.log(`${i} * ${j} = ${i * j}`);
    }
}


//  For Loop with Array Iteration
let myArray = ["flash", "batman", "superman"];
console.log("Array length:", myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}


// -------------------------------------------
// BREAK and CONTINUE
// -------------------------------------------

//  break example
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("Detected 5");
        break;
    }
    console.log(`Value of i is ${index}`);
}
/*
Output:
Value of i is 1
Value of i is 2
Value of i is 3
Value of i is 4
Detected 5
*/


// ⏩ continue example
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("Detected 5");
        continue;
    }
    console.log(`Value of i is ${index}`);
}
/*
Output:
Value of i is 1
Value of i is 2
Value of i is 3
Value of i is 4
Detected 5
Value of i is 6
...
Value of i is 20
*/
