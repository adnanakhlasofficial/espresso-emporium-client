import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AddCoffeee from "../pages/AddCoffeee";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("http://localhost:5000/coffees"),
            },
            {
                path: "/add-coffee",
                element: <AddCoffeee></AddCoffeee>,
            },
        ],
    },
]);

export default router;
