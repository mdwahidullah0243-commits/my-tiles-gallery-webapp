import AllCardSection from "@/components/all-tiles-page/AllCardSection";
import MySearchFeild from "@/components/all-tiles-page/MySearchFeild";
import { getTiles } from "@/lib/data";

const AllTilesPage = async () => {
    const tiles= await getTiles();

    return (
        <div className="w-11/12 mx-auto">
            <div className="mt-10 flex justify-between items-center">
                <h2 className='text-3xl text-[#1b1b1b] font-bold'>
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