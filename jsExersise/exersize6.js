/*  task1
Write a function to count vowels in a provided string. If you are  not aware of indexOf function, try to use switch statement.
Vowels are a, e, i, o, and u as well as A, E, I, O, and U. */
function isVowels(word) {
    var sum = 0;

    for (var i = 0; i < word.length; i++) {
        if (
            word[i] === 'a' ||
            word[i] === 'e' ||
            word[i] === 'i' ||
            word[i] === 'o' ||
            word[i] === 'A' ||
            word[i] === 'E' ||
            word[i] === 'I' ||
            word[i] === 'O'
        ) {
            sum = sum + 1;
            // console.log(sum);
        }
    }

    return sum;

}

var a = 'popokatepetl';
console.log(isVowels(a));
/* task2
Write a function that combines two arrays by alternatingly taking elements.

[‘a’,’b’,’c’], [1,2,3] -> [‘a’,1,’b’,2,’c’,3] */
function combine(arr1, arr2) {
    var combo = [];
    var j;
    for (var i = 0, j = 0; i < arr1.length; i++ , j++) {
        combo[j] = arr1[i];
        j++;
        combo[j] = arr2[i];


    }
    return combo;
}
var a = ['a', 'b', 'c'];
var b = [1, 2, 3];
console.log(combine(a, b));








/* task3
Write a function that rotates a list by k elements.

For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]*/
function rotate(list, k) {
    var newList = [];
    var j = 0;
    for (var i = 0; i < list.length; i++) {
        if (i > k - 1) {
            newList[j] = list[i];
            j++;
            //console.log(newList);
        }
    }

    for (i = 0; i < k; i++) {
        newList[j] = list[i];
        j++;
    }

    return newList;
}

var list = [1, 2, 3, 4, 5, 6];
var k = 2;
console.log(rotate(list, k));






/*task4
Write a function that takes a number and returns array of its digits
 */
function numToArr(numbers) {
    var convert = numbers.toString();
    var arrayOfNum = [];
    for (var i = 0; i < convert.length; i++) {
        arrayOfNum[i] = parseInt(convert[i]);
    }
    return arrayOfNum;
}
var num = 53459458298;
console.log(numToArr(num));

/* task5 
Write a program that prints a multiplication table for numbers up to 12.
*/
function multiTable(num) {
    var res = [];

    var strnumbers = '';
    var strresult = '';

    for (var i = 0; i <= num; i++) {
        for (var j = 1; j <= num; j++) {
            strnumbers = i + ' * ' + j + ' = ';
            strresult = '' + i * j;
            res[i] = strnumbers + strresult;


        }
    }
    return res;
}
var num = 12;
console.log(multiTable(num));





/*task6
Write a function to input temperature in Centigrade and convert to Fahrenheit.
*/
function celsiusToFahrenheit(tempC) {
    var tempF;
    if (typeof tempC === 'number' || isFinite(tempC)) {
        tempF = 'temperature in fahrenheit is ' + ((tempC * 9 / 5) + 32);
    } else {
        tempF = 'input is not valid';
    }
    return tempF
}
console.log(celsiusToFahrenheit(40));



/*task7
Write a function to find the maximum element in array of numbers. Filter out all non-number elements.
*/

function maxEl(someArr) {
    var max = someArr[0];

    for (var i = 0; i < someArr.length; i++) {
        if (max < someArr[i] && typeof someArr[i] === 'number') {
            max = someArr[i];
            console.log(max);

        }
    }
    return max;
}
var a = [1, 555, 38, -33, 'bla', 'bla'];
console.log(maxEl(a));

/*task8
Write a function to find the maximum and minimum elements. Function returns an array.
 */
function maxMin(someArr) {
    var min = someArr[0];
    var max = someArr[0];
    var newArr = [];
    var j = 0;
    for (var i = 0; i < someArr.length; i++) {
        if (min > someArr[i]) {
            min = someArr[i];

        }
        if (max < someArr[i]) {
            max = someArr[i];
        }
    }

    newArr[j] = max;
    newArr[j + 1] = min;
    return newArr;
}
var a = [1, 23, 543, -4,];
console.log(maxMin(a));
/* task9
Write a function to find the median element of array.
*/

function numMedian(someArr) {
    var medianEl;
    var median = someArr.length - 1;
    if (median % 2 === 0) {
        median = median / 2;
    }
    else {
        median = (median - 1) / 2;
    }
    medianEl = 'median result is ' + someArr[median]
    return medianEl;
}
var a = [1, 555, 38, -33, 'bla', 'bla'];
console.log(numMedian(a));


/*task10
Write a function to find the element that occurs most frequently.
*/
function freq(someArr) {
    var elFreq = [];
    var k = 0;
    for (var i = 0; i < someArr.length; i++) {

        elFreq[k] = someArr[i]
        k++;
    }
}

return elFreq;
}
var a = ['str', 'bla', 'bla', 1, 1, 1, 1, 1, 1, 1, 1];
console.log(freq(a));

/*task11
Write a function to find and return the first, middle and last element of an array if the array has odd number of elements. If number of elements is even, return just the first and the last. In other cases (empty array), input array should be returned.
*/
function firstLastMidleEl(someArr) {
    var first;
    var last;
    var midle;

    var res = '';
    for (var i = 0; i < someArr.length; i++) {
        if (someArr.length % 2 !== 0) {
            first = someArr[0];
            last = someArr[someArr.length - 1];
            midle = someArr[(someArr.length - 1) / 2];
        }
        else {
            first = someArr[0];
            last = someArr[someArr.length - 1];
            midle = someArr[someArr.length / 2];

        }
    }
    res = 'first element is ' + first + ' midle is ' + midle + ' and the last is ' + last;
    return res;
}

var a = [32, 43, 54, 23, 5, 41, 42, 64, 52, 9, 10; 11];
console.log(firstLastMidleEl(a));



/*task12
Write a function to find the average of N elements. Make the function flexible to receive dynamic number or parameters.

*/
function average(someArr) {
    var sumOfelement = 0;
    var averageNum = 0;

    for (var i = 0; i < someArr.length; i++) {
        if (typeof someArr[i] === 'number') {
            sumOfelement += someArr[i];
        }
    }
    averageNum = sumOfelement / someArr.length;

    return averageNum;
}
var a = [32, 43, 54, 23, , 41, 42, 64, 52];
console.log(average(a));



/*task13
Write a function to find all the numbers greater than the average.*/
function graterThanAvg(someArr) {
    var sumOfelement = 0;
    var averageNum = 0;
    var greaterAr = [];
    var j = 0;
    for (var i = 0; i < someArr.length; i++) {
        if (typeof someArr[i] === 'number') {
            sumOfelement += someArr[i];
        }
    }
    averageNum = sumOfelement / someArr.length;
    for (var i = 0; i < someArr.length; i++) {
        if (someArr[i] > averageNum) {
            greaterAr[j] = someArr[i];
            j++;
        }

    }
    return greaterAr;
}

var a = [32, 43, 54, 23, , 41, 42, 64, 52];
console.log(graterThanAvg(a));
/*task14
The body mass index (BMI) is the ratio of the weight of a person (in kilograms) to the square of the height (in meters). Write a function that takes two parameters, weight and height, computes the BMI, and prints the corresponding BMI category:
Starvation: less than 15
Anorexic: less than 17.5
Underweight: less than 18.5
Ideal: greater than or equal to 18.5 but less than 25
Overweight: greater than or equal to 25 but less than 30
Obese: greater than or equal to 30 but less than 40
Morbidly obese: greater than or equal to 40*/


function bodyMassInd(height, weight) {
    var sqareheight = height * height;
    var bmi = weight / sqareheight;
    var status = '';
    console.log(bmi);

    if (bmi < 15) {
        status = 'starvation';
    } else if (bmi < 17.5) {
        status = 'anorexic';
    } else if (bmi < 18.5) {
        status = 'underweiht';
    } else if (bmi < 25 && bmi >= 18.5) {
        status = 'ideal';
    } else if (bmi > 25 && bmi <= 30) {
        status = 'overweight';
    }
    else if (bmi < 40 && bmi >= 30) {
        status = 'obese';
    } else if (bmi >= 40) {
        status = 'morbidly obese'

    }
    return status
}
console.log(bodyMassInd(1.78, 80));



/*task15
Write a function that takes a list of strings and prints them, one per line, in a rectangular frame.:

For example the list ["Hello", "World", "in", "a", "frame"] gets printed as:
*********()
* Hello *
* World *
* in    *
* a     *
* frame *
*********
 */

function messageInframe(messsage) {
    var maxelementLength = message[0].length;
    var res = '';
    var numberOfwords = 0;
    for (var i = 0; i < messsage.length; i++) {
        if (message[i].length > maxelementLength) {
            maxelementLength = message[i].length;
        }
    }
    for (i = 0; i < message.length + 4; i++) {
        for (var j = 0; j < maxelementLength + 4; j++) {
            if (i === 0 || j === 0 || i === message.length + 2 || j === maxelementLength + 2) {
                res += '*';
            } else if (j === 1 || j === maxelementLength + 2) {
                res += '';
            } else if (j === 2 && i < message.length) {
                res += message[numberOfwords++];
            }
        }


        res += '/n';
    }


    return res;
}

var message = ['zdravo', 'bre'];
messageInframe(message);

/*
Write a program that inserts a given element e on the given position p in the array a. If the value of the position is
greater than the array length, print the error message. 
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8]*/
function insertInArr(someArr, element, position) {
    var res;
    var newar = [];
    if (position < someArr.length) {
        for (var i = 0; i < someArr.length; i++) {
            if (i === position) {
                newar[i] = element;
            } else {
                newar[i] = someArr[i];
            }
        }
        res = newar;

    } else {
        res = 'Error - position is out of range';
    }

    return res;
}
var str = [2, -2, 33, 12, 5, 8];
console.log(insertInArr(str, 78, 12));

