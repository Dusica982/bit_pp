/* zadatak 1
Write a program that checks if a given element e is in the array a. 
Input:  e = 3, a = [5, -4.2, 3, 7]
Output: yes

Input:  e = 3, a = [5, -4.2, 18, 7]
Output: no
*/

var a = [5, -4.2, 3, 7];
var e = 3;
var result = false;

for (var i = 0; i < a.length; i++) {
    if (e == a[i]) {
        result = true;
    }
}
if (result == true) {
    console.log("Yes");
} else {
    console.log("No")
}

//////////////////////////////////resenje preko f-je

function numInArray(arr, elem) {
    var result = false;
    for (var i = 0; i < arr.length; i++) {
        // console.log(elem === arr[i]); console.log je praktican za pracnje gresaka u kodu
        if (elem === arr[i]) {
            result = true;
        }
    }
    return result;
}

var a = [5, -4.2, 3, 7];
console.log(numInArray(a, 3));


/* zadatak 2
Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8]*/

var a = [-3, 11, 5, 3.4, -8];


for (var i = 0; i < a.length; i++) {
    if (a[i] > 0) {
        a[i] = a[i] * 2;
    }
}
console.log(a);

//resenje preko funkcije


function double(a) {

    for (var i = 0; i < a.length; i++) {
        if (a[i] > 0) {

            a[i] = a[i] * 2;

        }
    } return a;
}

var a = ([-3, 11, 5, 3.4, -8]);
console.log(double(a));



/* zadatak 3

Write a program that finds the minimum of a given array and prints out its value and index.
Input array: [4, 2, 2, -1, 6]
Output: -1, 3

*/

function minimum(a) {
    var min = a[0];

    for (var i = 0; i < a.length; i++) {
        if (min > a[i]) {
            min = a[i];
        }
    }
    var res = "Min value is" + min;
    return res;
}



var a = ([4, 2, 2, -1, 6]);
console.log(minimum(a));


/* 4 zadatak
Write a program that finds the second smallest number and prints out its value. 
Input array: [4, 2, 2, -1, 6]
Output: 2
*/


function secondMin(arr) {
    var min = arr[0];
    var secondMin = arr[0];

    for (var i = 0; i < arr.length; i++) {
        var currentNum = arr[i];

        if (min > currentNum) {
            min = currentNum;
        }
    }
    for (var j = 0; j < arr.length; j++) {

        var currentNum = arr[j];
        if (min < currentNum && currentNum < secondMin) {
            secondMin = currentNum;
        }
    }
    return secondMin;
}

var res = secondMin([4, 2, 2, -1, 6]);
console.log(res);




/* ZADATAK 5

Write a program that calculates the sum of positive elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16

*/


function sumsum(a) {
    var sum = 0;
    for (var i = 0; i < a.length; i++) {

        if (a[i] > 0) {
            sum = sum + a[i];
        }

    } return sum;

}

var a = ([3, 11, -5, -3, 2]);
console.log(sumsum(a));



/*function sumsum(a) {

    for (var i = 0; i < a.length; i++) {
var sum = 0;   GRESKA! kad varijabla stoji u for-u pri svakoj iteraciji se gazi prethodna vrednost i upisuje nova, uporedi rezultat kad je u foru i van fora.
        if (a[i] > 0) {
            sum = sum + a[i];
        }

    } return sum;

}

var a = ([3, 11, -5, -3, 2]);
console.log(sumsum(a));




/*
zadatak 6

Write a program that checks if a given array is symmetric. An array is symmetric if it can be read the same way both from the left and the right hand side.   
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.
*/


function niz(array) {
    var i;
    var j;
    var isSym = true;

    // for (i = 0, j = array.length - 1; i < j; i++ , j--) {
    //     console.log(array[i], array[j]);
    //     if (array[i] !== array[j]) {
    //         isSym = false;
    //     }
    // } return isSym;

    for (var i = 0, j = array.length - 1; i < array.length / 2; i++ , j--) {  //rade obe opcije, 
        if (array[i] !== array[j]) {
            return false;
        }
    }
    return true;
}


var array = ([2, 4, -2, 7, 5, -2, 4, 2]);
console.log(niz(array));