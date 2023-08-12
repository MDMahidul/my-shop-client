import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomeLayout from "../Layouts/HomeLayout";
import DashBoardLayout from "../Layouts/DashBoardLayout";
import Home from "../pages/Home/Home";
import Login from '../pages/Login/Login';
import Register from '../pages/Login/Register';
import DashBoard from "../pages/Home/DashBoard";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashBoardLayout />,
    children: [
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <DashBoard />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;