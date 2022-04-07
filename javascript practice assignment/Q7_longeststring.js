// JavaScript function that accepts a string as a parameter and finds the longest word within the string

document.getElementById("btn7").onclick=longestWord;

function longestWord(){
let myString = document.getElementById("inputbox7").value;
const myArray = myString.split(" ");
let maxLen=0,longestWord="";
for(let i=0;i<myArray.length;i++)
{
    let str="",len=0;
    str = myArray[i].toString();
    len = str.length;
    if(len>maxLen){
        maxLen=len;
        longestWord = str;
    }
}
document.getElementById("result7").innerHTML= "Longest word is : " + longestWord + " <br> the length is :" + maxLen;
// document.writeln("Longest word is : " + longestWord + " <br> the length is :" + maxLen);
}

