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






Write a program that intertwines two arrays. You can assume the arrays are of the same length. 
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9]


Write a program that concatenates two arrays. 
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9]


Write a program that deletes a given element e from the array a. 
Input: e = 2, a = [4, 6, 2, 8, 2, 2]
Output array: [4, 6, 8]


Write a program that inserts a given element e on the given position p in the array a. If the value of the position is greater than the array length, print the error message. 
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8]


Try to solve all assignments on a separate branch of bit-pp repository. Don’t forget to pull changes done earlier first and push the new repository to remote when done with all the work at the end.

Write a function to count vowels in a provided string. If you are  not aware of indexOf function, try to use switch statement.
Vowels are a, e, i, o, and u as well as A, E, I, O, and U. 

   

Write a function that combines two arrays by alternatingly taking elements.

[‘a’,’b’,’c’], [1,2,3] -> [‘a’,1,’b’,2,’c’,3]

 

Write a function that rotates a list by k elements.

For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]

 

Write a function that takes a number and returns array of its digits.

 

Write a program that prints a multiplication table for numbers up to 12.

 

Write a function to input temperature in Centigrade and convert to Fahrenheit.

 

Write a function to find the maximum element in array of numbers. Filter out all non-number elements.

 

Write a function to find the maximum and minimum elements. Function returns an array.

 

Write a function to find the median element of array.

 

Write a function to find the element that occurs most frequently.

 

Write a function to find and return the first, middle and last element of an array if the array has odd number of elements. If number of elements is even, return just the first and the last. In other cases (empty array), input array should be returned.

 

Write a function to find the average of N elements. Make the function flexible to receive dynamic number or parameters.

 

Write a function to find all the numbers greater than the average.

 

The body mass index (BMI) is the ratio of the weight of a person (in kilograms) to the square of the height (in meters). Write a function that takes two parameters, weight and height, computes the BMI, and prints the corresponding BMI category:
Starvation: less than 15
Anorexic: less than 17.5
Underweight: less than 18.5
Ideal: greater than or equal to 18.5 but less than 25
Overweight: greater than or equal to 25 but less than 30
Obese: greater than or equal to 30 but less than 40
Morbidly obese: greater than or equal to 40

 


Write a function that takes a list of strings and prints them, one per line, in a rectangular frame.:

For example the list ["Hello", "World", "in", "a", "frame"] gets printed as:
*********
* Hello *
* World *
* in    *
* a     *
* frame *
*********

 

