/* Function that creates new array from the elements of the given array by increasing them by one. */

function addOne(array) {
    var newArray = [];

    for (var i = 0; i < array.length; i++) {
        newArray[i] = array[i] + 1;
    }

    return newArray;
}

var a = [3, 4, 7];
var newA;

newA = addOne(a);
console.log(newA);

/* --------------------------- */

/* Function that creates a new array from the elements of the given array by doubling them. */
function double(array) {
    var newArray = [];

    for (var i = 0; i < array.length; i++) {
        newArray[i] = array[i] * 2;
    }

    return newArray;
}

var a = [3, 4, 7];
var newA;

newA = double(a);
console.log(newA);

/* --------------------------- */

var a = [4, 16, 8];
var newA;

/* Function that creates a new array from the elements of the given array by applying function f. */
function change(array, f) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        newArray[i] = f(array[i]);
    }

    return newArray;
}


var addOneHelper = function (n) {
    var result;
    result = n + 1;
    return result;
};

// Previous is the same as the following code:
// function addOneHelper(n) {
//     return n + 1;
// }

/* The result is equivalent to addOne(a) call. */
newA = change(a, addOneHelper);
console.log(newA);


var doubleHelper = function (n) {
    return n * 2;
}

/* The result is equivalent to double(a) call. */
newA = change(a, doubleHelper);
console.log(newA);


/* If we need a new transformation of the given array, we need only a new helper function. */
var triple = function (n) {
    return n * 3;
};

newA = change(a, triple);
console.log(newA);


