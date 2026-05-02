import Dimensions from "@/components/tile-details-page/Dimensions";
import InfoTopPart from "@/components/tile-details-page/InfoTopPart";
import TileTags from "@/components/tile-details-page/TileTags";
import { getTileById } from "@/lib/data";
import Image from "next/image";

export const generateMetadata = async ({ params }) => {
    const { tileId } = await params;

    const tile = await getTileById(tileId);

    return {
        title: `Tiles Gallery || ${tile.title}`,
        description: tile.description,
    }
}


const TileDetails = async ({ params }) => {
    const { tileId } = await params;

    const tile = await getTileById(tileId);

    return (
        <div className="w-11/12 mx-auto my-15">
            <div className="grid grid-cols-1 lg:grid-cols-2 space-y-8">
                {/* Tile Preview */}

                <div className="flex lg:justify-center">
                    <Image
                        src={tile.image}
                        alt={tile.title}
                        width={300}
                        height={300}
                        className="tile-details-img w-125 sm:h-75 md:h-100 lg:h-125 max-lg:w-full rounded-xl"
                    />
                </div>

                {/* Information of the Tile */}

                <div className="">
                    {/* info-part-1 */}
                    <InfoTopPart tile={tile} />

                    <div className="divider divider-neutral before:opacity-10 after:opacity-10"></div>

                    {/* info-part-2 */}
                    <div className="space-y-2">
                        <h4 className="text-lg text-slate-700 font-medium">
                            Style description
                        </h4>
                        <p>{tile.description}</p>
                    </div>

                    {/* info-part-3 */}
                    <h4 className="text-lg text-slate-700 font-medium mt-3 mb-2">Tags</h4>

                    <TileTags tile={tile} />

                    {/* info-part-4 */}
                    <Dimensions tile={tile} />
                </div>
            </div>
        </div>
    );
};

export default TileDetails;