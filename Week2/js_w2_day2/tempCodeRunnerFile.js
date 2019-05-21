var a = [80, 77, 88, 95, 68];
var i = 0;
var aver = 0;
sum = 0;

for (i = 0; i < a.length; i++) {
    sum = sum + a[i];
}
aver = sum / a.length;
console.log(aver);

var grade = 0;
for (i = 0; i < a.length; i++) {
    if (a[i] < 0.6 * aver) {
        console.log("F");
    } else if (a[i] < 0.7 * aver) {
        console.log("D");
    } else if (a[i] < 0.8 * aver) {
        console.log("C");
    } else if (a[i] < 0.9 * aver) {
        console.log("B");
    } else {
        console.log("A");
    }
}