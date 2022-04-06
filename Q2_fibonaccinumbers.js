// JavaScript program to get the first n Fibonacci numbers

document.getElementById("btn2").onclick=fibonacci;

function fibonacci(){

    let num = parseInt(document.getElementById("inputbox2").value);
    let fib1=0, fib2=1,temp=0;
    const arr = [];
    // arr[0] = fib1;
    document.writeln(fib1);
    // console.log("The first " + num + " fibonacci numbers are \n");
    // console.log(fib1);
    let i=1;
    num-=1;
    while(num>0){
        // arr[i] = fib2;
        // console.log(fib2);
        document.writeln(fib2);
        temp=fib1+fib2;
        fib1=fib2;
        fib2=temp;
        num--;

        // i++;
    }
}