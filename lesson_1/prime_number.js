var readlineSync = require('readline-sync');
var chalk =require('chalk')
var username = readlineSync.question(chalk.white.bgBlue.bold("Welcome! \n Please enter your name to proceed towards checking if your birthdate is a prime number \n"));



console.log(chalk.white.bgBlue.bold("\n Enter the date in following format:\n DD/MM \n 25/12\n"))
dob=readlineSync.question(chalk.white.bgBlue.bold("\nEnter your date of birth in above mentioned format: "))