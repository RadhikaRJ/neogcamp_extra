var readlineSync = require('readline-sync');
var year = readlineSync.question("Welcome! Enter your year of birth to identify if you were born in a leap year or not.\n Year: ");

function leapYearCalc(year){
  if((year% 4 == 0 && year%100!=0)||( year% 400 == 0)){
    console.log("Yes, "+ year+" is a leap year !");
  } 
  else(console.log("You were not born in a leap year!"));
}
leapYearCalc(year);