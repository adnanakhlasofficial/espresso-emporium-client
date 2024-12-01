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
                element: <Home></Home>
            },
            {
                path: "/add-coffee",
                element: <AddCoffeee></AddCoffeee>
            }
        ]
    },
]);

export default router;
