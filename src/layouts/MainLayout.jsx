import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
    return (
        <div>
            <header className="bg-navbg bg-contain">
                <Navbar></Navbar>
            </header>
            <main className="min-h-[calc(100vh-38rem)]">
                <Outlet></Outlet>
            </main>
            <footer className="bg-footerbg bg-cover bg-center">
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;