import { useState } from "react";
import bookData from "../../data/bookslist.json";
import BookDetails from "../../components/book-details/index.jsx";
import BookList from "../../components/book-list/index.jsx";

const BookPage = () => {
  const [books, setBooks] = useState(bookData);

  return (
    <>
      <BookDetails setBooks={setBooks} />
      <BookList books={books} />
    </>
  );
};

export default BookPage;
