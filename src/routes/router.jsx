import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AddCoffeee from "../pages/AddCoffeee";
import ViewCoffee from "../components/ViewCoffee";
import UpdateCoffee from "../components/UpdateCoffee";

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
            {
                path: "/view-coffee/:id",
                element: <ViewCoffee></ViewCoffee>,
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/coffees/${params.id}`),
            },
            {
                path: "/update-coffee/:id",
                element: <UpdateCoffee></UpdateCoffee>,
                loader: ({params}) => fetch(`http://localhost:5000/coffees/${params.id}`)
            },
        ],
    },
]);

export default router;
