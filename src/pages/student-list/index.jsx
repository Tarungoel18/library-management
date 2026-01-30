import Table from "../../components/table/Index.jsx";
import studentData from "../../data/studentsList.json";
import ReactPaginate from "react-paginate";
import {
  STUDENTS_PER_PAGE,
  MARGIN_PAGE_DISPLAYED,
  PAGE_RANGE_DISPLAYED,
} from "../../constants/AppConst.js";
import { useState } from "react";

const StudentList = ({ onRowClick }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [show, setShow] = useState(true);

  const itemsPerPage = STUDENTS_PER_PAGE;
  const startingIndex = currentPage * itemsPerPage;
  const currentStudents = studentData.slice(
    startingIndex,
    startingIndex + itemsPerPage,
  );

  const pageCount = Math.ceil(studentData.length / itemsPerPage);

  const handlePageClick = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  return (
    <>
      {studentData.length === 0 ? (
        <div className="mt-5 border rounded p-4 mx-auto  max-wid-400  d-flex flex-column justify-content-center align-items-center ">
          <p className="fs-2 fw-bold">No Students</p>
        </div>
      ) : (
        <div className="d-flex flex-column gap-5 justify-content-center align-items-center overflow-auto  m-5 border p-3">
          <div className="d-flex position-relative w-100 justify-content-center align-items-center mt-3">
            <div>
              <p className="mb-0 fs-3 fw-bold">Student List</p>
            </div>
            <div className="position-absolute top-0 end-0">
              <button
                className="btn btn-primary"
                onClick={() => setShow((prev) => !prev)}
              >
                {show ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {show && (
            <>
              {" "}
              <Table
                columns={[
                  { label: "Student ID", field: "id" },
                  { label: "Student Name", field: "name" },
                  { label: "Student age", field: "age" },
                  { label: "Action", field: "action" },
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
            </>
          )}
        </div>
      )}
    </>
  );
};

export default StudentList;
