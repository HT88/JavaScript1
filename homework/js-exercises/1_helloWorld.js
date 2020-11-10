'use strict'


let helloWord2 = ['Salut', '¿Qué tal?', 'Selamlar!', 'Привет!', 'Ciao!', 'こんにちは', '안녕 ~ ', '你好', 'Hi there!', 'Hoi!'];

for (let i = 0; i < helloWord2.length; i++) {
    console.log(helloWord2[i]);
    }

/* For some reason this one did not work:

let helloWord = ['Salut', '¿Qué tal?', 'Selamlar!', 'Привет!', 'Ciao!', 'こんにちは', '안녕 ~ ', '你好', 'Hi there!', 'Hoi!'];

for (hello of helloWord) {
        console.log(hello);
    }


*/