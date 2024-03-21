// Spread Operator - Array Copy
// in array
let face = ['eyes', 'nose', 'mouth'];
let head = ['hair', ...face, 'ears'];

console.log(head);

//copy array
let arr1 = [1, 2, 3];
let arrCopy = [...arr1];
let arrCopy_1 = arr1    // call by reference
console.log(arr1);
console.log(arrCopy);
console.log(arrCopy_1);

arrCopy_1.push(4);
console.log("arr1 >>> " + arr1);
console.log("arrCopy >>> " + arrCopy);
console.log("arrCopy_1 >>> " + arrCopy_1);