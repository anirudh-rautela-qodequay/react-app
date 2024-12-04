import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Login from "../Pages/Login/Login";
import ParentWrapper from "../Layout/ParentWrapper.jsx";
import ErrorPage from "../Layout/ErrorPage.jsx";
import Dashboard from "../Pages/Dashboard/Dashboard.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<ParentWrapper />}>
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </>
  )
);

export default router;
