import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <header>
                <h2 className="font-rancho">header</h2>
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