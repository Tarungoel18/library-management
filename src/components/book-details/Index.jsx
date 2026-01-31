import { useState } from "react";
import "./book-details.css";
const Index = ({ setBooks }) => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    author: "",
  });
  const [touched, setTouched] = useState({
    id: false,
    name: false,
    author: false,
  });

  const isFormValid =
    formData.id.trim() !== "" &&
    Number(formData.id) >= 0 &&
    formData.name.trim().length >= 3 &&
    formData.author.trim().length >= 3;

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      id: formData.id,
      title: formData.name,
      author: formData.author,
    };
    setBooks((prev) => [...prev, newBook]);
    setFormData({ id: "", name: "", author: "" });
    setTouched({ id: false, name: false, author: false });
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
            {touched.id &&
              (!formData.id ? (
                <div className="text-danger">Book ID is required</div>
              ) : formData.id < 0 ? (
                <div className="text-danger">Book ID cannot be negative</div>
              ) : null)}
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
              value={formData.name}
              onChange={handleChange}
              onBlur={() => handleBlur("name")}
            />
            {touched.name &&
              (!formData.name ? (
                <div className="text-danger">Book Name is required</div>
              ) : formData.name.length < 3 ? (
                <div className="text-danger">
                  Book Name must be at least 3 characters
                </div>
              ) : null)}
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
            {touched.author &&
              (!formData.author ? (
                <div className="text-danger">Author Name is required</div>
              ) : formData.author.length < 3 ? (
                <div className="text-danger">
                  Author Name must be at least 3 characters
                </div>
              ) : null)}
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

export default Index;
