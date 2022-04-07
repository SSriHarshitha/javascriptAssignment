// JavaScript program to sort the items of an array

document.getElementById("btn8").onclick=sortArray;
function sortArray()
{
    const arr_str = [4,2,1,7,34,21,0,0.7,2.5];
    arr_str.sort(function(a, b){return a - b});
    document.getElementById("result8").innerHTML= "Given array is sorted in ascending order " + arr_str;
    // document.writeln("Given array is sorted in ascending order " + arr_str);
}
