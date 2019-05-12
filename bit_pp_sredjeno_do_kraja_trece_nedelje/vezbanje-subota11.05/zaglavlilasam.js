/* zadatak 6
Write a function to find the maximum element in array of numbers. Filter out all non-number elements.
*/


function maximum(a){
    var max =0;
    var b=0;
    for (var i=0; i<a.length; i++){

        a[i]=parseInt(a);
        
        if (b<a[i]){
            max=a[i];
        }
        
    }return max;

}

var array=[NaN, "ball", 7, 47, 90];
console.log(maximum(array));