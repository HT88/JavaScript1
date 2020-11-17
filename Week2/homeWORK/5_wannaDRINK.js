'use strict'

const drinkTypes = ['cola', 'lemonade', 'water'];
const drinkTray = [];

for (let i = 0; i < 5; i = i + 1) {  
    const typeIndex = i % drinkTypes.length;  
    drinkTray[i] = drinkTypes[typeIndex];}

console.log(`Hey guys, I brought a ${drinkTray.join(', ')}!`);

//Completed with a little help from a friend.




/*

const drinkTypes = ['cola', 'lemonade', 'water'];
const drinkTray = [];

// let i = 0; i =< 4;i++
// let i = 0; we start from number 0
// i =< 4; the condition, we stop the loop as soon as the condition is no longer TRUTHY; 
// i++; incrementation; i += 1; i = i + 1;
function countOccurences(drink, drinkTray) {
  let count = 0;
  drinkTray.forEach(drinkOnTray => {
    if (drinkOnTray === drink) {
      count++;
    }
  });
  return count;
}

// Fixed solution, solving the problem but only for the specific numbers of 5
for(let i = 0; i <= 4;i++) {
  if (i === 0 || i === 1) {
    drinkTray.push(drinkTypes[0]);
  } else if (i === 2 || i === 3) {
    drinkTray.push(drinkTypes[1]);
  } else {
    drinkTray.push(drinkTypes[2]);
  }
}

console.log("IN DRINKTRAY", drinkTray);

// Dynamic solution, that will work any amount of drinks and conditions
const numberPerDrink = 2;
const totalDrinks = 5;

drinkTypes.forEach(drink => {
  for(let i = 0; i <= 1; i++) {
    if (drinkTray.length < totalDrinks) {
      drinkTray.push(drink);
    }
  }
})

console.log("IN DRINKTRAY", drinkTray);

*/