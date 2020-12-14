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

console.log("Reverse pattern:")
var revnum=readlineSync.question("Enter the number of rows: ")

var op1 = "";
for (var i = revnum; i >=0; i--) {
    for(var j=i;j>0;j--){
        op1 = op1 + "*";
    }
    
    console.log(op1);
    op1="";

}

//Output:
// E:\Documents\GitHub\neogcamp_extra>node E:\Documents\GitHub\neogcamp_extra\lesson_1\star_pattern_forloop_bonus_hw.js
// Enter the number of rows: 5
// *
// **
// ***
// ****
// *****
// Reverse pattern:
// Enter the number of rows: 5
// *****
// ****
// ***
// **
// *