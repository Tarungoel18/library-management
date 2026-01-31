import { useState } from "react";
import bookData from "../../data/bookslist.json"
import BookDetails from "../../components/book-details/Index.jsx"
import BookList from "../../components/book-list/Index.jsx"

const Index = () => {
    const [books, setBooks] = useState(bookData);

  return (
     <>
      <BookDetails setBooks={setBooks} />
      <BookList books={books} />
    </>
  )
}

export default Index