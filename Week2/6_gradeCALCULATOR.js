'use strict'

function yourGrade(pointsRECIEVED) {

let grade = (pointsRECIEVED/100)*100;

// Check if grade is an A, B, C, D, or F
if (grade >= 90) {
  console.log("You got an A");
} else if (grade >= 80) {
  console.log("You got a B");
} else if (grade >= 70) {
  console.log("You got a C");
} else if (grade >= 60) {
  console.log("You got a D. Take it easey! D - stand for a degree!");
} else {
  console.log("F");
}
}

yourGrade(60);




/* 
https://www.digitalocean.com/community/tutorials/how-to-write-conditional-statements-in-javascript


*/