console.log("Bài 1");

const arr1 = [0, 10, 1, 99, 9, 8, 79, 91, 22, 32, 12];
const arr2 = [99, 19, 29, 39, 11, 21, 32, 33, 35, 50, 60, 90];
const arr3 = [1, 10, 19, 11, 13, 16, 19];

var x = arr1.sort();
x = x.join("");

function ReverseString(str) {
  return str.split("").reverse().join("");
}

console.log(ReverseString(x), "arr 1");
