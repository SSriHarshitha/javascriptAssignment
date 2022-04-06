// JavaScript program to compute the sum of an array of integers

document.getElementById("btn1").onclick = sum_array_elem;


// const arr = [1131,2131.33,2412,765,6496,4974.23,9023];
function sum_array_elem(){
const arr = document.getElementById("inputbox1").value;

document.writeln(typeof(arr));
let len = arr.length;
let sum=0;
for (let i=0;i<len;i++){
    sum+=arr[i];
}
document.write(sum);
}



// document.getElementById("result").innerHTML= (sum_array_elem(arr));