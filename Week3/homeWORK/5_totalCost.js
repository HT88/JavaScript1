'use strict'
let cartForParty = {
    Beer: 2.7,
    Chips: 1.50,
    Cake: 10.99,
    energyDrink: 0.75,
    Water: 0.55,
};


function calculateTotalPrice(){
    let youPay = 0;

    for (let value in cartForParty) {
        youPay += cartForParty[value];
    };

    return Math.round(youPay);
} 

console.log('Total: ' + calculateTotalPrice() + ' EUR')

// https://codinhood.com/nano/js/sum-property-values-object








// function calculateTotalPrice(totalPrice) {
//     let youPay = 0;

//     for (let value in cartForParty) (
//         youPay += cartForParty[value];
//     )
// }

// console.log(youPay);
// https://www.pakainfo.com/javascript-sum-array/



// const values = Object.values(cartForParty)

// for(const value of values) {
// 	console.log(value)
// }

// https://awik.io/loop-object-javascript/