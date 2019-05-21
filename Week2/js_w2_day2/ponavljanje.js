var a = [2, 5, 17, "m", 14, "b", 5];
var firstIndex = 0;
var firstElement = a[firstIndex];


// 9/2=4.5
// 11/2=5.5

var lastIndex = a.length - 1;
var lastElement = a[lastIndex];
console.log(firstElement, lastElement);

if (a.length % 2 === 1) {
    var middleIndex = (a.length - 1) / 2;
    var middleElement = a[middleIndex];
    console.log(middleElement);
} else {
    // 5 8 12 -5
    var middleIndexLeft = a.length / 2 - 1;
    var middleElementLeft = a[middleIndexLeft];
    var middleIndeRight = a.length / 2
    var middleElementRight = a[middleIndexRight];
    console.log(middleElementLeft, middleElementRight);
}


//razmenjujemo vrednosti u okviru varijabli SWAP
var x = 10;
var y = 5;
var tmp;

console.log(x, y);
//x <-- 5, y <--10

tmp = x;
x = y;
y = tmp;


console.log(x, y);



//raznema prvog i poslednjeg elementa niza

var a = [6, 8, 10, -5, 13];
var tmp;

tmp = a[0];
a[0] = a[a.length - 1];
a[a.length - 1] = tmp;

console.log(a);



//redja kafe po jacini

var coffee = 'latte';
var strongness;

switch (coffee) {
    case 'espresso':
        strongness = 4;
        break;
    case 'turkish coffee':
    case 'late':
        strongness = 2;
        break;
    default:
        strongness = undefined;
        break;
}
console.log(coffee, strongness);