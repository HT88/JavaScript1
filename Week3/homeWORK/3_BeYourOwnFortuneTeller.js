'use strict'
function digiFortuneTeller() {
    let numChildern = [1, 2, 3, 4, 5];
    let randomChildren = Math.floor(Math.random() * numChildern.length);

    let partnerNames = ['Sasha GRAY', 'Kim KARDASHYAN', 'Kim Jeong-Un', 'Milania TRUMP', 'James BOND'];
    let randomPartners = Math.floor(Math.random() * partnerNames.length);

    let yourResidence = ['Jakarta', 'Tokyo', 'Seoul', 'New-New York', 'Amsterdam'];
    let randomLocation = Math.floor(Math.random() * yourResidence.length);

    let yourOccupation = ['a superhero', 'the president of the World', 'the Master of the Universe', 'Batman', 'an evil genius'];
    let randomJob = Math.floor(Math.random() * yourOccupation.length);

    return console.log('You will be married to ' + partnerNames[randomPartners] + ' and have ' + numChildern[randomChildren] + ' kid(s).' + ' Your will be ' + yourOccupation[randomJob] + ' and live in ' + yourResidence[randomLocation] + '.');
}

digiFortuneTeller();



// this seems to be a bigger version of excercise 1. 