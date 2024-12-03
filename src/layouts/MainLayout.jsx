import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
    return (
        <div>
            <header className="bg-navbg bg-contain">
                <Navbar></Navbar>
            </header>

            <Outlet></Outlet>

            <footer className="bg-footerbg bg-cover bg-center">
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;
