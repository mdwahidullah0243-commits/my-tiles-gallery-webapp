import TileCard from "../home/TileCard";

const AllCardSection = ({ allTiles }) => {

    return (
        <div className="all-tiles-page grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10 mb-20">
            {
                allTiles.map(tile => {
                    return (
                        <TileCard key={tile.id} tile={tile} />
                    )
                })
            }
        </div>
    );
};

export default AllCardSection;