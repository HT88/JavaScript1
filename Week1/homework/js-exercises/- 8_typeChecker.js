'use strict'

let x = 9;
let y = 67;

console.log(typeof(x, y));



let myType = function(a, b) {
    if (typeof(a) == typeof(b)) {
        console.log('SAME TYPE');
    } else {
        console.log('NOT THE SAME TYPE');
    }
}

myType(x, y);




//The lines of code above were discussed during out Sunday session(s). I still feel like they are above my head, I am not there yet.

/*let myType = fucntion(a, b) { 
    if (typeof(a) == typeof(b)) 
{ 
    return console.log('SAME TYPE'); 
}
    else console.log('NOT THE SAME TYPE');
}

myType(x, y);*/


