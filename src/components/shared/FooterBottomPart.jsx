import { copyrightLinks } from "@/lib/data";
import CopyrightLink from "../ui/CopyrightLink";

const FooterBottomPart = () => {

    return (
        <div className='copyright border-t border-[#5f5f5f] pt-5 space-y-3 flex flex-col lg:flex-row justify-between items-center text-[#cfc9c9]'>
            <p className='copyright-part-1'>
                © 2026 Tiles Gallery. All rights reserved.
            </p>

            <div className='copyright-part-2 flex items-center gap-5'>
                {
                    copyrightLinks.map(link => <CopyrightLink key={link.id} link={link} />)
                }
            </div>
        </div>
    );
};

export default FooterBottomPart;