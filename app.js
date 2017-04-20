//1. What will the code below output to the console and why?
var a = b = 3;

console.dir(a);
console.dir(b);
console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));

//2. What will the code below output to the console and why?
var obj = {
    name: 'Rajeev',
    myName: function () {
        var my = this;
        console.log("outer func:  this.foo = " + this.name);
        console.log("outer func:  this.foo = " + my.name);
    }
}
obj.myName();

//3. What will the code below output to the console and why?
function foo1() {
    return {
        bar: "hello"
    };
}

function foo2() {
    return 
    {
        bar: "hello"
    };
}

console.log("foo1 returns:");
console.log(foo2()); //=> undefined
/*Returns Undefined because , when the line containing the return statement (with nothing else on the line) is encountered in foo2(), 
a semicolon is automatically inserted immediately after the return statement.*/
console.log("foo2 returns:");
console.log(foo1()); //=> Object {bar: "hello"}
                        // bar:"hello"