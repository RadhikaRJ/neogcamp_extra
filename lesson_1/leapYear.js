var readlineSync = require('readline-sync');
var chalk =require('chalk')

var username = readlineSync.question(chalk.white.bgBlue.bold("Welcome! \n Please enter your name to proceed towards checking if you are born in a leap year \n"));


console.log(chalk.white.bgBlue.bold("\n Enter the date in following format:\n DD-MM-YYYY \n 25-12-2020\n"))
dob=readlineSync.question(chalk.white.bgBlue.bold("\nEnter your date of birth in above mentioned format: "))

dob=setDate(dob);

var [finalday,finalmonth,finalyear]=dob.toString().split("-");
leapYearCalc(finalyear);


function checkDateInput(date)
{
  
  var [daycheck,monthcheck,yearcheck]=date.toString().split("-")
 
  if(monthcheck === null ||
         monthcheck === " " || 
         yearcheck === " " || 
         yearcheck === null || 
         isNaN(daycheck) ===true|| 
         isNaN(monthcheck)===true||
         isNaN(yearcheck)||
         monthcheck <1||
         monthcheck>12||
         daycheck<1||
         daycheck>31||
         monthcheck==""||
         daycheck==""||
         yearcheck==""||(monthcheck==2 && daycheck==30)){
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
  
  }while(flag==false);
return dob;
}



function leapYearCalc(year){
  if((year% 4 == 0 && year%100!= 0)||( year% 400 == 0)){
    console.log(chalk.blue.bgWhite.bold("\n"+username+ ", your birth year: "+year+" is a leap year.\n Feel free to share this with your friend circle over social media"));
  } 
  else{
    console.log(chalk.red.bgWhite.bold("\n"+username+", you were not born in a leap year!"));
  }
}



