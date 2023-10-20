import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Registration from "../Pages/Registration";
import Login from "../Pages/Login";
import ErrorPage from "../Pages/ErrorPage";
import Homepage from "../Pages/Homepage";
import MyCart from "../Pages/MyCart";
import AddProduct from "../Pages/AddProduct";
import PrivateRoutes from "./PrivateRoutes";
import PreventionRoute from "./PreventionRoute";
import BrandProducts from "../Pages/BrandProducts";
import ProductDetails from "../Pages/ProductDetails";
import UpdateProduct from "../Pages/UpdateProduct";

const customRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Homepage></Homepage>,
        loader: () => fetch("/brands.json"),
      },
      {
        path: "/registration",
        element: (
          <PreventionRoute>
            <Registration></Registration>
          </PreventionRoute>
        ),
      },
      {
        path: "/login",
        element: (
          <PreventionRoute>
            <Login></Login>
          </PreventionRoute>
        ),
      },
      {
        path: "/addProduct",
        element: (
          <PrivateRoutes>
            <AddProduct></AddProduct>
          </PrivateRoutes>
        ),
      },
      {
        path: `/brands/:brandCode`,
        element: (
          <PrivateRoutes>
            <BrandProducts></BrandProducts>
          </PrivateRoutes>
        ),
      },
      {
        path: `/products/:productId`,
        element: (
          <PrivateRoutes>
            <ProductDetails></ProductDetails>
          </PrivateRoutes>
        ),
      },
      {
        path: `/products/update/:productId`,
        element: (
          <PrivateRoutes>
            <UpdateProduct></UpdateProduct>
          </PrivateRoutes>
        ),
      },
      {
        path: "/myCart",
        element: (
          <PrivateRoutes>
            <MyCart></MyCart>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default customRoutes;
