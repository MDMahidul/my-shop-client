import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomeLayout from "../Layouts/HomeLayout";
import DashBoardLayout from "../Layouts/DashBoardLayout";
import Home from "../pages/Home/Home";
import Login from '../pages/Login/Login';
import Register from '../pages/Login/Register';
import DashBoard from "../pages/DashBoard/DashBoard/DashBoard";
import PrivateRoute from "./PrivateRoute";
import Product from "../pages/DashBoard/Product/Product";
import Customer from "../pages/DashBoard/Customer/Customer";
import Orders from "../pages/DashBoard/Orders/Orders";

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
    element: (
      <PrivateRoute>
        <DashBoardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <DashBoard />,
      },
      {
        path: "dashboard/products",
        element: <Product></Product>,
      },
      {
        path: "dashboard/customers",
        element: <Customer />,
      },
      {
        path: "dashboard/orders",
        element: <Orders />,
      },
    ],
  },
]);

export default router;