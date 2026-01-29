import { Routes, Route } from "react-router-dom";
import BookList from "../pages/book-list/index.jsx";
import StudentList from "../pages/student-list/index.jsx";
import AppLayout from "../layout/AppLayout.jsx";
import StudentDetail from "../pages/student-detail/index.jsx";
import { ROUTES } from "../constants/routes.js";
const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path={ROUTES.BOOK} element={<BookList />} />
        <Route path={ROUTES.STUDENT} element={<StudentList />} />
        <Route path={`${ROUTES.STUDENT_DETAIL}/:id`} element={<StudentDetail/>} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
