import { Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import AppLayout from "../layout/AppLayout.jsx";
import { ROUTES } from "../constants/routes.js";

const BookList = lazy(() => import("../pages/book-list/Index.jsx"));
const StudentList = lazy(() => import("../pages/student-list/Index.jsx"));
const StudentDetail = lazy(() => import("../pages/student-detail/Index.jsx"));
const NotFound = lazy(() => import("../pages/not-found/Index.jsx"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Loading..</div>}>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path={ROUTES.BOOK} element={<BookList />} />
          <Route path={ROUTES.STUDENT}>
            <Route index element={<StudentList />} />
            <Route path=":id" element={<StudentDetail />} />
          </Route>
          <Route
            path={ROUTES.ALL_STUDENTS}
            element={<Navigate to={ROUTES.STUDENT} replace />}
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
