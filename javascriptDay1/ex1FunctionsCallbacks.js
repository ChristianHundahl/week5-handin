//1) Create a new JavaScript file and add these three functions
//Observe: no return type, no type on parameters
function add(n1, n2){
    return n1 + n2;
}
console.log(add(3,3))

function sub(n1, n2){
    return n1 - n2;
}
console.log(sub(3,3))

function cb(n1,n2, callback){
    return "Result from the two numbers: "+n1+" and "+n2+" = "+callback(n1,n2);
}
console.log(cb(3,3,sub))

//2) Call the functions above as sketched below. It’s not about doing it as fast as you can,
// but about understanding what's happening, so make sure you understand each line.
console.log(add(1,2));        // What will this print?  -> 3
console.log(add);// What will it print and what does add represent? -> [Function: add] represents a function
console.log(add(1,2,3) );     // What will it print     -> 3
console.log(add(1) );         // What will it print         -> NaN
console.log(cb(3,3,add));     // What will it print     -> Result from the two numbers: 3 and 3 = 6
console.log(cb(4,3,sub));     // What will it print     -> Result from the two numbers: 4 and 3 = 1
//console.log(cb(3,3,add())); // What will it print (and what was the problem) -> prints nothing, throws error
//"callback is not a function" this is because we write call back with parenthesis
//Therefore it evaluates as a function immediately, instead of recognizing it as a reference
//Because the function is empty, it cannot compile and returns an error
console.log(cb(3,"hh",add));  // What will it print     -> Result from the two numbers: 3 and hh = 3hh

//4)  Write a mul(n1, n2) function (inspired by add and sub) and use it as the callback for the cb function
function mul(n1, n2){
    return n1 * n2;
}
console.log(mul(3,3))

// 5) Call cb, this time with an anonymous function that divides the first argument with the second
console.log(cb(3,3,function(n1, n2) {
    return n1/n2
}));