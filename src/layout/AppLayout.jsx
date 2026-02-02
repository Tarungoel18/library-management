import { Link, Outlet } from "react-router-dom";
import { ROUTES } from "../constants/routes.js";
import LogoutButton from "../components/logout/index.jsx"; 

export const AppLayout = () => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center bg-black p-3">
        <div className="d-flex gap-4">
          <Link className="text-decoration-none text-white" to={ROUTES.BOOK}>
            Book
          </Link>
          <Link className="text-decoration-none text-white" to={ROUTES.STUDENT}>
            Student
          </Link>
        </div>

        <LogoutButton />
      </div>

      <div className="p-4">
        <Outlet />
      </div>
    </>
  );
};

export default AppLayout;
