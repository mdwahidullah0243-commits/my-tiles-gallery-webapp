import AllTiles from "@/components/all-tiles-page/AllTiles";
import { getTiles } from "@/lib/data";

const AllTilesPage = async () => {
    const tiles = await getTiles();

    return (
        <AllTiles tiles={tiles} />
    );
};

export default AllTilesPage;