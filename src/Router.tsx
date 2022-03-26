import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { userStore } from "./types/user.types";
import Admin from "./pages/Admin";
import PractitionersList from "./pages/PractitionersList";

// import {useSelector, useDispatch} from 'react-redux'
// import { userStore } from './types/user.types';

//     const userState = useSelector((state: { user: userStore }) => state.user);
// console.log("userState >>> :",userState);
const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/admin" element={<AdminRoute component={<Admin />} />} />
      <Route path="/practitioners" element={<PractitionersList />} />
      {/* <Route path="*" element={<404Page />} /> */}
    </Routes>
  );
};

/**
 * @func PrivateRoute Define a private route component for restricted access
 * @param component Component argument to return if the user is logged in
 * @return A JSX.Element to the view if the user is logged in
 */
const PrivateRoute = ({
  component: Component,
}: {
  component: JSX.Element;
}): JSX.Element => {
  //                ^ param                    ^ param typing              ^ expected return
  const userState = useSelector((state: { user: userStore }) => state.user);
  // ^ get user state to check if user is logged in
  return !userState.isLogged ? <Navigate to="/" /> : Component;
  // if user is not logged in, redirect the user to {path}, else -> render the component
};

/**
 * @func AdminRoute Define an admin route component for admin access
 * @param component Component argument to return if the user is logged in
 * @return A JSX.Element to the view if the user is logged in and if the user is administrator
 */
const AdminRoute = ({
  component: Component,
}: {
  component: JSX.Element;
}): JSX.Element => {
  const userState = useSelector((state: { user: userStore }) => state.user);
  return userState.isLogged && userState.role === "admin" ? (
    Component
  ) : (
    <Navigate to="/" />
  );
};

export default AppRouter;
