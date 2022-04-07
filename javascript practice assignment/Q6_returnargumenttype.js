// JavaScript function that accepts an argument and returns the type of argument

document.getElementById("btn6").onclick=argumentType;

function argumentType(temp){
    const arr=[4,44,2232,2423523,4418987,8723974];
    document.getElementById("result6").innerHTML= "Type of the arugment is : " + typeof(arr);
    // document.writeln("Type of the arugment is : " + typeof(arr));
    // return typeof(temp);
}
// document.getElementById("result6").innerHTML= argumentType(23);
