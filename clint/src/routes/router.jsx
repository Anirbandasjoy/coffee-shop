import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Addcoffee from "../components/Addcoffee";
import AllCoffee from "../components/AllCoffee";
import axios from "axios";
import UpdateCoffee from "../components/UpdateCoffee";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />,

            },
            {
                path: "/add-coffee",
                element: <Addcoffee />
            },
            {
                path: "/all-coffee",
                element: <AllCoffee />,
                loader: () => axios.get("http://localhost:4000/coffee")
            },
            {
                path: "/update-coffee/:id",
                element: <UpdateCoffee />
            }
        ]
    }
])