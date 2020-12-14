var readlineSync = require('readline-sync');
var chalk =require('chalk')
var username = readlineSync.question(chalk.white.bgBlue.bold("Welcome! \n Please enter your name to proceed towards checking if you are born in a leap year \n"));
var year = readlineSync.question(chalk.white.bgBlue.bold("Thanks "+username+" Enter your birth year to check if it was a leap year or not.\n Year: "));

function leapYearCalc(year){
  if((year% 4 == 0 && year%100!=0)||( year% 400 == 0)){
    console.log(chalk.blue.bgWhite.bold(username+ ", your birth year: "+year+" is a leap year.\n Feel free to share this to your friend circle over social media"));
  } 
  else{
    console.log(chalk.red.bgWhite.bold(username+", you were not born in a leap year!"));
  }
}

leapYearCalc(year);