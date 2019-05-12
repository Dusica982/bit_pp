/* Function declaration. */
function sum(a, b) {
    return a + b;
}

var result;
result = sum(5, 6);
console.log(result);

/* --------------------------- */

/* Function expression. */
var sum = function (a, b) {
    return a + b;
};

var result;
result = sum(5, 6);
console.log(result);

/* --------------------------- */

/* Function expressions and hoisting. */

/* Original code: */
var result;
result = sum(5, 6);
console.log(result);

var sum = function (a, b) {
    return a + b;
};

/* The interpreter's way after the first stage: */
var result;
var sum;

// result has a value undefined so the call will result with TypeError
result = sum(5, 6);
console.log(result);

sum = function (a, b) {
    return a + b;
};

/* --------------------------- */

/* We can assign a function to other variables. */
var sum = function (a, b) {
    return a + b;
};

var addTwo = sum;
console.log(addTwo(6, 8));
console.log(typeof addTwo);