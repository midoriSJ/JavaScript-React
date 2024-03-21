// not(!) function
// change "true to false" or "false to true"

var x = true;

function not1(x) {
    return !x;
}

const not2 = x => !x;

console.log(not1(x));
console.log(not2(x));