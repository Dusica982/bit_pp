// //nacrtati kvadrat od zvezdica

// var square = 5;
// var i;
// var row;


// for (i = 0; i < square; i++) {
//     row = "";
//     for (var j = 0; j < square; j++) {
//         if (i === 0 || j === square - 1 || j === 0 || j === square - 1 || i === square - 1) {

//             row += "*";
//         } else {

//             row += " ";
//         }

//     }
//     console.log(row);

// }


// //nacrtiati trougao



// var square = 5;
// var i;
// var row;


// for (i = 0; i < square; i++) {
//     row = "";
//     for (var j = 0; j < square; j++) {
//         if (j === 0 || i === square - 1 || i === j) {

//             row += "*";
//         } else {

//             row += " ";
//         }

//     }
//     console.log(row);

// }


// //nacrtati trougao okrenut na dole


var dimension = 5;
var i;
var row;


for (i = 0; i < dimension - 2; i++) {
    row = "";
    for (var j = 0; j < dimension; j++) {
        if (i === 0 || j === dimension - 3 || j === dimension - 2 || i === j) {

            row += "*";
        } else {

            row += " ";
        }

    }
    console.log(row);

}





var num = [["bit", "tib"], ["it", "ti"], ["bt", "tb", "bb"]];
var i;

for (i = 0; i < num.length; i++) {
    var newNum = num[i];
    var str = '';
    for (var j = 0; j < newNum.length; j++) {
        str += newNum[j];
    }
    console.log(str);
}


krace:




var num = [["bit", "tib"], ["it", "ti"], ["bt", "tb", "bb"]];
var i;
var str = '';
for (i = 0; i < num.length; i++) {
    var newNum = num[i];
    for (var j = 0; j < newNum.length; j++) {
        str += newNum[j];
    }
    str += '\n';
}

console.log(str);

