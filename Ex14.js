// spread operator in Array

function sum1(x, y, z) {
    return x + y + z;
}

console.log(sum1(1, 2, 3));
let arr = [10, 20, 30]

//error
//console.log(sum1(arr));

// spread operator
console.log(sum1(...arr));

function sum2(v, w, x, y, z) {
    return v + w + x + y + z;
}

console.log(
    sum2(10, ...arr, 40)
);
// 10 + 10 + 20 + 30 + 40 = 110