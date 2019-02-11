// Write a function min that takes two arguments and returns their minimum.

function returnMin(num1, num2) {
    var calcMin = (num1 > num2) ? num2 : num1; // Als num1 groter is dan num2 > return num2, anders return num1
    return calcMin;
}

console.log(returnMin(0, 10));
// → 0
console.log(returnMin(0, -10));
// → -10
console.log(returnMin(-99, -100));
// → -100