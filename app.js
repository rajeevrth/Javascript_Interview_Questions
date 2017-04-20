//1. What will the code below output to the console and why?
var a = b = 3;

console.dir(a);
console.dir(b);
console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));