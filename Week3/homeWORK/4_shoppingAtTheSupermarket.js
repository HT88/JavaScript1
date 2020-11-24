'use strict'

let shoppingCart = ['bananas', ' milk'];
function addToShoppingCart(groceryItem) {
    shoppingCart.push(groceryItem);

   if (shoppingCart.length > 3){
        shoppingCart.shift();
    };

    return console.log('You bought ' + shoppingCart + '.') ;
} 


addToShoppingCart(' whisky');
addToShoppingCart(' vodka');
addToShoppingCart(' beer');
addToShoppingCart(' muffins');



//     return console.log(`You bought ${shoppingCart}.`) ; ???