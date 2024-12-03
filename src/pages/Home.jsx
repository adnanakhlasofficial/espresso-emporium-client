import { Link, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import SectionHeading from "../components/SectionHeading";
import CoffeeCard from "../components/CoffeeCard";
import { useState } from "react";

const Home = () => {
    const loadedCoffees = useLoaderData();

    const [coffees, setCoffees] = useState(loadedCoffees || [])

    const handleDelete = (_id) => {
        console.log(_id)
        const remainingCoffees = coffees.filter(coffee => coffee._id !== _id);
        setCoffees(remainingCoffees);
        fetch(`https://api-espresso-emporium.vercel.app/coffees/${_id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }
    
    return (
        <main className="space-y-24 min-h-[calc(100vh-38rem)]">
            <Banner></Banner>
            <section className="bg-sectionbg bg-no-repeat bg-cover !my-24">
                <SectionHeading title={"Our Popular Products"} desc={"--- Sip & Savor ---"}>
                    <Link to={"/add-coffee"}><button className="btn-secondary mt-6"><span className="drop-shadow-text-2xl">Add Coffee</span></button></Link>
                </SectionHeading>

                <div className="wrapper grid grid-cols-1 lg:grid-cols-2 gap-8 !py-16">
                    {
                        coffees.map(coffee => <CoffeeCard key={coffee._id} handleDelete={handleDelete} coffee={coffee}></CoffeeCard>)
                    }
                </div>
            </section>
        </main>
    );
};

export default Home;