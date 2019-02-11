/* 
Write a loop that makes seven calls to console.log to output the following triangle:
#
##
###
####
#####
######
####### 
*/


// Solution 1: While loop
var hashtag = "#";
var hashtagValue = 0;

while (hashtagValue < 7) {
    console.log(hashtag);
    hashtagValue++;
    hashtag += "#";
}

// Solution 2: For loop
for (let i = "#"; i.length < 8; i += "#") {
    console.log(i);
}