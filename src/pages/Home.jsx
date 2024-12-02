import { Link, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import SectionHeading from "../components/SectionHeading";
import CoffeeCard from "../components/CoffeeCard";

const Home = () => {
    const coffees = useLoaderData();
    
    return (
        <div className="space-y-24">
            <Banner></Banner>
            <section className="bg-sectionbg bg-no-repeat bg-cover !my-24">
                <SectionHeading title={"Our Popular Products"} desc={"--- Sip & Savor ---"}>
                    <Link to={"/add-coffee"}><button className="btn-secondary mt-6"><span className="drop-shadow-text-2xl">Add Coffee</span></button></Link>
                </SectionHeading>

                <div className="wrapper grid grid-cols-2 gap-8 mt-12">
                    {
                        coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
                    }
                </div>
            </section>
        </div>
    );
};

export default Home;