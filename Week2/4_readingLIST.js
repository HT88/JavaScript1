'use strict'

const books = [
  {
    title: 'Steppenwolf',
    alreadyRead: true,
    author: 'Hermann Hesse'
  },
  {
    title: 'Norwegian Wood',
    alreadyRead: true,
    author: 'Haruki Murakami'
  },
  {
    title: 'The Republic',
    alreadyRead: false,
    author: 'Plato'
  }
];


for(let i = 0; i < books.length; i = i + 1) {  
  const book = books[i];
    // you print the title  
    console.log(book.title + " by " + book.author);
    // if you read it then say i read it 
    if (book.alreadyRead) {    console.log("You already read " + book.title);  
    // if you didn't read it then say still need to read 
    } else {    
      console.log("You still need to read " + book.title);  }  

    // adds space in between the books. Let's give it a face lift!
    console.log("");
}


    

/*I still feel like this code is well above my capabilities. I will need to invest some more time into breakjng it down peice by piece.

let booksRead = [];
for(let i = 0; i <= 2; i++) {
  const book = books[i];
  let sentence = book.title + " by " + book.author;
  console.log(sentence);
  if (book.alreadyRead) {
    booksRead.push("You already read " + book.title);
  } else {
    booksRead.push("You still need to read " + book.title);
  }
}
booksRead.forEach(sentence => console.log(sentence));



*/