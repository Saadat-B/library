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
    let edit;
    let update;
    let del;
    let info;
    let delet;

    let myBooks = JSON.parse(localStorage.getItem("books"));
    for (let i = 0; i < myBooks.length; i++) {
      card = document.createElement("div");
      card.classList.add("card");
      edit = document.createElement("div");
      edit.classList.add("edit");
      info = document.createElement("div");
      info.classList.add("info");
      update = document.createElement("span");
      update.classList.add("update");
      update.innerText = `✏️`;
      del = document.createElement("span");
      del.classList.add("del");
      del.innerText = `❌`;
      info.innerText = `${myBooks[i]["title"]} by ${myBooks[i]["author"]}, ${myBooks[i]["pages"]} pages, ${myBooks[i]["read"]}`;
      info.innerHTML = `<p> ${myBooks[i]["title"]} </p>
      <p>by</p>
      <p>${myBooks[i]["author"]}</p>
      <p>${myBooks[i]["pages"]} pages</p>
      <p>${myBooks[i]["read"]}</p>

      `;
      container.appendChild(card);
      card.appendChild(edit);
      card.appendChild(info);
      edit.appendChild(update);
      edit.appendChild(del);
    }
    delet = document.querySelectorAll(".del");
    // delet.forEach((elem) => {
    //   for (let i = 0; i < myBooks.length; i++) {
    //     elem.dataset.num = i;
    //   }
    // });

    for (let i = 0; i < delet.length; i++) {
      delet[i].dataset.num = i;
    }

    delet.forEach((elem) =>
      elem.addEventListener("click", (e) => {
        console.log(elem.dataset.num);
        let index = elem.dataset.num;
        let Library = JSON.parse(localStorage.getItem("books"));
        Library.splice(index, 1);
        localStorage.setItem("books", JSON.stringify(Library));
        display();
      })
    );
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
// delet.forEach((elem) => elem.addEventListener("click", console.log("del")));

// CALLING FUNCTIONS ON PAGE LOAD

display();
