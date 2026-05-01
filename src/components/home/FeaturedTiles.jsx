import { getTiles } from "@/lib/data";
import TileCard from "./TileCard";

const FeaturedTiles = async () => {
    const tiles = await getTiles();

    return (
        <div className="my-25 w-11/12 mx-auto space-y-10">
            <div className="divider text-4xl font-semibold text-center">
                Featured Tiles
            </div>

            <div className="grid grid-cols-4 gap-5">
                {
                    tiles.slice(0, 4).map(tile => {
                        return (
                            <TileCard key={tile.id} tile={tile} />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default FeaturedTiles;