const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const bookReadStatus = document.getElementById("status");
const submitBtn = document.getElementById("submitBtn");
const bookList = document.getElementById("book-list");

const myLibrary = [];
const clear = () => {
    title.value = "";
    author.value = "";
    pages.value = "";
    bookReadStatus.value = "";
}
function Book(title, author, pages, bookReadStatus){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.bookReadStatus = bookReadStatus;
    this.info = () =>{
        return `${title} by ${author}, ${pages} pages, ${bookReadStatus}`
    }
}

const addBookToLibrary = () => {
    
    const newBook = new Book(title.value, author.value, pages.value, bookReadStatus.value);

    myLibrary.push(newBook);
    clear();
    console.log(myLibrary);

}

submitBtn.addEventListener("click", (event) => {
        event.preventDefault();
        addBookToLibrary();
        alert("Book Added");
        displayBooks();
})

const displayBooks = () => {
    bookList.innerHTML = "";
    myLibrary.forEach((book, index) => {
        const bookItem = document.createElement("li")
        bookItem.innerHTML = `${book.info()} <button class="remove-btn" data-index="${index}">Remove</button>`
        bookList.appendChild(bookItem)
    })
    addRemoveListener();
}

const removeBook = (index) => {
    myLibrary.splice(index,1)
    displayBooks()
}

const addRemoveListener = () => {
    const removeBtn = document.querySelectorAll(".remove-btn");
removeBtn.forEach((btn) =>{
    btn.addEventListener("click", (event) =>{
        const bookId = event.target.getAttribute("data-index");
        removeBook(bookId)
    })
})
}