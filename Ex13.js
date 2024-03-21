// rest operator example
// use "..."
// Math.max(arg1, arg2, ..., argN) -> returns the maximum value of the arguments
// Object.assign(dest, src1,..., srcN) -> copies properties from src1...N into dest
// etc.

// without rest operator

function add(x, y) {
    console.log("x >>>", x)
    console.log("y >>>", y)
    return x + y;
}

console.log(add(1, 2, 3, 4, 5));

function add1(...args) {
    let result = 0;

    for (let arg of args) result += arg;
        return result;
}

console.log("add1(1) >>>", add1(1))
console.log("add1(1, 2) >>>", add1(1, 2))
console.log("add1(1, 2, 3, 4, 5) >>>", add1(1, 2, 3, 4, 5))

// difference between two console.log() function

console.log("sum : " + "text")      // one argument
console.log("sum : ", "text")       // two arguments

// -> console.log() is also function and combines rest operations