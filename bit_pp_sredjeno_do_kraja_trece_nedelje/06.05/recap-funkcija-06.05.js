/*Stampamo od sredine niza do kraja*/


var s = [1, 3, 5, 7, 8, 7, 99];
var i;

if (s.length % 2 === 0) {
    i = s.length / 2;
} else {
    i = (s.length - 1) / 2;
}

for (; i < s.length; i++) {
    console.log(s[i]);
}





var dimension = 7;
for (var i = 0; i < dimension; i++) {

    var row = "";
    for (var j = 0; j < dimension; j++) {
        if (i !== 0 &&
            i < dimension - 1 &&
            j !== 0 &&
            j < dimension - 1
        ) {
            row += "  ";
        } else {
            row += '* ';
        }
    }
    console.log(row);
}





var dimension = 7;
for (var i = 0; i < dimension; i++) {

    var row = "";
    for (var j = 0; j < dimension; j++) {
        if (i === 0 || i === dimension - 1) {
            row += '* ';
            continue;
        }

        if (j === 0 || j === dimension - 1) {
            row += '* ';
            continue;
        }

        row += "  ";
    }
    console.log(row);
}






function isOnFirstOrLasPosition(index, dimension) {
    return (index === 0 || index === dimension - 1);
}

function isOnFirstOrLastRowOrColumn(rowIndex, columnIndex, dimension) {
    return (
        isOnFirstOrLasPosition(rowIndex, dimension) ||
        isOnFirstOrLasPosition(columnIndex, dimension)
    );
}

function drawSquare(dimension) {
    var shape = "";
    for (var i = 0; i < dimension; i++) {
        for (var j = 0; j < dimension; j++) {
            shape += isOnFirstOrLastRowOrColumn(i, j, dimension)
                ? "* "
                : "  ";
        }

        shape += "\n";
    }

    console.log(shape);
}

drawSquare(3);
drawSquare(5);