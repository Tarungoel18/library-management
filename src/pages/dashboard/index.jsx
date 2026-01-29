import BookList from "../../components/book-list/index.jsx";
import StudentList from "../../components/student-list/index.jsx";
import StudentDetail from "../../components/student-detail/index.jsx";
import { useState } from "react";

const index = () => {
  const [isBook, setIsBook] = useState(true);
  const [selectedStudent, setSelectedStudent] = useState(null);

  return (
    <div className="p-5 d-flex flex-column">
      <div className="d-flex justify-content-center align-items-center gap-3">
        <button
          type="button"
          className={`btn ${isBook ? "btn-primary" : "btn-outline-primary"}`}
          onClick={() => {
            setIsBook(true);
            setSelectedStudent(null);
          }}
        >
          Book List
        </button>
        <button
          type="button"
          className={`btn ${!isBook ? "btn-primary" : "btn-outline-primary"}`}
          onClick={() => {
            setIsBook(false);
            setSelectedStudent(null);
          }}
        >
          Student List
        </button>
      </div>
      <div>
        {!selectedStudent ? (
          isBook ? (
            <BookList />
          ) : (
            <StudentList onRowClick={(e) => setSelectedStudent(e)} />
          )
        ) : (
          <StudentDetail student={selectedStudent} />
        )}
      </div>
    </div>
  );
};

export default index;
