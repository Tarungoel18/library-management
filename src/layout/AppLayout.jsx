import { Link, Outlet } from "react-router-dom";
import { ROUTES } from "../constants/routes.js";
export const AppLayout = () => {
  return (
    <>
    <div className="d-flex justify-content-center gap-5 bg-black h-25 p-3">
      <Link className="text-decoration-none text-white" to={ROUTES.BOOK}>
        Book
      </Link>
      <Link className="text-decoration-none text-white" to={ROUTES.STUDENT}>
        Student
      </Link>
    </div>
    <Outlet />
    </>
  );
};

export default AppLayout;
