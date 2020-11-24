'use strict'

function giveCompliment(yourName) {
    let compliments = ['great', 'awesome', 'awesome-pawsome', 'the best', 'fantastic', 'cool', 'the best of the best', 'second to none', 'kewl'];
    let random = Math.floor(Math.random() * compliments.length);
    return console.log('You are ' + compliments[random] + ', ' + yourName + '!');
}

giveCompliment('Gogo');
giveCompliment('Didi');
giveCompliment('Godot');


//https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array 