import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";

const SocialLinks = () => {
    return (
        <div className='flex justify-center items-center gap-3'>
            <div className="border border-slate-400 rounded-full p-2 cursor-pointer hover:scale-110 duration-200">
                <FaFacebookF />
            </div>
            <div className="border border-slate-400 rounded-full p-2 cursor-pointer hover:scale-110 duration-200">
                <FaInstagram />
            </div>
            <div className="border border-slate-400 rounded-full p-2 cursor-pointer hover:scale-110 duration-200">
                <FiYoutube />
            </div>
            <div className="border border-slate-400 rounded-full p-2 cursor-pointer hover:scale-110 duration-200">
                <FaLinkedinIn />
            </div>
            <div className="border border-slate-400 rounded-full p-2 cursor-pointer hover:scale-110 duration-200">
                <FaPinterestP />
            </div>
        </div>
    );
};

export default SocialLinks;