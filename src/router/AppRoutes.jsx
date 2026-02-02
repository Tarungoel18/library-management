import { Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import AppLayout from "../layout/AppLayout.jsx";
import { ROUTES } from "../constants/routes.js";
import ProtectedRoute from "../components/protected-route/index.jsx";

const StudentList = lazy(() => import("../pages/student-list/index.jsx"));
const StudentDetail = lazy(() => import("../pages/student-detail/index.jsx"));
const NotFound = lazy(() => import("../pages/not-found/index.jsx"));
const BookPage = lazy(() => import("../pages/book-page/index.jsx"));
const UserList = lazy(() => import("../pages/user-list/index.jsx"));
const Practice = lazy(() => import("../pages/practice/index.jsx"));
const Dashboard = lazy(() => import("../pages/dashboard/index.jsx"));
const Login = lazy(() => import("../pages/login/index.jsx"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Loading..</div>}>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          element={
            <ProtectedRoute>
              <AppLayout />
            </ProtectedRoute>
          }
        >
          <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
          <Route path={ROUTES.BOOK} element={<BookPage />} />
          <Route path={ROUTES.STUDENT}>
            <Route index element={<StudentList />} />
            <Route path=":id" element={<StudentDetail />} />
          </Route>
          <Route
            path={ROUTES.ALL_STUDENTS}
            element={<Navigate to={ROUTES.STUDENT} replace />}
          />
        </Route>

        <Route
          path={ROUTES.USER_LIST}
          element={
            <ProtectedRoute>
              <UserList />
            </ProtectedRoute>
          }
        />
        <Route
          path={ROUTES.PRACTICE}
          element={
            <ProtectedRoute>
              <Practice />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
