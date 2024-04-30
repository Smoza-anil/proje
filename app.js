let bookList = [];
const getBooks = () => {
    fetch("./products.json")
    .then((res => res.json()))
    .then((books => bookList = books));
};


getBooks();
