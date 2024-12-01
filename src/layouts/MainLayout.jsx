import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
    return (
        <div>
            <header className="bg-navbg bg-contain">
                <Navbar></Navbar>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>
                <h2 className="font-raleway">footer</h2>
            </footer>
        </div>
    );
};

export default MainLayout;