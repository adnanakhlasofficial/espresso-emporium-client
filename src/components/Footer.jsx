import {
    FaEnvelope,
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaTwitter,
} from "react-icons/fa";
import logo from "/images/logo1.png";
import { Link } from "react-router-dom";
import { MdCall } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="wrapper py-28 flex justify-between">
            <div>
                <img className="w-24 ml-8 mb-6" src={logo} alt="logo" />
                <h2 className="section-title mb-5">Espresso Emporium</h2>
                <p className="section-desc !max-w-2xl !leading-9">
                    Always ready to be your friend. Come & Contact with us to
                    share your memorable moments, to share with your best
                    companion.
                </p>
            </div>
            <div className="self-center">
                <div className="flex gap-5">
                    <Link to={"/"}>
                        <FaFacebook size={40} className="text-dark-brown" />
                    </Link>
                    <Link to={"/"}>
                        <FaTwitter size={40} className="text-dark-brown" />
                    </Link>
                    <Link to={"/"}>
                        <FaInstagram size={40} className="text-dark-brown" />
                    </Link>
                    <Link to={"/"}>
                        <FaLinkedin size={40} className="text-dark-brown" />
                    </Link>
                </div>
                <div className="mt-12">
                    <h2 className="section-title">Get in Touch</h2>
                    <div className="space-y-4 mt-6">
                        <p className="section-desc text-xl flex gap-6">
                            <MdCall size={24} className="text-dark-brown" /> +880 1533 333333
                        </p>
                        <p className="section-desc text-xl flex gap-6">
                            <FaEnvelope size={24} className="text-dark-brown" /> info@gmail.com
                        </p>
                        <p className="section-desc text-xl flex gap-6">
                            <FaLocationDot size={24} className="text-dark-brown" /> 72, Wall street, King Road, Dhaka
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
