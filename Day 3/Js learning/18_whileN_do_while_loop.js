// -------------------------------------------
// WHILE LOOP
// -------------------------------------------

//  Basic while loop with step +2
let index = 0;
while (index <= 10) {
    console.log(`Value of index is ${index}`);
    index = index + 2;
}
/*
Output:
Value of index is 0
Value of index is 2
Value of index is 4
Value of index is 6
Value of index is 8
Value of index is 10
*/


//  while loop with array
let myArray = ['batman', 'superman', 'spidernam'];
let arr = 0;
while (arr < myArray.length) {
    console.log(`Value is ${myArray[arr]}`);
    arr++;
}
/*
Output:
Value is batman
Value is superman
Value is spidernam
*/


// -------------------------------------------
// DO...WHILE LOOP
// -------------------------------------------

//  Will run at least once
let score = 1;
do {
    console.log(`Score is ${score}`);
    score++;
} while (score <= 10);
/*
Output:
Score is 1
Score is 2
Score is 3
Score is 4
Score is 5
Score is 6
Score is 7
Score is 8
Score is 9
Score is 10
*/


//  Condition false, but loop runs once
let score1 = 11;
do {
    console.log(`Score is ${score1}`);
    score1++;
} while (score1 <= 10);
/*
Output:
Score is 11
*/
