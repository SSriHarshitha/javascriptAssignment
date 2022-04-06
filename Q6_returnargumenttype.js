// JavaScript function that accepts an argument and returns the type of argument

document.getElementById("btn6").onclick=argumentType;

function argumentType(){
    document.writeln("Type of the arugment is : " + typeof(document.getElementById("inputbox6").value));
    // return typeof(temp);
}
// const arr=[4,44,2232,2423523,4418987,8723974];
// console.log("Type of the arugment is " + argumentType(arr));