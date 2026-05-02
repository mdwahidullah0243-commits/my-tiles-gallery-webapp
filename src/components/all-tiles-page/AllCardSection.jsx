'use client';

import { useState } from "react";
import TileCard from "../home/TileCard";

const AllCardSection = ({ tiles }) => {

    return (
        <div className="all-tiles-page grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10 mb-20">
            {
                tiles.map(tile => {
                    return (
                        <TileCard key={tile.id} tile={tile} />
                    )
                })
            }
        </div>
    );
};

export default AllCardSection;