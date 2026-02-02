import "./student.css"
import studentData from "../../data/studentsList.json";
import { useParams } from "react-router-dom";
const StudentDetail = () => {
  const {id} = useParams();
  const student = studentData[id-1];
  return (
    <div className="container mt-4">
      <p className="text-center fs-3 fw-bold mb-4">Student Details</p>
      <div className="border rounded p-4 mx-auto max-wid-400">
        <div className="row mb-2">
          <div className="col-6 text-end fw-semibold">Student ID:</div>
          <div className="col-6">{student?.id}</div>
        </div>
        <div className="row mb-2">
          <div className="col-6 text-end fw-semibold">Student Name:</div>
          <div className="col-6">{student?.title}</div>
        </div>
        <div className="row">
          <div className="col-6 text-end fw-semibold">Age:</div>
          <div className="col-6">{student?.age}</div>
        </div>
      </div>
    </div>
  );
}

export default StudentDetail;
