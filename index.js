// DECLARATIONS
let myLibrary = [];
let title;
let author;
let pages;
let read;
let newBook;
let submit = document.querySelector("#submit");
let card;
const container = document.querySelector(".container");
const myStorage = window.localStorage;
let myBooks;


// FUNCTIONS

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = () => {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
  };
}

function log(e) {
  title = document.querySelector("#title").value;
  author = document.querySelector("#author").value;
  pages = document.querySelector("#pages").value;
  read = document.querySelector("#read").value;
  myLibrary.push(new Book(title, author, pages, read));
  display();
  reset();
  e.preventDefault();
}

function display() {
  clear();
  
  myStorage.setItem('books',JSON.stringify(myLibrary));
  myBooks = JSON.parse(myStorage.getItem('books'));
  console.log(myBooks)

  if(myBooks && myBooks.length){

    for (let i = 0; i < myBooks.length; i++) {
      card = document.createElement("div");
      // card.innerText = myBooks[i].info();
      card.innerText = `${myBooks[i]['title']} by ${myBooks[i]['author']}, ${myBooks[i]['pages']} pages, ${myBooks[i]['read']}`
      container.appendChild(card);
    }
  }
}

function clear() {
  container.innerHTML = "";
}

function reset() {
  document.getElementById("myForm").reset();
}


// EVENT LISTENERS

submit.addEventListener("click", log);
