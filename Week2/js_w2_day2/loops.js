// var i = 0;
// for (i = 1; i <= 20; i++) {
//     console.log(i);
// }

// console.log('The End');

// var a = [1, 2, 3];
// console.log(a[0] + a[1] + a[2]);
// Izracunati sumu elemenata niza

var a = [6, 9, 12, 8, 342, 90, 34, 12, 8392];
var sum = 0;
var i;
// 0+6=6 --> sum
//6+9=15 --> sum
for (i = 0; i < a.length; i++) {
    sum = sum + a[i];
}
console.log(sum);