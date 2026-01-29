import Table from "../table/index.jsx";
import studentData from "../../data/studentsList.json";
import ReactPaginate from "react-paginate";
import {
  STUDENTS_PER_PAGE,
  MARGIN_PAGE_DISPLAYED,
  PAGE_RANGE_DISPLAYED,
} from "../../utils/AppConst.js";
import { useState } from "react";

const StudentList = ({onRowClick}) => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  const itemsPerPage = STUDENTS_PER_PAGE;
  const startingIndex = currentPage * itemsPerPage;
  const currentStudents = studentData.slice(
    startingIndex,
    startingIndex + itemsPerPage,
  );

  const pageCount = Math.ceil(studentData.length / itemsPerPage);

  return (
    <div className="d-flex flex-column gap-5 justify-content-center align-items-center overflow-auto">
      <Table caption={"Student List"} columns = {[
         { label: "Student ID", field: "id" },
          { label: "Student Name", field: "name" },
          { label: "Student age", field: "age" },
      ]}
       data={currentStudents}
       isBook={false}
       onRowClick={onRowClick}
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
  );
};

export default StudentList;
