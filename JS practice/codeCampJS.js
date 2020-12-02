let a = 5;
let b = 1;
a++;
// Only change code below this line
console.log(a);

let sumAB = a + b;
console.log(sumAB);
//------------------
// Open your browser console.
let output =
  "Get this to log once in the freeCodeCamp console and twice in the browser console";
// Use console.log() to print the output variable.
console.clear();
console.log(output);
// Run the tests to see the difference between the two consoles.

// Now, add console.clear() before your console.log() to clear the browser console, and pass the tests.

//----------
let seven = 7;
let three = "3";
console.log(seven + three);
// Only change code below this line
console.log(typeof seven);
console.log(typeof three);
//----------
let receivables = 10;
let payables = 8;
let netWorkingCapital = receivables - payables;
console.log(`Net working capital is: ${netWorkingCapital}`);

//----------
let myArray = [1, 2, 3];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

let arraySum = myArray.reduce(reducer);
console.log(`Sum of array values is: ${arraySum}`);

//----------
let innerHtml = '<p>Click here to <a href="#Home">return home</a></p>';
console.log(innerHtml);
//OR
let innerHtml = '<p>Click here to <a href="#Home">return home</a></p>';
console.log(innerHtml);

//----------
let x = 7;
let y = 9;
let result = "to come";

if (x == y) {
  result = "Equal!";
} else {
  result = "Not equal!";
}

console.log(result);

//----------
//Fix the code so the variable result is set to the value returned from calling the function getNine.
function getNine() {
  let x = 6;
  let y = 3;
  return x + y;
}

let result = getNine();
console.log(result);

//----------
//The function raiseToPower raises a base to an exponent. Unfortunately, it's not called properly - fix the code so the value of power is the expected 8.
// function raiseToPower(b, e) {
//   return Math.pow(b, e);
// }

// let base = 2;
// let exp = 3;
// let power = raiseToPower(exp, base);
// console.log(power);
function raiseToPower(b, e) {
  return Math.pow(b, e);
}

let base = 2;
let exp = 3;
let power = raiseToPower(base, exp);
console.log(power);

//----------

//----------

//----------

//----------

//----------

//----------

//----------

//----------
