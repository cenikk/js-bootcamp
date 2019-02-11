/* Write a range function that takes two arguments, start and end, 
and returns an array containing all the numbers from start up to (and including) end.

Next, write a sum function that takes an array of numbers and returns the sum of these numbers. 
Run the example program and see whether it does indeed return 55.

As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array. 
If no step is given, the elements go up by increments of one, corresponding to the old behavior. */

function range(start, end, step = 1) {
    let rangeArray = [];
    if (start < end) {
        for (let i = start; i <= end; i += step ) {
            rangeArray.push(i);
        }
    } else if (end < start) {
        for (let i = start; i >= end; i += step) {
            rangeArray.push(i);
        }
    }
    
    return rangeArray;
}

function sum(arrayOfNums) {
    sumNumbers = 0;
    for (let i = 0; i < arrayOfNums.length; i++) {
        sumNumbers += arrayOfNums[i];
    }

    return sumNumbers;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(range(1, 10, 2));
// → [1, 3, 5, 7, 9]
console.log(sum(range(1, 10)));
// → 55