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
import Error from "../pages/Error/Error";
import Details from "../pages/DashBoard/Product/Details";
import AddProduct from "../pages/DashBoard/Product/AddProduct";
import AddCustomer from "../pages/DashBoard/Customer/AddCustomer";
import CustomerDetails from "../pages/DashBoard/Customer/CustomerDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error></Error>,
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
    path: "/dashboard",
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
        path: "products",
        element: <Product></Product>,
      },
      {
        path: "details/:id",
        element: <Details />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },
      {
        path: "addproduct",
        element: <AddProduct />,
      },
      {
        path: "customers",
        element: <Customer />,
      },
      {
        path: "addcustomer",
        element: <AddCustomer />,
      },
      {
        path: "customerdetails/:id",
        element: <CustomerDetails/>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/customer/${params.id}`),
      },
      {
        path: "orders",
        element: <Orders />,
      },
    ],
  },
]);

export default router;