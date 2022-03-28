// JavaScript program to compute the sum of an array of integers

const arr = [1131,2131.33,2412,765,6496,4974.23,9023];
let len = arr.length;
let sum=0;
for (let i=0;i<len;i++){
    sum+=arr[i];
}
console.log("Sum of the array items is : " + sum);