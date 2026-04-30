import TileCard from "./TileCard";

const FeaturedTiles = async () => {
    const res = await fetch('http://localhost:5000/tiles');
    const tiles = await res.json();

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