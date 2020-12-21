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
//We have defined a function, copyMachine which takes arr (an array) and num (a number) as arguments. The function is supposed to return a new array made up of num copies of arr. We have done most of the work for you, but it doesn't work quite right yet. Modify the function using spread syntax so that it works correctly (hint: another method we have already covered might come in handy here!).

function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // Only change code below this line
    newArr.push([...arr]);
    // Only change code above this line
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));

//----------
//We have defined a function spreadOut that returns the variable sentence. Modify the function using the spread operator so that it returns the array ['learning', 'to', 'code', 'is', 'fun'].

function spreadOut() {
  let fragment = ["to", "code"];
  let sentence = ["learning", ...fragment, "is", "fun"];
  return sentence;
}

console.log(spreadOut());

//----------
//indexOf() can be incredibly useful for quickly checking for the presence of an element on an array. We have defined a function, quickCheck, that takes an array and an element as arguments. Modify the function using indexOf() so that it returns true if the passed element exists on the array, and false if it does not.

function quickCheck(arr, elem) {
  if (arr.indexOf(elem) >= 0) return true;
  else return false;
}
let arr = ["squash", "onions", "shallots"];
let elem = "mushrooms";

quickCheck(arr, elem);
//----------
//We have defined a function, filteredArray, which takes arr, a nested array, and elem as arguments, and returns a new array. elem represents an element that may or may not be present on one or more of the arrays nested within arr. Modify the function, using a for loop, to return a filtered version of the passed array such that any array nested within arr containing elem has been removed.
function filteredArray(arr, elem) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem) == -1) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(
  filteredArray(
    [
      [3, 2, 3],
      [1, 6, 3],
      [3, 13, 26],
      [19, 3, 9],
    ],
    3
  )
);

//----------
//We have defined a variable, myNestedArray, set equal to an array. Modify myNestedArray, using any combination of strings, numbers, and booleans for data elements, so that it has exactly five levels of depth (remember, the outer-most array is level 1). Somewhere on the third level, include the string 'deep', on the fourth level, include the string 'deeper', and on the fifth level, include the string 'deepest'.

let myNestedArray = [
  // Only change code below this line
  ["unshift", false, 1, 2, 3, "complex", "nested"],
  [["loop", "shift", 6, 7, 1000, "method", "deep"]],
  [[["concat", false, true, "spread", "array", "deeper", ["deepest"]]]],
  ["mutate", 1327.98, "splice", "slice", "push"],
  ["iterate", 1.3849, 7, "8.4876", "arbitrary", "depth"],
  // Only change code above this line
];

//----------
//A foods object has been created with three entries. Using the syntax of your choice, add three more entries to it: bananas with a value of 13, grapes with a value of 35, and strawberries with a value of 27.

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
};

// Only change code below this line
foods.bananas = 13;
foods["grapes"] = 35;
foods.strawberries = 27;
// Only change code above this line

console.log(foods);

//----------
//Here we've defined an object userActivity, which includes another object nested within it. Set the value of the online key to 45.
let userActivity = {
  id: 23894201352,
  date: "January 1, 2017",
  data: {
    totalUsers: 51,
    online: 42,
  },
};

// Only change code below this line
userActivity.data.online = 45;
// Only change code above this line

console.log(userActivity);

//----------
//We've defined a function, checkInventory, which receives a scanned item as an argument. Return the current value of the scannedItem key in the foods object. You can assume that only valid keys will be provided as an argument to checkInventory.

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27,
};

function checkInventory(scannedItem) {
  // Only change code below this line
  let scanned = scannedItem;
  return foods[scanned];
  // Only change code above this line
}

console.log(checkInventory("apples"));

//----------
//Use the delete keyword to remove the oranges, plums, and strawberries keys from the foods object.
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27,
};

// Only change code below this line
delete foods.oranges;
delete foods.plums;
delete foods.strawberries;
// Only change code above this line

console.log(foods);

//----------
let users = {
  Alan: {
    age: 27,
    online: true,
  },
  Jeff: {
    age: 32,
    online: true,
  },
  Sarah: {
    age: 48,
    online: true,
  },
  Ryan: {
    age: 19,
    online: true,
  },
};

function isEveryoneHere(obj) {
  // Only change code below this line
  if ("Alan" in obj && "Jeff" in obj && "Sarah" in obj && "Ryan" in obj)
    return true;
  else return false;
  // Only change code above this line
}

console.log(isEveryoneHere(users));

//----------
//We've defined a function countOnline which accepts one argument (a users object). Use a for...in statement within this function to loop through the users object passed into the function and return the number of users whose online property is set to true. An example of a users object which could be passed to countOnline is shown below. Each user will have an online property with either a true or false value.
function countOnline(usersObj) {
  // Only change code below this line
  let count = 0;
  for (let user in usersObj) {
    if (usersObj[user].online === true) {
      count++;
    }
  }
  return count;
}

//----------
//Finish writing the getArrayOfUsers function so that it returns an array containing all the properties in the object it receives as an argument.
let users = {
  Alan: {
    age: 27,
    online: false,
  },
  Jeff: {
    age: 32,
    online: true,
  },
  Sarah: {
    age: 48,
    online: false,
  },
  Ryan: {
    age: 19,
    online: true,
  },
};

function getArrayOfUsers(obj) {
  // Only change code below this line
  return Object.keys(obj);
  // Only change code above this line
}

console.log(getArrayOfUsers(users));
//----------
//Take a look at the object we've provided in the code editor. The user object contains three keys. The data key contains five keys, one of which contains an array of friends. From this, you can see how flexible objects are as data structures. We've started writing a function addFriend. Finish writing it so that it takes a user object and adds the name of the friend argument to the array stored in user.data.friends and returns that array.
let user = {
  name: "Kenneth",
  age: 28,
  data: {
    username: "kennethCodesAllDay",
    joinDate: "March 26, 2016",
    organization: "freeCodeCamp",
    friends: ["Sam", "Kira", "Tomo"],
    location: {
      city: "San Francisco",
      state: "CA",
      country: "USA",
    },
  },
};

function addFriend(userObj, friend) {
  // Only change code below this line
  userObj["data"]["friends"].push(friend);
  return userObj["data"]["friends"];
  // Only change code above this line
}

console.log(addFriend(user, "Pete"));
//----------
//You are given a variable celsius representing a temperature in Celsius. Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. Use the algorithm mentioned above to help convert the Celsius temperature to Fahrenheit.

function convertToF(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}

convertToF(30);
//----------
//reverse string
function reverseString(str) {
  str = str.split("").reverse().join("");
  return str;
}

reverseString("hello");
//----------
//Understanding recursion: Recursion refers to a function repeating (calling) itself. In this case we are basically returning the given number (i.e. 5), multiplied by the function itself but this time the value passed to the num parameter is num-1 (which initially translates to 4). The very function is going to run inside itself interesting, eh?

function factorialize(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorialize(num - 1);
}

factorialize(5);
//----------
//Return the length of the longest word in the provided sentence.

function findLongestWordLength(str) {
  str = str.split(" ");
  let longestWord = 0;
  for (let i = 0; i < str.length; i++) {
    if (longestWord < str[i].length) {
      longestWord = str[i].length;
    }
  }
  return longestWord;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
//----------
//Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays. Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
function largestOfFour(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i])
    let largestNum = arr[i][0];
    for (let sub = 0; sub < arr[i].length; sub++) {
      if (largestNum < arr[i][sub]) {
        largestNum = arr[i][sub];
        // console.log(largestNum)
      }
    }
    newArr.push(largestNum);
  }
  return newArr;
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);
//----------
//Check if a string (first argument, str) ends with the given target string (second argument, target).
function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target;
}

/* could be done with 
function confirmEnding(str, target) {
  return str.endsWith(target)
}
*/
confirmEnding("Bastian", "n");
//----------
//Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.

function repeatStringNumTimes(str, num) {
  let newStr = "";
  while (num > 0) {
    newStr += str;
    num--;
  }
  return newStr;
}

repeatStringNumTimes("abc", 3);
//----------
//Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

function truncateString(str, num) {
  let truncStr = "";
  if (num < str.length) {
    truncStr = str.slice(0, num) + "...";
  } else {
    truncStr = str.slice(0, num);
  }
  return truncStr;
}
truncateString("A-tisket a-tasket A green and yellow basket", 8);
//----------
//Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.

function findElement(arr, func) {
  let num = 0;
  num = arr.find(func);
  return num;
}

findElement([1, 2, 3, 4], (num) => num % 2 === 0);
// findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })
// findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; })
//----------
//Check if a value is classified as a boolean primitive. Return true or false. (Boolean primitives are true and false.)

function booWho(bool) {
  return bool === true || bool === false ? true : false;
}

booWho(true);
//----------
/*Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case. (For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".) */

function titleCase(str) {
  let splitStr = str.toLowerCase().split(" ");
  let upCase = splitStr.map(function (val) {
    return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  });
  return upCase.join(" ");
}

titleCase("I'm a little tea pot");
//----------
//Copy each element of the first array into the second array, in order. Begin inserting elements at index n of the second array. Return the resulting array. The input arrays should remain the same after the function runs.
function frankenSplice(arr1, arr2, n) {
  let newArr = arr2.slice();
  newArr.splice(n, 0, ...arr1);
  return newArr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
//----------
//Remove all falsy values from an array

function bouncer(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) newArr.push(arr[i]);
  }
  return newArr;
}

bouncer([7, "ate", "", false, 9]);
/*
can also be done with :
function bouncer(arr) {
  return arr.filter(Boolean);
}
*/
//----------
//Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

function getIndexToIns(arr, num) {
  arr.sort(function (a, b) {
    return a - b;
  });
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) return i;
  }
  return arr.length;
}

getIndexToIns([2, 5, 10], 15);
getIndexToIns([40, 60], 50);
getIndexToIns([5, 3, 20, 3], 5);
getIndexToIns([10, 20, 30, 40, 50], 35);
getIndexToIns([10, 20, 30, 40, 50], 30);

//----------
//Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

function mutation(arr) {
  let test = arr[1].toLowerCase();
  let target = arr[0].toLowerCase();
  for (let i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) return false;
  }
  return true;
}

mutation(["Hello", "hEy"]);
//----------
//Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
  let newArr = [];
  for (var i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
  }
  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
// First, we create an empty array arr2 where we will store our ‘chunks’.
// The for loop starts at zero, increments by size each time through the loop, and stops when it reaches arr.length.
// Note that this for loop does not loop through arr. Instead, we are using the loop to generate numbers we can use as indices to slice the array in the right locations.
// Inside our loop, we create each chunk using arr.slice(i, i+size), and add this value to arr2 with arr2.push().
// Finally, we return the value of arr2.
//---------- Object Oriented Programming: Create a Basic JavaScript Object
let dog = {
  name: "Andy",
  numLegs: 4,
};
//Create a dog object with name and numLegs properties, and set them to a string and a number, respectively.
//----------
//Print both properties of the dog object to your console.

let dog = {
  name: "Spot",
  numLegs: 4,
};
// Only change code below this line
console.log(dog.name);
console.log(dog.numLegs);
//----------
//Using the dog object, give it a method called sayLegs. The method should return the sentence "This dog has 4 legs."
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function () {
    return "This dog has " + dog.numLegs + " legs.";
  },
};

dog.sayLegs();
//----------
//this is a deep topic, and the above example is only one way to use it. In the current context, this refers to the object that the method is associated with: duck. If the object's name is changed to mallard, it is not necessary to find all the references to duck in the code. It makes the code reusable and easier to read.
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function () {
    return "This dog has " + this.numLegs + " legs.";
  },
};

dog.sayLegs();
//----------
//Constructors are functions that create new objects. They define properties and behaviors that will belong to the new object. Think of them as a blueprint for the creation of new objects.
//Create a constructor, Dog, with properties name, color, and numLegs that are set to a string, a string, and a number, respectively.

function Dog() {
  this.name = "Andy";
  this.color = "Brown";
  this.numLegs = 4;
}
//----------
//Use the Dog constructor from the last lesson to create a new instance of Dog, assigning it to a variable hound.

function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
// Only change code below this line

let hound = new Dog();
//----------
//Create another Dog constructor. This time, set it up to take the parameters name and color, and have the property numLegs fixed at 4. Then create a new Dog saved in a variable terrier. Pass it two strings as arguments for the name and color properties.

function Dog(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 4;
}

let terrier = new Dog("Andrew", "white");
//----------
//Add the own properties of canary to the array ownProps.

function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
// Only change code below this line

for (let property in canary) {
  if (canary.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps);
//----------
//Add a numLegs property to the prototype of Dog

function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;
//All instances automatically have the properties on the prototype, so anytime a new instance is created you can call .numLegs and it will have this property.

// Only change code above this line
let beagle = new Dog("Snoopy");
console.log(beagle.numLegs);
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
