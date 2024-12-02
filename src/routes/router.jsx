import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AddCoffeee from "../pages/AddCoffeee";
import ViewCoffee from "../pages/ViewCoffee";
import UpdateCoffee from "../pages/UpdateCoffee";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("https://api-espresso-emporium.vercel.app/coffees"),
            },
            {
                path: "/add-coffee",
                element: <AddCoffeee></AddCoffeee>,
            },
            {
                path: "/view-coffee/:id",
                element: <ViewCoffee></ViewCoffee>,
                loader: ({ params }) =>
                    fetch(`https://api-espresso-emporium.vercel.app/coffees/${params.id}`),
            },
            {
                path: "/update-coffee/:id",
                element: <UpdateCoffee></UpdateCoffee>,
                loader: ({params}) => fetch(`https://api-espresso-emporium.vercel.app/coffees/${params.id}`)
            },
        ],
    },
]);

export default router;
