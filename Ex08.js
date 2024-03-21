// function declaration example

/* 
    function fname (parameter list) {
        function statements;
        return value(s);    // return statament is optional
    }
*/

// Use "=>" instead of "function"

// function declaration with name example
function getArea (width, height) {
    var area = width * height
    return area
}

var wallSize = getArea(3, 2)
console.log(wallSize)

// function declaration without a name example
/*
    var vname = function (parameter list) {
        function statements;
        return value(s);    // return statament is optional
    }
*/

var getArea2 = function(width, height) {
    return width * height;
};

var wallSize = getArea2(3, 2)
console.log(wallSize)

// Immediately invoked function expression example

var area = (function() {
    var width = 3;
    var height = 2;
    return width * height;
}())

console.log(area)