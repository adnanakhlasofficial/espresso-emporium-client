import { Link } from "react-router-dom";
import arrow from "../assets/img/arrow.png";

const AddCoffeee = () => {
    const handleAddCoffee = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const price = form.price.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const addCoffee = {
            name,
            chef,
            supplier,
            price,
            category,
            details,
            photo,
        };

        console.log(addCoffee);
    };

    return (
        <div className="bg-formbg bg-cover w-full flex flex-col justify-center items-center">
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
            <div className="wrapper bg-off-white my-20 rounded-md !px-28 !py-16">
                <h2 className="form-heading">Add New Coffee</h2>
                <p className="form-desc">
                    It is a long established fact that a reader will be
                    distraceted by the readable content of a page when looking
                    at its layout. The point of using Lorem Ipsum is that it has
                    a more-or-less normal distribution of letters, as opposed to
                    using Content here.
                </p>

                <form
                    onSubmit={handleAddCoffee}
                    className="grid grid-cols-2 gap-6 place-content-center mt-8"
                >
                    <label htmlFor="name" className="flex flex-col gap-4">
                        <span className="form-title">name:</span>
                        <input
                            className="form-input"
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Enter coffee name"
                        />
                    </label>
                    <label htmlFor="chef" className="flex flex-col gap-4">
                        <span className="form-title">chef:</span>
                        <input
                            className="form-input"
                            type="text"
                            name="chef"
                            placeholder="Enter coffee chef"
                            id="chef"
                        />
                    </label>
                    <label htmlFor="supplier" className="flex flex-col gap-4">
                        <span className="form-title">supplier:</span>
                        <input
                            className="form-input"
                            type="text"
                            name="supplier"
                            id="supplier"
                            placeholder="Enter coffee supplier"
                        />
                    </label>
                    <label htmlFor="price" className="flex flex-col gap-4">
                        <span className="form-title">price:</span>
                        <input
                            className="form-input"
                            type="text"
                            name="price"
                            placeholder="Enter coffee price"
                            id="price"
                        />
                    </label>
                    <label htmlFor="category" className="flex flex-col gap-4">
                        <span className="form-title">category:</span>
                        <input
                            className="form-input"
                            type="text"
                            name="category"
                            id="category"
                            placeholder="Enter coffee category"
                        />
                    </label>
                    <label htmlFor="details" className="flex flex-col gap-4">
                        <span className="form-title">details:</span>
                        <input
                            className="form-input"
                            type="text"
                            name="details"
                            placeholder="Enter coffee details"
                            id="details"
                        />
                    </label>
                    <label
                        htmlFor="photo"
                        className="flex flex-col gap-4 col-span-2"
                    >
                        <span className="form-title">photo:</span>
                        <input
                            className="form-input"
                            type="text"
                            name="photo"
                            placeholder="Enter coffee photo"
                            id="photo"
                        />
                    </label>
                    <button className="btn-secondary mt-6 hover:bg-primary cursor-pointer col-span-2">
                        <span className="drop-shadow-text-2xl">Add Coffee</span>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddCoffeee;
