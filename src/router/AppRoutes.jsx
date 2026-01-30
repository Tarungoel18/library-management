import { Routes, Route , Navigate} from "react-router-dom";
import BookList from "../pages/book-list/index.jsx";
import StudentList from "../pages/student-list/index.jsx";
import AppLayout from "../layout/AppLayout.jsx";
import StudentDetail from "../pages/student-detail/index.jsx";
import NotFound from "../pages/not-found/index.jsx";
import { ROUTES } from "../constants/routes.js";
const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}> 
        <Route path={ROUTES.BOOK} element={<BookList />} />
        <Route path={ROUTES.STUDENT}>
          <Route index element={<StudentList />} />
          <Route path=":id" element={<StudentDetail />} />
        </Route>
         <Route path={ROUTES.ALL_STUDENTS} element={<Navigate to={ROUTES.STUDENT} replace />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
