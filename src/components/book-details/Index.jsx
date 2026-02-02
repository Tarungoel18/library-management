import { useState, useRef, useEffect, useReducer } from "react";
import { useDispatch } from "react-redux";
import "./book-details.css";
import { addBook } from "../../redux/slice/bookSlice.js";
const BookDetails = () => {
  const [formData, setFormData] = useState({
    id: "",
    author: "",
  });
  const [touched, setTouched] = useState({
    id: false,
    name: false,
    author: false,
  });

  const nameReducer = (state, action) => {
    switch (action.type) {
      case "SET_NAME":
        return action.payload;
      case "RESET":
        return "";
      default:
        return state;
    }
  };

  const [isFormValid, setIsFormValid] = useState(false);
  const [bookName, dispatchBookName] = useReducer(nameReducer, "");
  const dispatch = useDispatch();
  const timer = useRef(null);

  useEffect(() => {
    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, []);

  const getErrorMessage = (fieldName, value) => {
    if (!value || value.trim() === "") {
      return `${fieldName} is required`;
    }

    if (value.trim().length < 3 && fieldName !== "Book ID") {
      return `${fieldName} must be at least 3 characters`;
    }

    if (fieldName === "Book ID" && Number(value) < 0) {
      return `Book ID cannot be negative`;
    }

    return "";
  };

  const validateForm = (currentFormData, currentBookName) => {
    return (
      currentFormData.id.trim() !== "" &&
      Number(currentFormData.id) >= 0 &&
      currentBookName.trim().length >= 3 &&
      currentFormData.author.trim().length >= 3
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      id: formData.id,
      title: bookName,
      author: formData.author,
    };
    dispatch(addBook(newBook));
    dispatchBookName({ type: "RESET" });
    setFormData({ id: "", author: "" });
    setTouched({ id: false, name: false, author: false });
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    const newFormData = { ...formData, [name]: value };
    setFormData(newFormData);

    if (timer.current) clearTimeout(timer.current);

    timer.current = setTimeout(() => {
      setIsFormValid(validateForm(newFormData, bookName));
    }, 500);
  };

  const handleNameChange = (e) => {
    const value = e.target.value;
    dispatchBookName({ type: "SET_NAME", payload: value });

    if (timer.current) clearTimeout(timer.current);

    timer.current = setTimeout(() => {
      setIsFormValid(validateForm(formData, value));
    }, 500);
  };

  return (
    <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center container mt-4">
      <h3 className="mb-4">Book Details Form</h3>

      <form onSubmit={handleSubmit} className="form-layout">
        <div className="row mb-3 align-items-center">
          <label htmlFor="bookId" className="col-12 col-md-4 col-form-label">
            Book ID <span className="text-danger">*</span>
          </label>
          <div className="col-12 col-md-8">
            <input
              type="number"
              id="bookId"
              name="id"
              className="form-control"
              value={formData.id}
              onChange={handleChange}
              onBlur={() => handleBlur("id")}
            />
            {touched.id && (
              <div className="text-danger">
                {getErrorMessage("Book ID", formData.id)}
              </div>
            )}
          </div>
        </div>

        <div className="row mb-3 align-items-center">
          <label htmlFor="bookName" className="col-12 col-md-4 col-form-label">
            Book Name <span className="text-danger">*</span>
          </label>
          <div className="col-12 col-md-8">
            <input
              id="bookName"
              type="text"
              name="name"
              className="form-control"
              value={bookName}
              onChange={handleNameChange}
              onBlur={() => handleBlur("name")}
            />
            {touched.name && (
              <div className="text-danger">
                {getErrorMessage("Book Name", bookName)}
              </div>
            )}
          </div>
        </div>

        <div className="row mb-3 align-items-center">
          <label htmlFor="author" className="col-12 col-md-4 col-form-label">
            Author <span className="text-danger">*</span>
          </label>
          <div className="col-12 col-md-8">
            <input
              type="text"
              id="author"
              name="author"
              className="form-control"
              value={formData.author}
              onChange={handleChange}
              onBlur={() => handleBlur("author")}
            />
            {touched.author && (
              <div className="text-danger">
                {getErrorMessage("Author", formData.author)}
              </div>
            )}
          </div>
        </div>

        <div className="text-center">
          <button
            type="submit"
            disabled={!isFormValid}
            className="btn btn-primary"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookDetails;
