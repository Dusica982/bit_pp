/*zadatak 10 Write a program that uses console.log to print all the numbers from
1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead
of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
When you have that working, modify your program to print "FizzBuzz", for numbers
 that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers
  divisible by only one of those).
Note: This is actually an interview question that has been claimed to weed out
a significant percentage of programmer candidates. So if you’ve solved it,
you’re now allowed to feel good about yourself.*/



var i = 0;

for (i = 0; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    } else if (i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    }
}



/* zadatak 
1 Write a program that checks if a given element e is in the array a.
Input:  e = 3, a = [5, -4.2, 3, 7]
Output: yes
Input:  e = 3, a = [5, -4.2, 18, 7]
Output: no*/


var a = [5, -4.2, 3, 7];
var e = 3;
var i = 0;



for (i = 0; i < a.length; i++) {
    if (e === a[0]) {
        console.log('yes');
    } else {
        (e != a[0]);
    }
    console.log('no');
}


/* zadatak 2
Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8]
*/

var array = [-3, 11, 5, 3.4, -8];
for (i = 0; i < array.length; i++) {
    if (array[i] > 0) {
        array[i] = array[i] * 2;
    }
}
console.log(array);



/* zadatak 3
Write a program that finds the minimum of a given array and prints out its value and index. 
Input array: [4, 2, 2, -1, 6]
Output: -1, 3
*/

var array = [4, 2, 2, -1, 6];
var min = array[0];
var minIndex;

for (var i = 0; i < array.length; i++) {
    if (array[i] < 0) {
        min = array[i];
        minIndex = i;
    }
}
console.log(min, minIndex);

/* zadatak 4
Write a program that finds the first element larger than minimum and prints out its value.
Input array: [4, 2, 2, -1, 6]
Output: 2
*/

var array = [4, 2, 2, -1, 6];

var min1, min2;

if (array[0] > array[1]) {
    min1 = array[1]
    min2 = array[0]
}
else {
    min1 = array[0]
    min2 = array[1]
}

for (var i = 2; i < array.length; i++) {
    if (array[i] < min1) {
        min2 = min1
        min1 = array[i]
    }
    else if (array[i] < min2) {
        min2= array[i]
    }
}
console.log(min2);


/*zadatak 5
Write a program that calculates the sum of positive elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16
*/

var a = [3, 11, -5, -3, 2];
posNum=0;
sum=0;

for (i=0; i<a.length; i++){
    if (a[i]>0)
    sum=sum+a[i];
}

console.log(sum);


/* zadatak 6 
Write a program that checks if a given array is symmetric. An array is symmetric if it can be read the same way both 
from the left and the right hand side.   
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric. */

var array= [2, 4, -2, 7, -2, 4, 2];

var i;
var j;

var sym = true;

for (i = 0, j = array.length - 1; i < j; i++ , j--) {
    if (array[i] !== array[j]) {

        sym = false;
        break;
        
    }
}

if (sym)
console.log('The array is symmetric')
else
console.log('The array is not symmetric')

/*zadatak 7
Write a program that intertwines two arrays. You can assume the arrays are of the same length. 
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
*/

var array1=[4, 5, 6, 2]; 
var array2=[3, 8, 11, 9];
var array3=[];
var i1;
var i2;

for (i1=0, i2=0; i1<array1.length||i2<array2.length ; i1++, i2++){

    array3.push(array1[i1])
    array3.push(array2[i2]);
}
console.log(array3);

/*zadatak 8
Write a program that concatenates two arrays. 
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9] */



var array1=[4, 5, 6, 2]; 
var array2=[3, 8, 11, 9];
var array3=[];
var i1;
var i2;

for (i1=0, i2=0; i1<array1.length||i2<array2.length ; i1++, i2++){

    array3.push(array1[i1])
    array3.push(array2[i2]);
}
console.log(array3);




/* zadatak 9
Write a program that deletes a given element e from the array a. 
Input: e = 2, a = [4, 6, 2, 8, 2, 2]
Output array: [4, 6, 8] */



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






/* zadatak 10
Write a program that inserts a given element e on the given position p in the array a. 
If the value of the position is greater than the array length, print the error message. 
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8]
*/





/////////////////////////////////////////////////////////////////

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






/*
for (inicijalizacija; uslov; azuriranje) {
    telo for petlje
}
*/

// We would like to find maximal element of the array and its first position
// [5, 9, 11, 3, -5] -- > 11, 2
// [5, 9, -4, 1] -- > 9, 1
// [5, 8, -6, 8] -- > 8, 1
// [9] -- > 9, 0
// [] -- > -


var array = [5, 9, 11, -5, 8, 11, 9, 1];
var max;
var maxIndex;
var i;

max = array[0];
maxIndex = 0;
for (i = 1; i < array.length; i++) {

    if (array[i] > max) {
        max = array[i];
        maxIndex = i;
    }

}
console.log(max, maxIndex);


// We would like to check if the given element appears in the array
// [4, 5, 8, 9], 5 --> true
// [4, 5, 8, 9], 15 --> false


var array = [5, 9, 11, -5, 8, 11, 9, 1];
var element = 8;
var i;
var inArray = false;

for (i = 0; i < array.length; i++) {

    if (array[i] === element) {
        inArray = true;
    }
}

console.log(inArray);


// we would like to print n stars
// n = 3 --> ***
// n = 5 --> *****

var n = 3;
var stars = '';

// i = 1 , stars = '*'
// i = 2 , stars = '**'
// i = 3 , stars = '***' 
for (var i = 1; i <= n; i++) {
    stars = stars + '*';
}
console.log(stars);


// We would like to draw a square of dimension n 
// n = 1 
// *

// n = 2
// * *
// * *

// n = 3 
// * * * 
// *   *
// * * *

// n = 4
// * * * *
// *     *
// *     *
// * * * *


var n = 4;
var line;

for (var row = 1; row <= n; row++) {
    // if we are in the first or the last row
    if (row == 1 || row == n) {
        // we should print n stars
        line = '';
        for (var i = 1; i <= n; i++) {
            line = line + '*';
        }
    } else {
        // otherwise
        // we should print a star, n-2 spaces and a star
        line = '';
        line = line + '*';
        for (var i = 1; i <= n - 2; i++) {
            line = line + ' ';
        }
        line = line + '*';

    }
    // we print the line
    console.log(line);
}
