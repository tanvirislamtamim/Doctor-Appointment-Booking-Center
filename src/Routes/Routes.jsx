import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import DoctorDetails from "../Pages/DoctorDetails/DoctorDetails";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            index: true,
            path: "/",
            Component: Home,
            hydrateFallbackElement: <h1>Looding.......</h1>,
            loader: ()=> fetch("doctors.json"),
          },
          {
            path: "/doctorDetails/:id",
            Component: DoctorDetails,
            hydrateFallbackElement: <h1>Looding.......</h1>,
            loader: ()=> fetch("doctors.json"),
          }
        
        
    ],
  },
]);