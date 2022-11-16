console.log("Bài 1");

const arr1 = [0, 10, 1, 99, 9, 8, 79, 91, 22, 32, 12];
const arr2 = [99, 19, 29, 39, 11, 21, 32, 33, 35, 50, 60, 90];
const arr3 = [1, 10, 19, 11, 13, 16, 19];

function compareNumbers(a, b) {
  return a - b;
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

const joinArr1 = arr1.join("");
const splitArr1 = joinArr1.split("");

let lastNum1 = splitArr1.sort(compareNumbers);

function compareNumbers(a, b) {
  return a - b;
}

lastNum1 = lastNum1.join("");

console.log("Số lớn nhất arr 1:", reverseString(lastNum1));

// ==============================================================
const joinArr2 = arr2.join("");
const splitArr2 = joinArr2.split("");
let lastNum2 = splitArr2.sort(compareNumbers);
lastNum2 = lastNum2.join("");
console.log("Số lớn nhất arr 2:", reverseString(lastNum2));

// ======================================================
const joinArr3 = arr3.join("");
const splitArr3 = joinArr3.split("");

let lastNum3 = splitArr3.sort(compareNumbers);

function compareNumbers(a, b) {
  return a - b;
}

lastNum3 = lastNum3.join("");

console.log("Số lớn nhất arr 3:", reverseString(lastNum3));
