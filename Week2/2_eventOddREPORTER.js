'use strict'

//let numberReporter = 20;

for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log('The number is '+i+' even');
    } else {
        console.log('The number is '+i +' odd');
}
}






/*

Things to think about:
- It does not work without 'let' 
for (let i = 0; i < n; i++) {
    console.log(i);
}

SOURCES REFERENCED
https://www.w3resource.com/javascript-exercises/javascript-conditional-statements-and-loops-exercise-5.php 


for (let i = 0; i <= 15; i++) {
    console.log(i + ' is', (i % 2 == 0) ? "even" : "odd")
}

*/