var readlineSync = require('readline-sync');
var chalk =require('chalk')
var username = readlineSync.question(chalk.white.bgMagenta.bold("Welcome! \n Please enter your name to proceed towards checking if your birthdate is a prime number \n"));



console.log(chalk.white.bgMagenta.bold("\n Enter the date in following format:\n DD/MM \n 25/12\n"))
dob=readlineSync.question(chalk.white.bgMagenta.bold("\nEnter your date of birth in above mentioned format: "))

dob=setDate(dob);

function getyearfromDOB(dob){
var [finalday,finalmonth]=dob.toString().split("/");

var date = finalday+finalmonth;
return date;
}
var finaldate=getyearfromDOB(dob)
//console.log("finaldate: "+finaldate);
primeNumberChecker(finaldate);

function checkDateInput(date)
{
  
  var [daycheck,monthcheck]=date.toString().split("/")

  //console.log("daycheck: "+daycheck+" monthcheck: "+monthcheck+" yearcheck:"+ yearcheck)
  if(Number(monthcheck)===null|| 
  Number(monthcheck)==" "||
  Number(monthcheck)<1||
  Number(monthcheck)>12||
  Number(daycheck)<1||
  Number(daycheck) > 31 || 
  Number(daycheck)==" "|| 
  Number(daycheck) === null|| 
  isNaN(daycheck)== true ||
  isNaN(monthcheck)== true||
  monthcheck==02 && daycheck==30)
  {
    // console.log("daycheck: "+daycheck+"monthcheck: "+monthcheck);
    //  console.log("Number(daycheck): "+Number(daycheck)+"Number(monthcheck): "+Number(monthcheck));
  return false;
  }
  else {
    // console.log("Number(daycheck): "+Number(daycheck)+"Number(monthcheck): "+Number(monthcheck));
    return true;}
}

function setDate(dob)
{
  var flag=false;
  do{
  flag=checkDateInput(dob)
    if(flag==false){
    console.log(chalk.red.bgWhite.bold("\nInvalid input.Please enter date in specified date format\n"))
      dob=readlineSync.question(chalk.red.bgWhite.bold("\nEnter your date of birth in above mentioned format: \n"));
      
    }
    
  }while(flag==false);
  return dob;
}

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
  :console.log(chalk.magenta.bgWhite.bold("\n"+username+ ", your birthdate is prime.\n Feel free to share this with your friend circle over social media"));
  
}

