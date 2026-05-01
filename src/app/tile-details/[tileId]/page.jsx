import Dimensions from "@/components/tile-details-page/Dimensions";
import InfoTopPart from "@/components/tile-details-page/InfoTopPart";
import TileTags from "@/components/tile-details-page/TileTags";
import { getTileById } from "@/lib/data";
import Image from "next/image";

const TileDetails = async ({ params }) => {
    const { tileId } = await params;

    const tile = await getTileById(tileId);

    return (
        <div className="w-11/12 mx-auto my-15">
            <div className="grid grid-cols-2">
                {/* Tile Preview */}
                <div className="flex justify-center">
                    <Image
                        src={tile.image}
                        alt={tile.title}
                        width={300}
                        height={300}
                        className="w-125 h-125 rounded-xl"
                    />
                </div>

                {/* Information of the Tile */}
                <div>
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
                    <Dimensions tile={tile}/>
                </div>
            </div>
        </div>
    );
};

export default TileDetails;