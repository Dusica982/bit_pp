// We would like to print values from 1 to 5
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

var i;
for (i = 1; i <= 5; i++) {
    console.log(i);
}
console.log('The end');



// We would like to calculate the sum of the elements 
var a = [6, 7, 12];
console.log(a[0] + a[1] + a[2]);


var a = [6, 9, 12, 8, 342, 90, 34, 12, 8392];
var sum = 0;
var i;

for (i = 1; i < a.length; i++) {
    sum = sum + a[i];
}
console.log(sum);