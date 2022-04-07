// JavaScript program to determine whether a given year is a leap year in the Gregorian calendar

document.getElementById("btn3").onclick=leapYear;

function leapYear()
{
    let year_value= document.getElementById("inputbox3").value;
    if(year_value%100 == 0)
    {
        if(year_value%400 ==0){
            document.getElementById("result3").innerHTML= year_value + " is a leap year";
            // document.writeln(year_value + " is a leap year");
        } 
        else{
            document.getElementById("result3").innerHTML= year_value + " is not a leap year";
            // document.writeln(year_value + " is not a leap year");
        }
    }
    else
    {
        if(year_value%4==0)
        {
            document.getElementById("result3").innerHTML= year_value + " is a leap year";
            // document.writeln(year_value + " is a leap year");
        }
        else{
            document.getElementById("result3").innerHTML= year_value + " is not a leap year";
            // document.writeln(year_value + " is not a leap year");
        }
    }
}