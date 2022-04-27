let myLibrary = [];
let container = document.querySelector('.container');

//constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
//function to add books to variable myLibrary
function addBookToLibrary(book) {
myLibrary.push(book)
}

//test books
let textbook = new Book('textbook', 'science', 100, 'not read')
let bible = new Book('The Bible', 'Jesus', 450, 'not read')
let manual = new Book('service manual', 'Mr. Fix-it', 300, 'read')
addBookToLibrary(textbook)
addBookToLibrary(bible)
addBookToLibrary(manual)



for (let i = 0; i < myLibrary.length; i++) {
  let bookCard = document.createElement('div');
  bookCard.classList.add('bookCards');
  container.appendChild(bookCard);
  let currentBook = myLibrary[i];
  bookCard.textContent = `Title: ${currentBook.title}
  Author: ${currentBook.author}
  Pages: ${currentBook.pages}
  Read: ${currentBook.read}`
}

// for (let i = 0; i < myLibrary.length; i++) {

// }