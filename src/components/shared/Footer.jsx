import FooterBottomPart from "./FooterBottomPart";
import FooterTopPart from "./FooterTopPart";

const Footer = () => {
    return (
        <div className='bg-[#2A3C50]'>
            <div className='w-10/12 lg:w-9/12 mx-auto text-white py-20 space-y-10'>
                <FooterTopPart />

                <FooterBottomPart />
            </div>
        </div>
    );
};

export default Footer;