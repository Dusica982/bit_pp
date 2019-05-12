/* zadatak 1

Write a function to count vowels in a provided string. If you are  not aware of indexOf function, try to use switch statement.
Vowels are a, e, i, o, and u as well as A, E, I, O, and U. */


var str ="kafeteria";

function string (a){
    var sum=0;    
    for  (var i=0; i<a.length; i++){
        
        switch (str[i]) {
   
            case "a": 
            case "e":
            case "i":
            case "o":
            case "u":
            case "A":
            case "E":
            case "I":
            case "O":
            case "U":
            
            sum=sum+1;
            break;

            // default: sum="There is no vovwels";
            // break;                                ////kada se stavi i default, on ga pregazi je jer sum stavljeno da je = stringu
            
        }
    }

    if(sum == 0){
        sum="There is no vovwels";
    }


    return sum;
}


console.log (string(str));






   
/* zadatak 2
Write a function that combines two arrays by alternatingly taking elements.

[‘a’,’b’,’c’], [1,2,3] -> [‘a’,1,’b’,2,’c’,3]
*/

function array (array1, array2){
    var newArray = [];

    var i;
   
    for (i=0; i<array1.length; i++){
        newArray[2*i]=array1[i];
        newArray[2*i+1]=array2[i];

    }
    return newArray;

}

var a1 = ["a","b","c"]; 
var a2 =[1,2,3];


console.log(array(a1, a2));











/* zadatak 3
 
Write a function that rotates a list by k elements.

For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]
*/


function rotate (arr, k){
    var i;
    var newArray=[];
    var j = 0; 

    for (i=k; i<arr.length; i++){
        var j = i - k;
        // j++

    	newArray[j] = arr[i];
    }

    for (i = 0; i < k; i++) {
    	j = arr.length - k + i;

    	newArray[j] = arr[i];
    }

    return newArray;

}

console.log(rotate([1,2,3,4,5,6], 2));



 
/*  zadatak 4
Write a function that takes a number and returns array of its digits.
*/
 
/*  zadatak 4
Write a function that takes a number and returns array of its digits.
*/

function digits (n){


    var array=[];
    var elementNumber;
    var i =0;

    while (n) {
        elementNumber=n%10;
        array[i] = elementNumber;
        i++;
        n = (n - elementNumber) / 10;
    }


return array;
}

console.log(digits(357));


/*  zadatak 5

Write a program that prints a multiplication table for numbers up to 4.
*/
 
1*1 1*2 1*3 1*4
2*1 2*2 2*3 2*4
3*1 3*2 3*3 3*4
4*1 4*2 4*3 4*4


function multi (n){

    var i;
    var j;
    var table=""; 

    for (i=1; i<=n; i++){

        for (j=1; j<=n; j++){
            var prod;
            prod = i*j;
            table = table + " " + prod;
        }
        
        table = table + "\n";

    }


    return table;
}

var n=6;
console.log (multi(n));









/* zadatak 5
Write a function to input temperature in Centigrade and convert to Fahrenheit.
*/

function temperature (C){
    var F=0;

    F=1.8*C+32
    return F;
}


var C=0;

console.log (temperature(30));



 
/* zadatak 6
Write a function to find the maximum element in array of numbers. Filter out all non-number elements.
*/
 
function maxElement(a){

    var max;
    var i;
    var newArr=[];
    var j=0;

        //pravimo novi niz

    for (i=0; i<a.length; i++){
        //da li je broj ili ne - parsInt
        var tmp=parseInt(a[i]);

        // parseInt --> number or NaN 
        // isNaN (tmp) -->  true ili false
        if (isNaN(tmp) == false){
            newArr[j] = a[i];
            j++;
        }


    }

        max = newArr[0];
    
    for (i=1; i<newArr.length; i++){
        if(newArr[i]>max){
            max=newArr[i];
        }
    }


    
    return max;
}


var array = [1, true, 124, -4, 4, 50, "ball", NaN];
console.log (maxElement(array));




//  zadatak 7 Write a function to find the maximum and minimum elements. Function returns an array.

function maxandmin (a){

    var i;
    var min=a[0];
    var max=a[0];

    for (i=0; i<a.length; i++){


if(a[i]<min){  
    min=a[i];
} else if (a[i]>max){
    
    max=a[i];

}
maxandmin = [min, max];
}
return maxandmin;
}

var array = [9, 7, 12, 205, 145];

console.log(maxandmin(array));


// zadatak 8 Write a function to find the median element of array.

// ako bismo trazili srednji u nizu, ovako:
function median (a){

    for (var i=0; i<a.length; i++){
    
        var medium;
    
        if (a.lenght%2===0){
        medium=a.length/2;
    } else if(a.length%2===1){
        medium=(a.length+1)/2;
    
    }
    return medium;
    }
    }
    
    var array=[7, 8, 10, 145, 9];
    
    console.log(median(array));

//ako bismo trazili srednji po vrednosti



//  zadatak 9 Write a function to find the element that occurs most frequently.

 

//  zadatak 10 Write a function to find and return the first, middle and last element of an array if the array has odd number of elements. If number of elements is even, return just the first and the last. In other cases (empty array), input array should be returned.

 

//  zadatak 11 Write a function to find the average of N elements. Make the function flexible to receive dynamic number or parameters.

 

//  zadatak 12 Write a function to find all the numbers greater than the average.

 

/* zadatak 13
The body mass index (BMI) is the ratio of the weight of a person (in kilograms) to the square of the height (in meters). Write a function that takes two parameters, weight and height, computes the BMI, and prints the corresponding BMI category:
Starvation: less than 15
Anorexic: less than 17.5
Underweight: less than 18.5
Ideal: greater than or equal to 18.5 but less than 25
Overweight: greater than or equal to 25 but less than 30
Obese: greater than or equal to 30 but less than 40
Morbidly obese: greater than or equal to 40
*/
 


/* zadatak 14
Write a function that takes a list of strings and prints them, one per line, in a rectangular frame.:

For example the list ["Hello", "World", "in", "a", "frame"] gets printed as:
*********
* Hello *
* World *
* in    *
* a     *
* frame *
*********

*/
 

/*  zadatak 15
Write a program that calculates the maximum of two given numbers. 
Input: 4 8
Result: 8
*/




/*  zadatak 16
Write a program that checks if a given number is odd.
Input: 56
Result: No
*/



/*  zadatak 17
Write a program that checks if a given number is a three digit long number.
Input: 567
Result: Yes
*/



/*  zadatak 18
Write a program that calculates an arithmetic mean of four numbers.
Input: 7 5 1 3
Result: 4
*/


 
/*  zadatak 19
Write a program that draws a square of a given size. For example,  if the size of square is 5 the program should draw: 
*****
*    *
*    *
*    *
*****


*/





/*  zadatak 20
Write a program that draws a horizontal chart representing three given values. For example, if values are 5, 3, and 7, the program should draw:
* * * * *
* * *
* * * * * * *

*/


/*  zadatak 21
Write a program that calculates a number of digits of a given number. 
Input: 67984
Output: 5
*/



/*  zadatak 22
Write a program that calculates a number of appearances of a given number in a given array.
Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
Result: 3

*/



/*  zadatak 23 
Write a program that calculates the sum of odd elements of a given array. 
Input: [5, 6, 1, 2, 3, 12]
Result: 9
*/



/* zadatak 24
Write a program that calculates the number of appearances of a letter a in a given string. Modify the program so it calculates the number of both letters a and A.
Input: appearance
Result: 3
*/



/*  zadatak 25
Write a program that concatenates a given string given number of times. For example, if “abc” and 4 are given values, the program prints out abcabcabcabc. 
*/



/* zadatak 26
Find the min and max element in the following array and switch their places. Print out the modified array in the console.
Input:  [ 3, 500, 12, 149, 53, 414, 1, 19 ]
Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ]
*/



/*  zadatak 27
Use the following array to make a new one by dividing its values by two and adding 5. If a given element's value is 0, change it to 20.
Input:  [ 3, 500, -10, 149, 53, 414, 1, 19 ]
Output: [ 6.5, 255, 20, 79.5, 31.5, 212, 5.5, 14.5 ]
*/


/*  zadatak 28
Initialize two arrays. The first one should contain student names, the second one the number of points for each student. Display students' names with their corresponding grade. Use the following ranges:
51-60 -> 6,
61-70 -> 7,
71-80 -> 8,
81-90 -> 9,
91-100 -> 10.
Input: 
[ "Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ], [ 50, 39, 63, 72, 99, 51, 83, 59 ]
Output: 
Bill acquired 59 points and earned 6. Micahel acquired 50 points and failed to complete the exam.

(skip :))Sort a previously defined array. Place its sorted values into a new array whose values are equivalent to the first array's values multiplied by 2.
Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
Output: [ 2, 10, 12, 16, 22, 24, 26, 30 ]
	
(skip :))Sort a previously defined array in a descending order and display it in the console.
Input:  [ 13, 11, 15, 5, 6, 1, 8, 12 ]
Output: [ 15, 13, 12, 11, 8, 6, 5, 1 ]
*/    



/*  zadatak 29
Write a program that uses a loop to add all the even numbers from 1 to 1000 and subtracts all the odd numbers 1 to 500 from the calculated sum. The result should then be multiplied by 12.5 and displayed in console.
Output: 2350000
*/


/*  zadatak 30
Define a 10 element array. Take the first two letters from every string (that has at least 2 letters) in the array and create a new string from them. Print it out in the console.
Input: [ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]

Output: AnStJoJoDaMa
*/




/* zadatak 31
	
Write a program that takes a string and prints its characters out in reversed order in the console.
Input:  Belgrade Institute of Technology
Output: ygolonhceT fo etutitsnI edargleB
*/


/* zadatak 32
Write a program that displays all the combinations of two numbers between 1 and 7. Don't display two of the same numbers at the same time. Display the number of possible combinations, as well. (E.g. (1.2),(2,1) is allowed, but not (1,1), (2,2)...).
*/




/*  zadatak 33
Write a program that checks if the entered number is a prime number (i.e. divisible only by 1 and by itself).
Input:  17    | 15
Output: true  | false
    
*/


/*  zadatak 34
Check if a given string is a palindrome (spaces are ignored).
Input:  eye  | Geek  | a nut for a jar of tuna
Output: true | false | true
*/



/* zadatak 35
Write a program that calculates the greatest common divisor of two integers. Note: The greatest common divisor of two non-zero integers is the greatest positive number that divides both numbers with no remainder.
Input:  192 42 | 81 9
Output: 6      | 9
*/

/*  zadatak 36
Try to solve all assignments on a separate branch of bit-pp repository. Don’t forget to first pull changes done at class and push the new repository to remote when done with all the work at the end.
*/


/* zadatak 37
Write a program to insert a string within a string at a particular position (default is 1, beginning of a string).

"My random string", "JS " -> "JS My random string"
"My random string", "JS ", 10 -> "My random JS string"
*/
 


/* zadatak 38
Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.

[NaN, 0, 15, false, -22, '', undefined, 47, null]
*/
   

/* zadatak 39
Write a program to filter out falsy values from the array.

[NaN, 0, 15, false, -22, '', undefined, 47, null] -> [15, -22, 47]
*/
   

/*  zadatak 40
Write a function that reverses a number. The result must be a number.

12345 -> 54321 // Output must be a number
*/


function reverseNumber(num) {
   num = num + "";
   var output = "";
   var lastIndex = num.length - 1;

   for (var index = 0; index < num.length; index++) {
       var element = num[lastIndex - index];
       output += element;
   }

   var reversedNum = parseFloat(output);
   return reversedNum;
}

var result = reverseNumber(98765)

console.log(typeof result);
console.log(result);


/*  zadatak 41

Write a function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.

[7, 9, 0, -2] -> -2
[7, 9, 0, -2], 2 -> [0, -2]  
*/
   

function lastArray(a, n){
    var i;
    var result = [];

    for (i=a.length - n; i < a.length; i++){
        
        result[i - n] = a[i];
        
    }
    return result;

}


var arr=[7, 9, 0, -2];
console.log(lastArray(arr, 2));                         

/* zadatak 42
Write a function to create a specified number of elements with pre-filled numeric value array.

6, 0 -> [0, 0, 0, 0, 0, 0]
2, "none" -> ["none", "none"]
2 -> [null, null] 
*/

function elements (num, el){

    var newArray =[];    

for (i=0; i<num; i++){

        newArray[i]=el;

}return newArray;
}



console.log(elements(6,0));


   
/* zadatak 43
Write a function that says whether a number is perfect.
28 -> 28 is a perfect number.


Note: According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).

E.g.: The first perfect number is 6, because 1, 2 and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: (1 + 2 + 3 + 6) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.
*/


function isPerfect(number) {
   var temp = 0;
   for (var i = 1; i <= number / 2; i++) {
       if (number % i === 0) {
           temp += i;
       }
   }

   if (temp === number && temp !== 0) {
       console.log(number + " is a perfect number.");
   } else {
       console.log(num + " is not a perfect number.");
   }
}

isPerfect(28);



/* zadatak 44
Write a function to find a word within a string.

'The quick brown fox', 'fox' -> "'fox' was found 1 times"
'aa, bb, cc, dd, aa', 'aa' -> "'aa' was found 2 times"
*/


function searchWordCount(text, word) {

   var x = 0;
   var y = 0;

   for (i = 0; i < text.length; i++) {
       if (text[i] == word[0]) {
           for (j = i; j < i + word.length; j++) {
               if (text[j] == word[j - i]) {
                   y++;
               }
               if (y == word.length) {
                   x++;
               }
           }
           y = 0;
       }
   }
   return "'" + word + "' was found " + x + " times.";
}

console.log(searchWordCount('The quick brown fox', 'fox'));
console.log(searchWordCount('aa, bb, cc, dd, aa', 'aa'));

Write a function to hide email address.

"myemailaddress@bgit.rs" -> "myemail...@bgit.rs"


/* zadatak 45
Write a program to find the most frequent item of an array.

[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]

*/


function findFrequentItem(inputArr) {
   var mostFrequent = 1;
   var m = 0;
   var item;
   for (var i = 0; i < inputArr.length; i++) {
       for (var j = i; j < inputArr.length; j++) {
           if (inputArr[i] == inputArr[j]) {
               m++;
           }
           if (mostFrequent < m) {
               mostFrequent = m;
               item = inputArr[i];
           }
       }
       m = 0;
   }

   // output: item (number of times)
   return item + " ( " + mostFrequent + " times ) "
}

var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
console.log(findFrequentItem(arr1));

