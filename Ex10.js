function add1(x, y) {
    return x + y;
}

const add2 = (x, y) => {
    return x + y;
};

const add3 = (x, y) => x + y;
const add4 = (x, y) => (x + y);     // use it in long code

console.log(add1(1, 2));
console.log(add2(2, 4));
console.log(add3(3, 2));
console.log(add4(4, 3));