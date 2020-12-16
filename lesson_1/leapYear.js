var readlineSync = require('readline-sync');
var chalk =require('chalk')
var username = readlineSync.question(chalk.white.bgBlue.bold("Welcome! \n Please enter your name to proceed towards checking if you are born in a leap year \n"));
//var year = readlineSync.question(chalk.white.bgBlue.bold("Thanks "+username+" Enter your birth year to check if it was a leap year or not.\n Year: "));


console.log(chalk.white.bgBlue.bold("\n Enter the date in following format:\n DD-MM-YYYY \n 25-12-2020\n"))
dob=readlineSync.question(chalk.white.bgBlue.bold("\nEnter your date of birth in above mentioned format: "))


function checkDateInput(date)
{
  
  var [daycheck,monthcheck,yearcheck]=date.toString().split("-")
  //console.log("daycheck: "+daycheck+" monthcheck: "+monthcheck+" yearcheck:"+ yearcheck)
  if(monthcheck===null|| monthcheck==" "||yearcheck==" "||yearcheck===null||daycheck<1||daycheck>31){
  return false;
  }
  else {
   
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
  return dob;
  }while(flag==false);

}





function leapYearCalc(year){
  if((year% 4 == 0 && year%100!= 0)||( year% 400 == 0)){
    console.log(chalk.blue.bgWhite.bold("\n"+username+ ", your birth year: "+year+" is a leap year.\n Feel free to share this with your friend circle over social media"));
  } 
  else{
    console.log(chalk.red.bgWhite.bold("\n"+username+", you were not born in a leap year!"));
  }
}
dob=setDate(dob);

function getyearfromDOB(dob){
var [finalday,finalmonth,finalyear]=dob.toString().split("-");
//console.log("finalday: "+ finalday+" finalmonth: "+finalmonth+" finalyear: "+finalyear)
//console.log("finalyear value is: "+finalyear)
return finalyear;
}
var finalyear=getyearfromDOB(dob)
leapYearCalc(finalyear);