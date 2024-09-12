console.log("script loaded");

const myLibrary = [];
let index = 0;

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
};

Book.prototype.toggleReadStatus = function() {
	this.readBook = !this.readBook;
};

function addBookToLibrary() {
	const newTitle = dialog.querySelector("#title").value;
	const newAuthor = dialog.querySelector("#author").value;
	const newPages = dialog.querySelector("#pages").value;
	const newReadStatus = dialog.querySelector("#readStatus");
	let readBook = newReadStatus.checked ? true : false;

	const newBook = new Book(newTitle, newAuthor, newPages, readBook);

	myLibrary.push(newBook);
	
}

////////////////////////
//*
const bookOne = new Book("titel", "schrijver", 420, true);
const bookTwo = new Book("hello", "world", 666, false);
myLibrary.push(bookOne);
myLibrary.push(bookTwo);
updateBookDisplay();
//*/
////////////////////////

function drawCard(book) {
	const readStatus = book.readBook ? "Unread" : "Read";
	const bookCardHTML = `<h2 class="bookTitle">${book.title}</h2>
	<p class="bookAuthor">${book.author}</p>
	<p class="bookPages">${book.pages} pages</p>
	<button class="readStatus">${readStatus}</button>
	<button class="deleteBtn">Delete</button>`;

	const card = document.createElement("div");
	card.classList.add("card");
	card.id = index;
	index++;
	card.insertAdjacentHTML("beforeend", bookCardHTML);
	bookDisplay.appendChild(card);
};

submitBtn.addEventListener("click", () => {
	addBookToLibrary();
	updateBookDisplay();

});

function updateBookDisplay(){
	//first empty display and set index to 0 so that every card's
	//id equals it's myLibrary[] index.
	bookDisplay.innerHTML = "";
	index = 0;
	myLibrary.forEach((book) => drawCard(book));
};


bookDisplay.addEventListener("click", (e) => {
	//EventListener for delete button
	if(e.target.classList.contains("deleteBtn")) {
		
		const targetIndex = e.target.parentElement.id;

		//remove obj with index targetIndex from library
		myLibrary.splice(targetIndex, 1);
		
		updateBookDisplay();
	};
	//EventListener for Read/Unread button
	if(e.target.classList.contains("readStatus")){

		const targetIndex = e.target.parentElement.id;
		myLibrary[targetIndex].toggleReadStatus();

		updateBookDisplay();
	};
});




