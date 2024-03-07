const addBtn = document.getElementById("add-btn");
const bookDisplay = document.getElementById("book-display");
const modal = document.getElementById("modal");
const titleInput = document.getElementById("title-input");
const authorInput = document.getElementById("author-input");
const readInput = document.getElementById("read-input");

const pagesInput = document.getElementById("pages-input");
const cancelBtn = document.getElementById("cancel-btn");
const form = document.getElementById("form");

let myLibrary = [];

const renderBooks = () => {
  // if(myLibrary.length == 0) return;

  bookDisplay.innerHTML = "";

  myLibrary.map(( book , index )=> {

    const bookCard = document.createElement('div');
    bookCard.innerHTML = `
    <div class="book-card">
      <div class="book-info"> 
        <p>${book.title}</p>
        <p>${book.author}</p>
        <p>${book.pages}</p>
      </div>
    <div class="icons-conatainer">
      <label for="read">
        ${book.read ? "Read" : "Not Read"}
      </label>
      <input type="checkbox" onclick="changeRead(${index})" name="read" ${book.read ? "checked" : ""}>
      <svg onclick="deleteBook(${index})" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: #D1D5DB;"><path d="M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z"></path><path d="M9 10h2v8H9zm4 0h2v8h-2z"></path></svg>
    </div>
    </div>
    `;
    bookDisplay.appendChild(bookCard);
  } )
  
}

function Book(title, author, pages , read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  
}

function addBookToLibrary(title, author, pages , read) {
  // do stuff here
  const book = new Book(title, author , pages, read)
  titleInput.value= "";
  authorInput.value= "";
  pagesInput.value= "";
  readInput.checked= false;

  myLibrary.push(book)

  renderBooks();

}

const deleteBook = (index) =>{
  
    myLibrary.splice(index, 1);

    renderBooks()
};

const changeRead = (index) => {
 
  for (let i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i];
    if(i === index){
      if(book.read){
        book.read = false;
      }else{
        book.read = true;
      }
    }
  }

  renderBooks()
}

addBtn.addEventListener('click', () => {

  modal.style.display = "block"
});

cancelBtn.addEventListener('click', (e) => {
  e.preventDefault()
  modal.style.display = "none"
})

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const title = titleInput.value;
  const author = authorInput.value;
  const pages = pagesInput.value;
  const read = readInput.checked

  addBookToLibrary(title, author, pages , read)
  modal.style.display = "none"
});
