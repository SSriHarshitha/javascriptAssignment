// JavaScript program to compute the sum of an array of integers

document.getElementById("btn1").onclick = sum_array_elem;


 const arr = [1131,2131.33,2412,765,6496,4974.23,9023];
function sum_array_elem(){
//const arr = JSON.parse(document.getElementById("inputbox1").value);
let len = arr.length;
let sum=0;
for (let i=0;i<len;i++){
    sum+=arr[i];
}
document.getElementById("result1").innerHTML= "Sum of an array elements is " + sum;
// document.write("Sum of an array elements is " + sum);
}

 