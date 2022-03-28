// JavaScript program to get the first n Fibonacci numbers

function fibonacci(num){
    let fib1=0, fib2=1,temp=0;
    console.log("The first " + num + " fibonacci numbers are \n");
    console.log(fib1);
    num-=1;
    while(num>0){
        console.log(fib2);
        temp=fib1+fib2;
        fib1=fib2;
        fib2=temp;
        num--;
    }
}
fibonacci(10);