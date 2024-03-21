// for loop example
/*
    for (statement 1; statement 2; statement 3) {
        code block to be executed
    }
*/

// while loop example
/*
    while (condition) {
        code block to be executed
    }
*/

// do while loop example
/* 
    do {
        code block to be executed
    } while (condition);
*/

// for in loop example  --> use in object
/*
    for (variable in enumerable) {
        code block to be executed
    }
*/

var person = {fname : "John", lname : "Doe", age : 25}
var text = ""
for (const key in person) {
    text += person[key]
    console.log("Key : " + key)
    console.log("Value : " + person[key])
}

console.log(text)