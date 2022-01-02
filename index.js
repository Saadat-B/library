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
  e.preventDefault();
}

function display(e) {
  clear();
  for (let i = 0; i < myLibrary.length; i++) {
    card = document.createElement("div");
    card.innerText = myLibrary[i].info();
    container.appendChild(card);
  }
}

function clear() {
  container.innerHTML = "";
}
// EVENT LISTENERS

submit.addEventListener("click", log);
