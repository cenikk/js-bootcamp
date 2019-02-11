/* Write a program that creates a string that represents an 8×8 grid, 
using newline characters to separate lines. 
At each position of the grid there is either a space or a "#" character. 
The characters should form a chessboard. */

var size = 8, chessBoard = "";
var X, Y;

for (X = 0; X < size; X++) {
    for (Y = 0; Y < size; Y++) {
        if ((X + Y) % 2 == 0) {
            chessBoard += " ";
        } else {
            chessBoard += "#";
        }
    }
    chessBoard += "\n";
}
console.log(chessBoard);