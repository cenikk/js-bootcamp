/* Write a function countBs that takes a string as its only argument and returns a number 
that indicates how many uppercase “B” characters there are in the string. */

/* Next, write a function called countChar that behaves like countBs, 
except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). 
Rewrite countBs to make use of this new function. */

function countBs(text) {
    let amountOfBs = 0;

    //console.log(typeof text);
    if (typeof text === "string") {
        for (let i = 0; i < text.length; i++) {     
            if (text[i] === "B") {
                amountOfBs++; 
            }
        }
        return amountOfBs;
    }
}

function countChar(text, charToBeCounted) {
    let amountOfChars = 0;

    if (typeof text === "string") {
        for (let i = 0; i < text.length; i++) {
            if (text[i] === charToBeCounted) {
                amountOfChars++;
            }
        }
        return amountOfChars;
    }
}

console.log(countBs("BubbleBath"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4