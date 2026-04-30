import SocialLinks from "../ui/SocialLinks";

const FooterTopPart = () => {

    return (
        <div className='text-center px-10 space-y-8'>
            <div className='space-y-4'>
                <h2 className='footer-logo text-5xl font-bold text-[#CE8E78]'>
                    The Tile <br />
                    Gallery
                </h2>
                <p className='text-slate-200'>
                    Premium quality tiles curated for modern living. Discover designs that transform your space.
                    Stylish tiles for every space. Quality, durability, and design in one place.
                </p>
            </div>

            <div className='space-y-3'>
                <h3 className='text-lg font-medium '>
                    Contact Us
                </h3>

                <SocialLinks />
            </div>
        </div>
    );
};

export default FooterTopPart;