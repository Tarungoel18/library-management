import "./not-found.css";
const Index = () => {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="d-flex flex-column justify-content-center align-items-center border border-black height-75-vh width-50-vw">
        <div>
          <p className="fs-1 fw-bold">404</p>
        </div>
        <div className="d-flex flex-wrap gap-2 justify-content-center align-items-center">
          <span className="fs-1 fw-semibold">Page </span>
          <span className="fs-1 fw-semibold">Not</span>
          <span className="fs-1 fw-semibold"> Found!!!</span>
        </div>
      </div>
    </div>
  );
};

export default Index;
