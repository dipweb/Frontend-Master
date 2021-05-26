
let favouriteBook=[];

function addFavouriteBook(bookName){
    if(!bookName.includes("Great")){
        favouriteBook.push(bookName);
    }

}

addFavouriteBook("A song of Ice and Fire");
addFavouriteBook("The Great Gatby");
addFavouriteBook("Crime and Punishment");
addFavouriteBook("Great Expectation");
addFavouriteBook("You don't know Js");

printFavoriteBook()
function printFavoriteBook(){

    console.log(favouriteBook.length)
    for(let favBook of favouriteBook){
        console.log(`My favorite book: ${favBook}`)
    }
}
