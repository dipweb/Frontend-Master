class Bookshelf {
	constructor() {
		this.favoriteBooks = [];
	}

	// TODO: define methods `addFavoriteBook(..)`
    addFavoriteBook(bookName) {
        if (!bookName.includes("Great")) {
            this.favoriteBooks.push(bookName);
        }
    }
    
	// and `printFavoriteBooks()`

     printFavoriteBooks() {
        console.log(`Favorite Books: ${this.favoriteBooks.length}`);
        for (let bookName of this.favoriteBooks) {
            console.log(bookName);
        }
    }
    
}



function loadBooks( bookShelf ) {
	// TODO: call fakeAjax( .. );
    fakeAjax(BOOK_API,function favBookHandler(books){
        for(let i=0;i<books.length;i++){
            bookShelf.addFavoriteBook(books[i])
        }

        bookShelf.printFavoriteBooks()
    })
}

var BOOK_API = "https://some.url/api";
let myBook=new Bookshelf();
loadBooks(myBook)

// ***********************

// NOTE: don't modify this function at all
function fakeAjax(url,cb) {
	setTimeout(function fakeLoadingDelay(){
		cb([
			"A Song of Ice and Fire",
			"The Great Gatsby",
			"Crime & Punishment",
			"Great Expectations",
			"You Don't Know JS"
		]);
	},500);
}
