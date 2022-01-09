
// DECLARATIONS

const submit = document.querySelector("#submit");
const container = document.querySelector(".container");

// FUNCTIONS

function Book(title, author, pages, read) {
  // Object Constructor to create new books
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = () => {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
  };
}

function log(e) {
  // Adds the newly created book into local storage
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;
  let read = document.querySelector("#read").value;
  if (localStorage.getItem("books") == null) {
    localStorage.setItem("books", "[]");
  }
  let myLibrary = JSON.parse(localStorage.getItem("books"));
  myLibrary.push(new Book(title, author, pages, read));
  localStorage.setItem("books", JSON.stringify(myLibrary));
  display();
  reset();
  e.preventDefault();
}

function display() {
  // Renders the book stored in the local storage
  if (localStorage.getItem("books") !== null) {
    clear();
    let card;
    let myBooks = JSON.parse(localStorage.getItem("books"));
    for (let i = 0; i < myBooks.length; i++) {
      card = document.createElement("div");
      card.innerText = `${myBooks[i]["title"]} by ${myBooks[i]["author"]}, ${myBooks[i]["pages"]} pages, ${myBooks[i]["read"]}`;
      container.appendChild(card);
    }
  }
}


function clear() {
  // Clears the container in the DOM for Re-rendering the page with additional books if added
  container.innerHTML = "";
}

function reset() {
  // Resets the HTML Book Form after submission
  document.getElementById("myForm").reset();
}


// EVENT LISTENERS

submit.addEventListener("click", log);

// CALLING FUNCTIONS ON PAGE LOAD

display();
