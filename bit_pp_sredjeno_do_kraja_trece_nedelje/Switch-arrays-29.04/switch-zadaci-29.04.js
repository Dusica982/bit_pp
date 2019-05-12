/* zadatak 1

Write a program that shows text representation of a day in a week for a number input from 1 to 7. Print output in console. 
For input 1, output should be “Monday”. */

/* zadatak 2
Write a program that shows text representation of a day in a week for a number input from 1 to 7. All other cases output a message explaining that input must be a number between 1 and 7.
For input 1, output should be “Monday”.
For input 10, output should be “Input must be a number between 1 and 7”. */


var day = 15;
switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Wrong day value!")
}

console.log("The End");


/* zadatak 3

Write a program that for a 1-7 number input (representing a day in a week) shows if that day is a weekday or weekend. All other cases output a message explaining that input must be a number between 1 and 7.
		For input 2, output should be “It’s weekday”.
For input 6, output should be “It’s weekend”.
For input 12, output should be “Input must be number between 1 and 7”. */

var day = 6;
switch (day) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log('It\'s weekday');
        break;
    case 6:
    case 7:
        console.log('It\'s weekend');
        break;
    default:
        console.log('Input must be number between 1 and 7');
}
console.log('The end');




/* zadatak 4

Write a program that for a 1-12 number input (representing a month in a year) shows that month’s name. All other cases output a message explaining that input must be a number between 1 and 12. 
		For input 2, output should be “February”.
For input 6, output should be “June”.
For input 13, output should be “Input must be a number between 1 and 12”. */


var month = 1;
switch (month) {
    case 1:
        console.log('January');
        break;
    case 2:
        console.log('February');
        break;
    case 3:
        console.log('March');
        break;
    case 4:
        console.log('April');
        break;
    case 5:
        console.log('May');
        break;
    case 6:
        console.log('June');
        break;
    case 7:
        console.log('July');
        break;
    case 8:
        console.log('August');
        break;
    case 9:
        console.log('September');
        break;
    case 10:
        console.log('October');
        break;
    case 11:
        console.log('November');
        break;
    case 12:
        console.log('December');
        break;
    default:
        console.log('Input must be between 1 and 12');
}

console.log('The End');





/* zadatak 5
Write a program that for a 1-12 number input (representing a month in a year) shows what season it is. All inputs different from 1-12 output a message explaining that input must be a number between 1 and 12.  */

var month = 3;

switch (month) {
    case 12:
    case 1:
    case 2:
        console.log('winter');
        break;
    case 3:
    case 4:
    case 5:
        console.log('spring');
        break;
    case 6:
    case 7:
    case 8:
        console.log('summer');
        break;
    case 9:
    case 10:
    case 11:
        console.log('autumn');
        break;
    default:
        console.log('Input must be number between 1 and 12');
}
console.log('The End');



/* zadatak 6
Write a program that for a string input of a grade from “A”-“F” outputs a proper info message about that grade in the following manner: A - "Good job"", B - "Pretty good"", C - "Passed"", D - "Not so good"", F - "Failed". Input different from letters A-F outputs a message "Unknown grade". */

var grade = 'E';
switch (grade) {
    case 'A':
        console.log('Good job');
        break;
    case 'B':
        console.log('Pretty good');
        break;
    case 'C':
        console.log('Passed');
        break;
    case 'D':
        console.log('Not so good');
        break;
    case 'F':
        console.log('Failed');
        break;
    default:
        console.log('Unknown grade')
}

console.log('The End');


//Dodatni zadaci


/* Write a program that takes as input a city name and outputs the country where the city is. You may choose which cities and countries you want to output yourself, however there has to be at least 5 countries and 15 cities. Note that each country must have a different number of cities. Input different from the listed cities should output a message"Please choose a different city". */

var city = 'Katarina';
switch (city) {
    case 'Beograd':
    case 'Nis':
    case 'Novi Sad':
    case 'Kragujevac':
    case 'Subotica':
    case 'Valjevo':
    case 'Zajecar':
        console.log('Srbija')
        break;
    case 'New York':
    case 'Washington':
    case 'Chicago':
    case 'Boston':
    case 'Miami':
    case 'Los Angeles':
        console.log('SAD')
        break;
    case 'Rim':
    case 'Padova':
    case 'Verona':
    case 'Venecija':
        console.log('Italija')
        break;
    case 'Atina':
    case 'Solun':
    case 'Larisa':
    case 'Kavala':
    case 'Katarina':
        console.log('Grcka')
        break;
    case 'Zagreb':
    case 'Split':
    case 'Zadar':
        console.log('Hrvatska')
        break;
    default:
        console.log('Please choose a different city!')
}



/*Write a program that takes as input two numbers and a string denoting the operation (“+”, “-”, “*”, “/”) and prints out the appropriate result. Watch out for division by zero! */

var first = 4;
var second = 2;
var result = '';
var operation = '/';
switch (operation) {
    case '+':
        console.log(result = first + second);
        break;
    case '-':
        console.log(result = first - second);
        break;
    case '/':
        if (second !== 0) {
            console.log(result = first / second);
        } else {
            console.log('Can\'t divide by 0!!!!')
        }
        break;
    case '*':
        console.log(result = first * second);
        break;
}