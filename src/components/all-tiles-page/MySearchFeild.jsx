'use client';

import { Button, Form, SearchField } from "@heroui/react";
import { useState } from "react";

const MySearchFeild = ({ tiles, setAllTiles }) => {
    const [searchValue, setSearchValue] = useState('');

    const handleSearch = (event) => {
        event.preventDefault();

        const filteredTiles = tiles.filter(tile => tile.title.toLowerCase().includes(searchValue.toLowerCase()));

        setAllTiles(filteredTiles)
    };

    return (
        <Form onSubmit={handleSearch}>
            <SearchField>
                <SearchField.Group className='py-5 bg-slate-200'>
                    <SearchField.SearchIcon />
                    <SearchField.Input
                        name="search"
                        onChange={(event) => setSearchValue(event.target.value)}
                        aria-label="Search"
                        className="w-45"
                        placeholder="Search title name"
                    />
                    <SearchField.ClearButton />
                    <Button type="submit" className='bg-[#CE8E78] rounded-xl'>
                        Search
                    </Button>
                </SearchField.Group>
            </SearchField>
        </Form>
    );
};

export default MySearchFeild;