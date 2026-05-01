import TileTag from "./TileTag";

const TileTags = ({ tile }) => {
    return (
        <div className="flex items-center gap-2">
            {
                tile.Tags.map((tag, index) => <TileTag key={index} index={index} tag={tag} />)
            }
        </div>
    );
};

export default TileTags;