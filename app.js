class Books {
  constructor(id, name, title) {
    this.id = id;
    this.name = name;
    this.title = title;
  }

  //   getInfo() {
  //     return `ID: ${this.id}, Name: ${this.name}, Title: ${this.title}`;
  //   }
}
let arrOfBooks = [];

//const book1 = new Books(1, "Fyodor Dostoevsky", "Crime and Punishment");
//const book2 = new Books(2, "William Shakespeare", "The Tempest");

const addNewBook = (id, name, title) => {
  let newBook = new Books(id, name, title);
  arrOfBooks.push({ id: id, name: name, title: title });
};
addNewBook(1, "Fyodor Dostoevsky", "Crime and Punishment");
addNewBook(2, "William Shakespeare", "The Tempest");

console.log(arrOfBooks);

const updateBook = (id, updatedName, updatedTitle) => {
  let bookIndex = arrOfBooks.findIndex((book) => book.id === id);

  if (bookIndex !== -1) {
    if (updatedName) arrOfBooks[bookIndex].name = updatedName;
    if (updatedTitle) arrOfBooks[bookIndex].title = updatedTitle;

    console.log(`Book with ID ${id} has been updated.`);
  } else {
    console.log(`Book with ID ${id} not found.`);
  }
};
updateBook(1, "Fyodor M. Dostoevsky", "Crime and Punishment (Updated)");
console.log("After update:", arrOfBooks);

const deleteBook = (id) => {
  const bookIndex = arrOfBooks.findIndex((book) => book.id === id);
  if (bookIndex !== -1) {
    arrOfBooks.splice(bookIndex, 1);
    console.log(`Book with ID ${id} has been deleted.`);
  } else {
    console.log(`Book with ID ${id} not found.`);
  }
};
deleteBook(2);
console.log("After delete:", arrOfBooks);

const getBook = (id) => {
  const book = arrOfBooks.find((book) => book.id === id);
  if (book) {
    console.log(
      `Book found: ID: ${book.id}, Name: ${book.name}, Title: ${book.title}`
    );
    return book;
  } else {
    console.log(`Book with ID ${id} not found.`);
    return null;
  }
};

let book = getBook(1);
console.log("Retrieved book:", book);
