import TileCard from "@/components/home/TileCard";

const AllTilesPage = async () => {
    const res = await fetch('http://localhost:5000/tiles');
    const tiles = await res.json();

    return (
        <div className="w-11/12 mx-auto">
            <h2 className='text-3xl font-bold text-cyan-500 text-center mt-10'>
                This is All Tiles page
            </h2>

            <div className="grid grid-cols-4 gap-5 my-10">
                {
                    tiles.map(tile => {
                        return (
                            <TileCard key={tile.id} tile={tile} />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default AllTilesPage;