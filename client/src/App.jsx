import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login/Login";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import ChangePassword from "./pages/ChangePassword/ChangePassword";
import Register from "./pages/Register/Register";

function App() {
  return <RouterProvider router={router} />;
}

export default App;

const router = createBrowserRouter([
  { path: "Login", element: <Login /> },
  { path: "ForgotPassword", element: <ForgotPassword /> },
  { path: "ChangePassword", element: <ChangePassword /> },
  { path: "Register", element: <Register /> },
]);
