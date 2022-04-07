// JavaScript program to get the first n Fibonacci numbers

document.getElementById("btn2").onclick=fibonacci;

function fibonacci(){

    let num = parseInt(document.getElementById("inputbox2").value);
    let fib1=0, fib2=1,temp=0;
    const arr = [];
    // document.getElementById("result2").innerHTML= "The first " + num + " fibonacci numbers are ";
    // document.getElementById("result2").innerHTML= fib1;
    document.writeln("The first " + num + " fibonacci numbers are ") 
    document.writeln(fib1);
    num-=1;
    while(num>0){
        // document.getElementById("result2").innerHTML= fib2;
         document.writeln(fib2);
        temp=fib1+fib2;
        fib1=fib2;
        fib2=temp;
        num--;
    }
}