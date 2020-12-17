var readlineSync = require('readline-sync');
var chalk =require('chalk')
var username = readlineSync.question(chalk.white.bgBlue.bold("Welcome! \n Please enter your name to proceed towards checking if your birthdate is a prime number \n"));



console.log(chalk.white.bgBlue.bold("\n Enter the date in following format:\n DD/MM \n 25/12\n"))
dob=readlineSync.question(chalk.white.bgBlue.bold("\nEnter your date of birth in above mentioned format: "))

function primeNumberChecker(finaldate){
    var birthdate=Number(finaldate);
    var flag=0;
    
    for(var i=1;i<finaldate;i++){
      if(birthdate%i==0){
        flag++;
      }
      if(flag>1){
        break;
      }
    }
    flag>1
    ?console.log(chalk.red.bgWhite.bold("\n"+username+", your birthdate is not prime!"))
    :console.log(chalk.blue.bgWhite.bold("\n"+username+ ", your birthdate is prime.\n Feel free to share this with your friend circle over social media"));
    
  }
  primeNumberChecker(dob);