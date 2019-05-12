// loops
for (var i = 1; i < 5; i++) {
    console.log(i);
}

// i <-- 5

if (i == 10) {
    console.log('I is 10.');
}
else {
    console.log('I is not 10.');
}

/* FROM FOR TO WHILE */
/* print numbers from 1 to 9 */

var i;
for (i = 1; i < 10; i++) {
    console.log(i);
}

var i;
i = 1;
while (i < 10) {
    console.log(i);
    i = i + 1;
}


/* NUMBER AS STRING */

var number = 389545;
var numberAsString = '' + number;
console.log(numberAsString.length);

/*
345

345 % 10 = 5
(345 - 5) / 10 = 34

34 % 10 = 4
(34 - 4) / 10 = 3

3 % 10 = 3
(3 - 3) / 10 = 0

0
*/

var number = 895345;
var counter = 0;

while (number != 0) {

    lastDigit = number % 10;
    //console.log(lastDigit);
    counter++;
    number = (number - lastDigit) / 10;
}
console.log(counter);


/* FROM WHILE TO DO-WHILE */

var i;
i = 1;
do {
    console.log(i);
    i++;
} while (i < 10);


/* Check if an element e is in an array a */
var a = [6, 9, 23, 6, 1, 7, 9, 66, 45, 23, 65];
var e = 1;

for (var i = 0; i < a.length; i++) {
    if (a[i] == e) {
        break;
    }
}

if (i < a.length) {
    console.log('In array');
} else {
    console.log('Not in array');
}

/* Break */
for (var i = 1; i < 10; i++) {

    console.log(i);

    if (i > 5 && i < 8) {
        break;
    }
}

/* Continue */
for (var i = 1; i < 10; i++) {
    if (i % 2 == 0) {
        continue;
    }

    console.log(i);
}


for (var i = 1; i < 10; i++) {

    if (i > 5 && i < 8) {
        continue;
    }

    console.log(i);
}


/* Find a sum of non-undefined values */
var total = 0;
var data = [undefined, 1, 2, 3, undefined, 4];

for (i = 0; i < data.length; i++) {
    if (!data[i]) {
        continue;
    }
    total += data[i];
}

console.log(total);

/* Find a sum of non-undefined values - old way */
var total = 0;
var data = [undefined, 1, 2, 3, undefined, 4];

for (i = 0; i < data.length; i++) {
    if (data[i] != undefined) {
        total += data[i];
    }
}
console.log(total);


/* Compare two arrays */
var a = [4, 5, 8, 9];
var b = [4, 5, 18, 9, 7];
var isEqual;

if (a.length == b.length) {
    // comparison element wise
    for (var i = 0; i < a.length; i++) {
        if (a[i] != b[i]) {
            isEqual = false;
            break;
        }
    }

    if (i == a.length) {
        isEqual = true;
    }

} else {
    isEqual = false;
}

console.log(isEqual);


/* print nested arrays as 2d (matrices ;)) */
//I
var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27]];

for (var i = 0; i < a.length; i++) {
    var innerArray = a[i];

    var innerArrayAsString = '';
    for (var j = 0; j < innerArray.length; j++) {
        innerArrayAsString += " " + innerArray[j];
    }

    innerArrayAsString += '\n';
    console.log(innerArrayAsString);
}

// II
var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27]];

for (var i = 0; i < a.length; i++) {

    var innerArrayAsString = '';
    for (var j = 0; j < a[i].length; j++) {
        innerArrayAsString += " " + a[i][j];
    }

    innerArrayAsString += '\n';
    console.log(innerArrayAsString);
}