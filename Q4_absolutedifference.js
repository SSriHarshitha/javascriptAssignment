// JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19

document.getElementById("btn4").onclick=absoluteDifferenceNum;

function absoluteDifferenceNum(){
    let num = document.getElementById("inputbox4").value;
    let temp = num - 19;
    if(temp>0)
    {
        document.getElementById("result4").innerHTML= "Result for the absolute difference of numbers : " + temp**3;
        // document.writeln("Result for the absolute difference of numbers : \n" + temp**3);
    }
    else
    {
        document.getElementById("result4").innerHTML= "Result for the absolute difference of numbers : " + temp-1;
        // document.writeln("Result for the absolute difference of numbers : \n" +  temp*-1);
    }
}
