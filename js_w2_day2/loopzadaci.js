/* zadatak 1
Write a for loop that will iterate from 0 to 15. For each iteration, it will check if the current number 
is odd or even, and display a message to the screen.*/

var i = 0;

for (i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        console.log('even');
    } else {
        console.log('odd');
    }
    console.log(i);
}


//zadatak 2 Write a program to sum the multiples of 3 and 5 under 1000.

var i = 0;
var sum = 0;
for (i = 0; i < 1000; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        sum = sum + i;
    }
}
console.log(sum);


// zadatak 3 Write a program to compute the sum and product of an array of integers.
var a = [15, 46, 85, 24, 96, 87];
var sum = 0;
var product = 1;

for (i = 0; i < a.length; i++) {
    sum = sum + a[i];
    product = product * a[i];
}

console.log(sum, product);



/* zadatak 4 
Write a program which prints the elements of the following array as a single string.
var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];*/


var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];
var sum = "";

for (i = 0; i < x.length; i++) {
    sum = sum + x[i];
}
console.log(sum);

/* zadatak 6 Write a program that outputs the sum of squares of the first 20 numbers. */

var i = 0;
sum = 0;
for (i = 0; i <= 20; i++) {
    sum = sum + i * i;
}
console.log(sum);


//Write a program that computes average marks of the following students. Then use this average to determine the corresponding grade. 
var a = [80, 77, 88, 95, 68];
var i = 0;
var aver = 0;
sum = 0;

for (i = 0; i < a.length; i++) {
    sum = sum + a[i];
}
aver = sum / a.length;
console.log(aver);

var grade = 0;
for (i = 0; i < a.length; i++) {
    if (a[i] < 0.6 * aver) {
        console.log("F");
    } else if (a[i] < 0.7 * aver) {
        console.log("D");
    } else if (a[i] < 0.8 * aver) {
        console.log("C");
    } else if (a[i] < 0.9 * aver) {
        console.log("B");
    } else {
        console.log("A");
    }
}




