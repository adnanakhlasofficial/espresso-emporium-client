import { Link } from "react-router-dom";
import logo from "/images/logo1.png";

const Navbar = () => {
    return (
        <nav className="wrapper py-3">
            <h2 className="font-rancho text-white text-6xl flex items-center justify-center gap-4"><img className="h-20" src={logo} alt="logo" /> Espresso Emporium</h2>
        </nav>
    );
};

export default Navbar;