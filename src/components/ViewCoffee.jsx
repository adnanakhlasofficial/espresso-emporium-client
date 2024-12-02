import { Link, useLoaderData } from "react-router-dom";
import arrow from "../assets/img/arrow.png";


const ViewCoffee = () => {
    const coffee = useLoaderData();
    console.log(coffee);
    return (
        <div className="bg-formbg bg-cover w-full flex flex-col justify-center items-center pb-24">

            <div className="self-start wrapper my-8">
                <Link
                    className="text-3xl rounded-lg font-rancho text-center text-blue-gray flex gap-4 items-center hover:bg-primary px-6 py-2 w-max transition-all duration-300"
                    to={"/"}
                >
                    {" "}
                    <img className="w-6 h-6" src={arrow} alt="arrow" />{" "}
                    <span className="drop-shadow-text-3xl ">Back to home</span>
                </Link>
            </div>


            <div className="wrapper py-24 gap-24 justify-center rounded-xl bg-[#F5F4F1] flex items-center !mx-auto">
                <div className="">
                    <img
                        className="h-full w-full object-cover rounded-lg"
                        src={coffee.photo}
                        alt=""
                    />
                </div>
                <div className="space-y-2">
                    <p className="section-title mb-8">Niceties</p>
                    <p className="font-medium text-deep-black text-xl">
                        Name:{" "}
                        <span className="text-[#5C5B5B] font-normal">
                            {coffee.name}
                        </span>
                    </p>
                    <p className="font-medium text-deep-black text-xl">
                        Chef:{" "}
                        <span className="text-[#5C5B5B] font-normal">
                            {coffee.chef}
                        </span>
                    </p>
                    <p className="font-medium text-deep-black text-xl">
                        Supplier:{" "}
                        <span className="text-[#5C5B5B] font-normal">
                            {coffee.supplier}
                        </span>
                    </p>
                    <p className="font-medium text-deep-black text-xl">
                        Price:{" "}
                        <span className="text-[#5C5B5B] font-normal">
                            {coffee.price}
                        </span>
                    </p>
                    <p className="font-medium text-deep-black text-xl">
                        Category:{" "}
                        <span className="text-[#5C5B5B] font-normal">
                            {coffee.category}
                        </span>
                    </p>
                    <p className="font-medium text-deep-black text-xl">
                        Details:{" "}
                        <span className="text-[#5C5B5B] font-normal">
                            {coffee.details} Taka
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ViewCoffee;
