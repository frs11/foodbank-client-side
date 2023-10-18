import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Registration from "../Pages/Registration";
import Login from "../Pages/Login";
import ErrorPage from "../Pages/ErrorPage";
import Homepage from "../Pages/Homepage";
import MyCart from "../Pages/MyCart";
import AddProduct from "../Pages/AddProduct";

const customRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Homepage></Homepage>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/addProduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/myCart",
        element: <MyCart></MyCart>,
      },
    ],
  },
]);

export default customRoutes;
