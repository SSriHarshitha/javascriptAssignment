// JavaScript program to determine whether a given year is a leap year in the Gregorian calendar
function leapYear(year_value)
{
    if(year_value%100 == 0)
    {
        if(year_value%400 ==0){
            console.log(year_value + " is a leap year");
        }
        else{
            console.log(year_value + " is not a leap year");
        }
    }
    else
    {
        if(year_value%4==0)
        {
            console.log(year_value + " is a leap year");
        }
        else{
            console.log(year_value + " is not a leap year");
        }
    }
}

leapYear(2122);