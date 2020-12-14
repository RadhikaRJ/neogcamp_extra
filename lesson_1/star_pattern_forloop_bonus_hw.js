//npm install readline-sync in terminal to install the dependency to get i/p from user at runtime
var readlineSync = require('readline-sync');
var num=readlineSync.question("Enter the number of rows: ")
var op = "";
for (var i = 0; i < num; i++) {
    op = op + "*"
    console.log(op);


}

//Output:
// E:\Documents\GitHub\neogcamp_extra>node E:\Documents\GitHub\neogcamp_extra\lesson_1\star_pattern_forloop_bonus_hw.js
// Enter the number of rows: 10
// *
// **
// ***
// ****
// *****
// ******
// *******
// ********
// *********
// **********

// E:\Documents\GitHub\neogcamp_extra>