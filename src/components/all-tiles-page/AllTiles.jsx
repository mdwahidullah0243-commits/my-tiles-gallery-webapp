'use client'

import { useState } from "react";
import AllCardSection from "./AllCardSection";
import MySearchFeild from "./MySearchFeild";
import EmptyMessage from "./EmptyMessage";

const AllTiles = ({ tiles }) => {
    const [allTiles, setAllTiles] = useState(tiles);

    return (
        <div className="w-11/12 mx-auto">
            <div className="mt-10 flex max-sm:flex-col justify-between items-center gap-5">
                <h2 className='max-sm:text-2xl text-3xl text-[#2c2c2c] font-bold'>
                    All Collections
                </h2>

                <MySearchFeild tiles={tiles} setAllTiles={setAllTiles} />
            </div>

            {/* all card */}
            {
                allTiles.length === 0
                    ? <EmptyMessage /> 
                    : <AllCardSection allTiles={allTiles} />

            }
        </div>
    );
};

export default AllTiles;