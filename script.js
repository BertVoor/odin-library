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
}

function addBookToLibrary() {
	const newAuthor = dialog.querySelector("#author").value;
	const newTitle = dialog.querySelector("#title").value;
	const newPages = dialog.querySelector("#pages").value;
	const newReadStatus = dialog.querySelector("#readStatus");
	const readBook = newReadStatus.checked ? true : false;

	const newBook = new Book(newTitle, newAuthor, newPages, readBook);

	myLibrary.push(newBook);
	updateBookDisplay();
	
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
	const readStatus = book.readBook ? "Read" : "Not read yet";
	const bookCardHTML = `<h2 class="bookTitle">${book.title}</h2>
	<p class="bookAuthor">${book.author}</p>
	<p class="bookPages">${book.pages} pages</p>
	<p class="bookReadStatus">${readStatus}</p>
	<button class="deleteBtn">Delete</button>`;

	const card = document.createElement("div");
	card.classList.add("card");
	card.id = index;
	index++;
	card.insertAdjacentHTML("beforeend", bookCardHTML);
	bookDisplay.appendChild(card);
}

submitBtn.addEventListener("click", () => {
	addBookToLibrary();
});

function updateBookDisplay(){
	//first empty display and set index to 0 so that every card's
	//id equals it's myLibrary[] index.
	bookDisplay.innerHTML = "";
	index = 0;
	myLibrary.forEach((book) => drawCard(book));
};


//EventListener for delete button
bookDisplay.addEventListener("click", (e) => {
	if(e.target.classList.contains("deleteBtn")) {
		
		const targetIndex = e.target.parentElement.id;

		//remove obj with index targetIndex from library
		myLibrary.splice(targetIndex, 1);
		
		updateBookDisplay();
	}
});




