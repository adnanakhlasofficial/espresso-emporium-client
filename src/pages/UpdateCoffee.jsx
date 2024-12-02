import { Link, useLoaderData, useParams } from "react-router-dom";
import arrow from "../assets/img/arrow.png";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const { id } = useParams();
    const coffee = useLoaderData();
    console.log(coffee);

    const handleUpdateCoffee = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const price = form.price.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updateCoffee = {
            name,
            chef,
            supplier,
            price,
            category,
            details,
            photo,
        };

        console.log(updateCoffee);

        Swal.fire({
            title: "Are you sure?",
            text: "Do you want to update coffee?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, add it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://api-espresso-emporium.vercel.app/coffees/${id}`, {
                    method: "PUT",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(updateCoffee),
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        if (data.modifiedCount) {
                            Swal.fire({
                                title: "Confirmation!",
                                text: "Coffee has been added Updated!",
                                icon: "success",
                            });
                            form.reset();
                        }
                    });
            }
        });
    };

    return (
        <main className="bg-formbg bg-cover w-full flex flex-col justify-center items-center min-h-[calc(100vh-38rem)]">
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
                <h2 className="form-heading">Update Existing Coffee Details</h2>
                <p className="form-desc">
                    It is a long established fact that a reader will be
                    distraceted by the readable content of a page when looking
                    at its layout. The point of using Lorem Ipsum is that it has
                    a more-or-less normal distribution of letters, as opposed to
                    using Content here.
                </p>

                <form
                    onSubmit={handleUpdateCoffee}
                    className="grid grid-cols-2 gap-6 place-content-center mt-8"
                >
                    <label htmlFor="name" className="flex flex-col gap-4">
                        <span className="form-title">name:</span>
                        <input
                            className="form-input"
                            type="text"
                            name="name"
                            id="name"
                            defaultValue={coffee.name}
                            placeholder="Enter coffee name"
                        />
                    </label>
                    <label htmlFor="chef" className="flex flex-col gap-4">
                        <span className="form-title">chef:</span>
                        <input
                            className="form-input"
                            type="text"
                            name="chef"
                            defaultValue={coffee.chef}
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
                            defaultValue={coffee.supplier}
                            placeholder="Enter coffee supplier"
                        />
                    </label>
                    <label htmlFor="price" className="flex flex-col gap-4">
                        <span className="form-title">price:</span>
                        <input
                            className="form-input"
                            type="text"
                            name="price"
                            defaultValue={coffee.price}
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
                            defaultValue={coffee.category}
                            placeholder="Enter coffee category"
                        />
                    </label>
                    <label htmlFor="details" className="flex flex-col gap-4">
                        <span className="form-title">details:</span>
                        <input
                            className="form-input"
                            type="text"
                            name="details"
                            defaultValue={coffee.details}
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
                            defaultValue={coffee.photo}
                            placeholder="Enter coffee photo"
                            id="photo"
                        />
                    </label>
                    <button className="btn-secondary mt-6 hover:bg-primary cursor-pointer col-span-2">
                        <span className="drop-shadow-text-2xl">
                            Update Coffee Details
                        </span>
                    </button>
                </form>
            </div>
        </main>
    );
};

export default UpdateCoffee;
