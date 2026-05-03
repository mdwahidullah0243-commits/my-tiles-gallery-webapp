import { getTiles } from "@/lib/data";
import { GoDash } from "react-icons/go";
import { MdOutlinePanoramaVerticalSelect } from "react-icons/md";

const MarqueeContent = async () => {
    const tiles = await getTiles();
    console.log(tiles);

    return (
        <div className="flex items-center gap-5 font-medium text-[#2c64ffdd]">
            <span><MdOutlinePanoramaVerticalSelect /></span>
            <div className="flex items-center gap-3">
                <h3 className="text-lg font-semibold text-[#ff0000f8]">
                    New Arrivals: 
                </h3>

                {
                    tiles.slice(0, 4).map(tile => {
                        return (
                            <p key={tile.id} className="flex items-center gap-3">
                                {tile.title}
                                <GoDash />
                            </p>
                        )
                    })
                }
            </div>

            <span><MdOutlinePanoramaVerticalSelect /></span>

            <p>
                <span className="text-lg font-semibold text-[#fd034ef8]">Weekly Feature: </span> Modern Geometric Patterns
            </p>

            <span><MdOutlinePanoramaVerticalSelect /></span>
            
            <p className="mr-10">
                Join the Community...
            </p>
        </div>
    );
};

export default MarqueeContent;