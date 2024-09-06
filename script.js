console.log("script loaded");

const myLibrary = [];

const showBtn = document.getElementById("showDialog");
const dialog = document.getElementById("newBookDialog");
const submitBtn = dialog.querySelector("#submitBtn");

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
	const newAuthor = dialog.querySelector("#author").value;
	const newTitle = dialog.querySelector("#title").value;
	const newPages = dialog.querySelector("#pages").value;
	const newReadStatus = dialog.querySelector("#readStatus");
	const readBook = newReadStatus.checked ? true : false;

	const newBook = new Book(newTitle, newAuthor, newPages, readBook);

	myLibrary.push(newBook);
	console.log("book added");
	updateBookDisplay(newBook);
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

submitBtn.addEventListener("click", () => {
	addBookToLibrary();
});

myLibrary.forEach((book) => updateBookDisplay(book));
