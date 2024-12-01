import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import SectionHeading from "../components/SectionHeading";

const Home = () => {
    return (
        <div className="space-y-24">
            <Banner></Banner>
            <section className="bg-sectionbg">
                <SectionHeading title={"Our Popular Products"} desc={"--- Sip & Savor ---"}>
                    <Link to={"/add-coffee"}><button className="btn-secondary mt-4"><span className="drop-shadow-text-2xl">Add Coffee</span></button></Link>
                </SectionHeading>
            </section>
        </div>
    );
};

export default Home;