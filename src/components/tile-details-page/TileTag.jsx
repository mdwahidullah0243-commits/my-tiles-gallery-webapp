
const TileTag = ({tag, index}) => {
    return (
        <button 
            className={`
                btn rounded-full 
                ${index === 0 ? 'bg-[#ff793f]' : 'bg-[#FD7272]'}
            `}
        >
            {tag}
        </button>
    );
};

export default TileTag;