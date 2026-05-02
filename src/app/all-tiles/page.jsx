import AllCardSection from "@/components/all-tiles-page/AllCardSection";
import MySearchFeild from "@/components/all-tiles-page/MySearchFeild";
import { getTiles } from "@/lib/data";

const AllTilesPage = async () => {
    const tiles = await getTiles();

    return (
        <div className="w-11/12 mx-auto">
            <div className="mt-10 flex max-sm:flex-col justify-between items-center gap-5">
                <h2 className='max-sm:text-2xl text-3xl text-[#2c2c2c] font-bold'>
                    All Collections
                </h2>

                <MySearchFeild tiles={tiles} />
            </div>

            {/* all card */}
            <AllCardSection tiles={tiles} />
        </div>
    );
};

export default AllTilesPage;