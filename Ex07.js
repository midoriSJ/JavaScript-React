// for of loop example  --> use in array

/*
    for (variable of iterable) {
        code block to be executed
    }
*/

var person = ["John", "Doe", 25]
var text = ""

for (const value of person) {
    text += value
    console.log("Value : " + value)
}
console.log(text)