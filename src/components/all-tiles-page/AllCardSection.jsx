'use client';

import { useState } from "react";
import TileCard from "../home/TileCard";

const AllCardSection = ({ tiles }) => {

    return (
        <div className="grid grid-cols-4 gap-5 my-10">
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