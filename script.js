console.log("script loaded");

const myLibrary = [];

const showBtn = document.getElementById("showDialog");
const dialog = document.getElementById("newBookDialog");

const newAuthor = dialog.getElementById("author");
const newTitle = dialog.getElementById("title");
const newPages = dialog.getElementById("pages");
const newReadStatus = dialog.getElementById("readStatus");

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
////////////////////////
