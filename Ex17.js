// 단골 시험문제!!!

// Object
let drink = {
    caffe : 'latte',
    coca : 'cola'
}

let newDrink = {
    lemon : 'tea',
    orange : 'juice',
    drink       // call by reference
}

console.log(newDrink);

let newDrink_spread = {
    lemon : 'tea',
    orange : 'juice',
    ...drink    // call by value
}

console.log(newDrink_spread);
drink.coca = 'coke'

console.log(newDrink);
console.log(newDrink_spread);