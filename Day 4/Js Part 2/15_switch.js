// ------------------------
// SWITCH CASE SYNTAX
// ------------------------

/*
Syntax:
switch (key) {
    case value:
        // Code to run
        break;

    default:
        // Code if no case matches
        break;
}
*/

// --------------------------------------
//  Example 1: Using Integer Case Values
// --------------------------------------

const month = 3;

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    default:
        console.log("Invalid");
        break;
}

// Output: March


// --------------------------------------
//  Example 2: Using String Case Values
// --------------------------------------

const monthNew = "January";

switch (monthNew) {
    case "January":
        console.log("January");
        break;
    case "February":
        console.log("February");
        break;
    case "March":
        console.log("March");
        break;
    case "April":
        console.log("April");
        break;
    case "May":
        console.log("May");
        break;
    default:
        console.log("Invalid");
        break;
}

// Output: January
