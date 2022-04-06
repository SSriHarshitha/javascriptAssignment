// JavaScript program to sort the items of an array

document.getElementById("btn8").onclick=sortArray;
function sortArray()
{
    const arr_str = document.getElementById("inputbox8").value;
    arr_str.sort(function(a, b){return a - b});
    document.writeln("Given array is sorted in ascending order \n" + arr_str);
}
