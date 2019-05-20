// Practical 10



// 1 Write IIFE that replaces the first and the last element of the given array and prints out its elements. 
// 	Input array: [4, 5, 11, 9]
//     Output array: [ 9, 5, 11, 4]
    

var stringArray = "Game Of Thrones";
    var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    function vowelSearch() {
    var numberofvowels = 0;
        for (i = 0; i < stringArray.length; i++) {
        for (j = 0; j < vowels.length; j++) {
        if (stringArray[i] === vowels[j]) {
        numberofvowels++;
      }
    }
  }
  return numberofvowels;
}
console.log(vowelSearch(stringArray));




// 2 Write IIFE that calculates the surface area of the given rectangle with sides a and b. 
// Input: 4 5
// Output: 20 



var surfaceArea = (function (a, b) {
    var result;
    result = a * b;
    return result;
})(4, 5);
console.log(surfaceArea);



 
// 3 Write IIFE that replaces all appearances of the letters m or M with * and returns the number of replacements. 
// 	Input: prograMming
//     Output: progra**ing, 2
    


var inputString = 'prograMming';
var replacementOfLetters = (function (inputString) {
    var outputString = '';
    var counter = 0;

    for (var i = 0; i < inputString.length; i++) {
        if (inputString[i] === 'm' || inputString[i] === 'M') {
            outputString += '*'
            counter++;
        } else {
            outputString += inputString[i];
        }
        var replacedElements = [outputString, counter];
    } return replacedElements;
})(inputString);

console.log(replacementOfLetters);



// 4 Write a function with parameters name and surname that returns a function that suggests an email in the form name.surname@gmail.com. 
// Input: pera peric
//     Output: pera.peric@gmail.com
    

    var name = 'pera';
    var surname = 'peric';
    
    var emailSuggestion = (function (name, surname) {
    
        var emailBuilding = (function () {
            return name + '.' + surname + '@gmail.com';
        })(name, surname);
        return emailBuilding;
    
    })(name, surname);
    console.log(emailSuggestion);    



// 5 Write a function that returns a function that calculates a decimal value of the given octal number. 
// Input: 034
// Output: 28

function decimal (){
    var decimalNumber = 0;
    decimalNumber=octalNumber+"";
    return decimalNumber;
}
var octalNumber=034;
console.log(decimal());



// 6 Write a function that checks if a given string is valid password. The password is valid if it is at 
// least 6 characters long and contains at least one digit. The function should receive two callbacks named 
// successCallback and errorCallback that should be called in case password is correct or invalid. 
// Input: JSGuru 
// Output: Your password is invalid!

// 	Input: JSGuru123
// 	Output: Your password is cool! 

function isPasswordOk (password, successCallback, errorCallback){

    if (password.length<6){
        errorCallback(password);
        return;
    }
   
for (var i=0; i<password.length; i++){   
 if (parseInt(password[i])>=1){
    successCallback(password);
    return;
} 
} 
errorCallback(password);

}

var errorCallback = function error (password){
    console.log ('Your password is invalid!');
}

var successCallback = function sucessful(password){
    console.log ('Your password is cool!');
}

var password ="JSGuru123";
isPasswordOk(password, successCallback, errorCallback); 



// 7 Write a function that filters elements of the given array so that they satisfy a condition given by the callback function.
// Input: [2, 8, 11, 4, 9, 3], callback function checks if the number is odd
// Output: [11, 9, 3] 



