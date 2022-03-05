//1) Given the code below answer, don’t execute the code, in what order you would expect to see the outputs:
const msgPrinter = function(msg,delay){
    setTimeout(() => console.log(msg),delay); //Observe an arrow-function
};
console.log("aaaaaaaaaa");//1st printed
msgPrinter ("bbbbbbbbbb",2000);//5th printed (last)
console.log("dddddddddd");//2nd printed
msgPrinter ("eeeeeeeeee",1000);//4th printed
console.log("ffffffffff");//3rd printed
//2) Add the code to a javascript file, execute and verify whether you answer to 1) was right
//Result: a, d, f, e, b
//Code executes in the order in which it is written - so statements "b" and "e" are executed first,
//but because a delay is added they are not printed out before 2000 and 1000 milliseconds have passed
//respectively. Plenty of time for the compiler to go to the next line and print out "d" and "f"