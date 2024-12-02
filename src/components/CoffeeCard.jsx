import viewIcon from "../assets/img/view.png";
import deleteIcon from "../assets/img/delete.png"
import editIcon from "../assets/img/edit.png";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CoffeeCard = ({coffee, handleDelete}) => {
    return (
        <div className="p-7 rounded-xl bg-[#F5F4F1] flex items-center mr-8 w-full">
            <div className="w-1/4 mr-6">
                <img className="h-full w-full object-cover rounded-lg" src={coffee.photo} alt="" />
            </div>
            <div className="space-y-2 mr-12 grow">
                <p className="font-medium text-deep-black text-xl">Name: <span className="text-[#5C5B5B] font-normal">{coffee.name}</span></p>
                <p className="font-medium text-deep-black text-xl">Chef: <span className="text-[#5C5B5B] font-normal">{coffee.chef}</span></p>
                <p className="font-medium text-deep-black text-xl">Price: <span className="text-[#5C5B5B] font-normal">{coffee.price} Taka</span></p>
            </div>
            <div className="flex flex-col gap-3 mr-12">
                <Link to={`/view-coffee/${coffee._id}`}><button className="card-btn bg-[#D2B48C]"><img src={viewIcon} alt="view" /></button></Link>
                <button className="card-btn bg-[#3C393B]"><img src={editIcon} alt="view" /></button>
                <button onClick={() => handleDelete(coffee._id)} className="card-btn bg-[#EA4744]"><img src={deleteIcon} alt="delete" /></button>
            </div>
        </div>
    );
};

CoffeeCard.propTypes = {
    coffee: PropTypes.object,
    handleDelete: PropTypes.func,
}

export default CoffeeCard;