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
//Fix the two indexing errors in the following function so all the numbers 1 through 5 are printed to the console.
function countToFive() {
  let firstFive = "12345";
  let len = firstFive.length;
  // Only change code below this line
  for (let i = 0; i < len; i++) {
    // Only change code above this line
    console.log(firstFive[i]);
  }
}

countToFive();

//----------
/*
The following function is supposed to create a two-dimensional array with m rows and n columns of zeroes. Unfortunately, it's not producing the expected output because the row variable isn't being reinitialized (set back to an empty array) in the outer loop. Fix the code so it returns a correct 3x2 array of zeroes, which looks like [[0, 0], [0, 0], [0, 0]].
function zeroArray(m, n) {
  // Creates a 2-D array with m rows and n columns of zeroes
  let newArray = [];
  let row = [];
  for (let i = 0; i < m; i++) {
    // Adds the m-th row into newArray
    for (let j = 0; j < n; j++) {
      // Pushes n zeroes into the current row to create the columns
      row.push(0);
    }
    // Pushes the current row, which now has n zeroes in it, to the array
    newArray.push(row);
  }
  return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);
*/
function zeroArray(m, n) {
  // Creates a 2-D array with m rows and n columns of zeroes
  let newArray = [];
  for (let i = 0; i < m; i++) {
    let row = [];
    // Adds the m-th row into newArray
    for (let j = 0; j < n; j++) {
      // Pushes n zeroes into the current row to create the columns
      row.push(0);
    }
    // Pushes the current row, which now has n zeroes in it, to the array
    newArray.push(row);
  }
  return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);

//----------
/*The myFunc() function contains an infinite loop because the terminal condition i != 4 will never evaluate to false (and break the looping) - i will increment by 2 each pass, and jump right over 4 since i is odd to start. Fix the comparison operator in the terminal condition so the loop only runs for i less than or equal to 4.
 */
function myFunc() {
  for (let i = 1; i <= 4; i += 2) {
    console.log("Still going!");
  }
}

//----------
let yourArray = [1, "2", true, "up", 42];

//----------
let myArray = ["a", "b", "c", "d"];
// Only change code below this line
myArray[1] = "anything but 'b'";
// Only change code above this line
console.log(myArray);

//----------
function mixedNumbers(arr) {
  // Only change code below this line
  arr.unshift("I", 2, "three");
  arr.push(7, "VIII", 9);
  // Only change code above this line
  return arr;
}

console.log(mixedNumbers(["IV", 5, "six"]));

//----------
function popShift(arr) {
  let popped = arr.pop();
  let shifted = arr.shift();
  return [shifted, popped];
}

console.log(popShift(["challenge", "is", "not", "complete"]));

//----------
//We've initialized an array arr. Use splice() to remove elements from arr, so that it only contains elements that sum to the value of 10.
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line
arr.splice(1, 4);
// Only change code above this line
console.log(arr);

//----------
//We have defined a function, htmlColorNames, which takes an array of HTML colors as an argument. Modify the function using splice() to remove the first two elements of the array and add 'DarkSalmon' and 'BlanchedAlmond' in their respective places.
function htmlColorNames(arr) {
  // Only change code below this line
  arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond");
  // Only change code above this line
  return arr;
}

console.log(
  htmlColorNames([
    "DarkGoldenRod",
    "WhiteSmoke",
    "LavenderBlush",
    "PaleTurquoise",
    "FireBrick",
  ])
);

//----------
//We have defined a function, forecast, that takes an array as an argument. Modify the function using slice() to extract information from the argument array and return a new array that contains the elements 'warm' and 'sunny'.

function forecast(arr) {
  // Only change code below this line
  let newArray = arr.slice(2, 4);
  return newArray;
}

// Only change code above this line
console.log(
  forecast(["cold", "rainy", "warm", "sunny", "cool", "thunderstorms"])
);

//----------

//----------

//----------

//----------

//----------

//----------

//----------

//----------

//----------

//----------

//----------

//----------

//----------

//----------

//----------

//----------

//----------

//----------

//----------

//----------

//----------

//----------

//----------

//----------

//----------

//----------

//----------

//----------

//----------

//----------

//----------

//----------
