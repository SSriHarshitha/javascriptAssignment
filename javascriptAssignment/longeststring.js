// JavaScript function that accepts a string as a parameter and finds the longest word within the string
let myString = "Lorem Ipsum is simply dummy text of the printing and typesetting industry";
const myArray = myString.split(" ");
let maxLen=0,longestWord="";
for(let i=0;i<myArray.length;i++)
{
    let str="",len=0;
    str = myArray[i].toString();
    len = str.length;
    // console.log(myArray[i] +" " + "length:" +  len);
    if(len>maxLen){
        maxLen=len;
        longestWord = str;
    }
}
console.log("Longest word is : " + longestWord + "\n the length is :" + maxLen);