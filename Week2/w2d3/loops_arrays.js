//postavljeno W2D3

// We would like to check if array is symmetric

// I
var array = [4, 5, 8, 8, 5, 4];
var isSym = true;

var i, j;

for (i = 0, j = array.length - 1; i < j; i++ , j--) {
    if (array[i] !== array[j]) {
        isSym = false;
    }
}

console.log(isSym);

// II
// 0 , array.length - 1
// 1, array.length - 2
// 2, array.length - 3
// ...
// i, array.length - i - 1

var array = [4, 5, 8, 8, 5, 4];
var isSym = true;
var i;

for (i = 0; i < array.length / 2; i++) {
    if (array[i] != array[array.length - i - 1]) {
        isSym = false;
    }
}
console.log(isSym);


// We would like to revere an array
// I
var array = [6, 7, 9, 9, 7, 19];
var arrayReversed = [];
var i;
var j;

j = array.length - 1;
for (i = 0; i < array.length; i++) {
    arrayReversed[j] = array[i];
    j--;
}
console.log(arrayReversed);


// II
var array = [6, 7, 9, 9, 7, 19];
var arrayReversed = [];
var i;

for (i = 0; i < array.length; i++) {
    arrayReversed[array.length - 1 - i] = array[i];
}
console.log(arrayReversed);



// We would like to write a program that deletes a given element e from the array a. 
// e = 2, a = [4, 6, 2, 8, 2, 2]

var a = [4, 6, 2, 8, 2, 2];
var i;
var e = 2;

var newA = [];
var j = 0;

for (i = 0; i < a.length; i++) {
    if (a[i] != e) {
        newA[j] = a[i];
        j++;
    }
}

console.log(newA);



