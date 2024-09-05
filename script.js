console.log("script loaded");

const myLibrary = [];

const showBtn = document.getElementById("showDialog");
const dialog = document.getElementById("newBookDialog");
const confirmBtn = dialog.querySelector("#confirmBtn");

const newAuthor = dialog.querySelector("#author");
const newTitle = dialog.querySelector("#title");
const newPages = dialog.querySelector("#pages");
const newReadStatus = dialog.querySelector("#readStatus");

const bookDisplay = document.getElementById("bookDisplay");

showBtn.addEventListener("click", () => {
	dialog.showModal();
});

function Book(title, author, pages, readBook) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.readBook = readBook;
	this.info = function () {
		return readBook == false
			? `${title} by ${author}, ${pages} pages, not read yet.`
			: `${title} by ${author}, ${pages} pages, finished reading.`;
	};
}

function addBookToLibrary() {
	const newBook = new Book(title, author, pages, readBook);
	myLibrary.push(newBook);
	console.log("book added");
}

////////////////////////
const bookOne = new Book("titel", "schrijver", 420, true);
const bookTwo = new Book("hello", "world", 666, false);
myLibrary.push(bookOne);
myLibrary.push(bookTwo);
////////////////////////

function updateBookDisplay(book) {
	const bookCardHTML = `<div class="bookCard">
	<h2 class="bookTitle">${book.title}</h2>
	<p class="bookAuthor">${book.author}</p>
	<p class="bookPages">${book.pages} pages</p>
	<p class="bookReadStatus">read</p>
	</div>`;
	const card = document.createElement("div");
	card.classList.add("card");
	card.insertAdjacentHTML("beforeend", bookCardHTML);
	bookDisplay.appendChild(card);
}

myLibrary.forEach((book) => updateBookDisplay(book));
