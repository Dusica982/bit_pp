/* In the strict mode this partial declaration (var is missing!) will result with ReferenceError. */
'use strict';
x = 10;
console.log(x);


/* --------------------------- */

var y = 50;

function test() {
    'use strict';

    console.log('Hello');
    /* The strict mode protects us from creating global variables unintentionally. */
    x = 10;
    console.log(x);

    /* Caution: we can properly use declared global variables. */
    console.log(y);
}

test();
console.log(y);


/* --------------------------- */

/* Other benefits of the strict mode. */
'use strict';
var s = 'abc';
s[0] = 'A';
console.log(s);


/* --------------------------- */

/* Redeclaration of a variable is not the error even in the strict mode. */
'use strict';
var x = 10;
var x = 50;
console.log(x);
