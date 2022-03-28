// JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19

function absoluteDifferenceNum(num){
    let temp = num - 19;
    if(temp>0)
    {
        return temp**3;
    }
    return temp*-1;
}

console.log("Result for the absolute difference of numbers : \n" + absoluteDifferenceNum(25));