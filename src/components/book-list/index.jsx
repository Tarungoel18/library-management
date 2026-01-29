import Table from "../table/index.jsx";
import bookData from "../../data/bookslist.json";
import ReactPaginate from "react-paginate";
import {
  BOOKS_PER_PAGE,
  MARGIN_PAGE_DISPLAYED,
  PAGE_RANGE_DISPLAYED,
} from "../../utils/AppConst.js";
import { useState } from "react";
const index = ({show,setShow}) => {
  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = BOOKS_PER_PAGE;
  const startingIndex = currentPage * itemsPerPage;
  const currentBooks = bookData.slice(
    startingIndex,
    startingIndex + itemsPerPage,
  );
  const pageCount = Math.ceil(bookData.length / itemsPerPage);

  const handlePageClick = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };
  return (
    <>
      {bookData.length === 0 ? (
        <div className="mt-5 border rounded p-4 mx-auto  max-wid-400  d-flex flex-column justify-content-center align-items-center">
          <p className="fs-2 fw-bold">No Books</p>
        </div>
      ) : (
        <div className="d-flex flex-column gap-5 justify-content-center align-items-center overflow-auto">
          <Table
            caption={"Book List"}
            columns={[
              { label: "Book ID", field: "id" },
              { label: "Book Name", field: "title" },
              { label: "Author Name", field: "author" },
            ]}
            data={currentBooks}
            isBook={true}
            show={show}
            setShow={setShow}
          />
          <div>
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              breakLabel={"..."}
              pageCount={pageCount}
              marginPagesDisplayed={MARGIN_PAGE_DISPLAYED}
              pageRangeDisplayed={PAGE_RANGE_DISPLAYED}
              onPageChange={handlePageClick}
              containerClassName={"pagination"}
              pageClassName={"page-item"}
              pageLinkClassName={"page-link"}
              previousClassName={"page-item"}
              previousLinkClassName={"page-link"}
              nextClassName={"page-item"}
              nextLinkClassName={"page-link"}
              breakClassName={"page-item"}
              breakLinkClassName={"page-link"}
              activeClassName={"active"}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default index;
