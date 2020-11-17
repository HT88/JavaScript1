'use strict'

const myReceipts = {
    Meal: 'Fried eggs',
    Servings: 2,
    Ingredients: ['Eggs (2x)', ' cooking oil', ' salt']
};

// iterate over the user object
for (const key in myReceipts) {
    console.log(`${key}: ${myReceipts[key]}`);
}


/*
Source: https://attacomsian.com/blog/javascript-iterate-objects 

*/