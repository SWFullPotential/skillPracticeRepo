"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the Rectangle function
 * Return a object that has the properties specified above. Locked code in the editor prints the returned object's length, width, perimeter, and area to STDOUT.
 */
function Rectangle(a, b) {
  let length = a;
  let width = b;
  let perimeter = 2 * (length + width);
  let area = length * width;
  return { length, width, perimeter, area };
}

//--------------------

//--------------------

//--------------------

//--------------------

//--------------------

//--------------------

//--------------------

//--------------------

//--------------------

//--------------------

//--------------------

//--------------------

//--------------------

//--------------------

//--------------------
