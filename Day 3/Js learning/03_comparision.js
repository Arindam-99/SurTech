// Basic comparisons
console.log(2 > 1);     // true
console.log(2 >= 1);    // true
console.log(2 < 1);     // false
console.log(2 == 1);    // false
console.log(2 != 1);    // true

// String to number comparison
console.log("2" > 1);    // true → "2" is converted to 2
console.log("02" > 1);   // true → "02" becomes 2

//---------------------------------------------
// 🔍 Comparisons involving null
//---------------------------------------------
console.log(null > 0);    // false → null becomes 0, but 0 > 0 is false
console.log(null == 0);   // false → null is only loosely equal to undefined
console.log(null >= 0);   // true  → null becomes 0, and 0 >= 0 is true

/* 
 Important Note:
- Comparisons like >, <, >=, <= convert `null` to a number (i.e., 0).
- But equality check (`==`) doesn't convert types in the same way.
*/

//---------------------------------------------
// Strict equality check
//---------------------------------------------
console.log("2" === 2);  // false → different types: string !== number
