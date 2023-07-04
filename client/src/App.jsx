import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login/Login";

function App() {
  return <RouterProvider router={router} />;
}

export default App;

const router = createBrowserRouter([
  { path: "Login", element: <Login /> },

]);
