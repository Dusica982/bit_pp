// practical 7

//1.
// Why pay a fortune teller when you can just program your fortune yourself?
// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

function tellFortune (kids, husband, town, job){
    var yourFortuneIs = "You will be a "+job + " in " + town + ", and married to "+ husband + " with " + kids + " kids.";
    console.log (yourFortuneIs);
}

tellFortune ("3", "Milos", "Belgrade", "programmer");
tellFortune ("1", "Sasa", "Belgrade", "teacher");
tellFortune ("3", "Jovan", "Belgrade", "Accaount Manager");






// 2.
//You know how old your dog is in human years, but what about dog years? Calculate it!
// Write a function named calculateDogAge that:
// takes 1 argument: your puppy's age.
// calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
// outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
// Call the function three times with different sets of values.

function calculateDogAge(humanYear, ageFactor) {

    if (ageFactor === undefined) {  //setovanje defaultne vrednosti u if bloku - ageFactor

        ageFactor = 7;
    }

    var puppyAge = humanYear * ageFactor;
    var result = "Your doggie is " + puppyAge + " years old in dog years!"

    return result;
}


console.log(calculateDogAge(2, 10));



//3.
// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.

function calculateSupply(age, amountPerDay) {

    var maxAge = 100;
    var currentAge = 29;
    age = maxAge - currentAge;



// 4. It's hot out! Let's make a converter based on the steps here.

// Create a function called celsiusToFahrenheit:
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Create a function called fahrenheitToCelsius:
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."
    

    function celsiusToFahrenheit(celsiusT) {

        var fahrenheitT = (celsiusT * (9 / 5) + 32);
        var result = celsiusT + "°C" + " is " + fahrenheitT + " °F";
        return result;
    
    } console.log(celsiusToFahrenheit(15));
    
    
    
    function fahrenheitToCelsius(fahrenheit) {
    
        var celsiusT = (fahrenheit - 32) * 5 / 9;
        var result = fahrenheit + "°F" + " is " + celsiusT + " °C";
        return result;
    
    } console.log(fahrenheitToCelsius(85));
    