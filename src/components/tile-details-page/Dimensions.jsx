
const Dimensions = ({ tile }) => {
    return (
        <div className="mt-5 flex gap-3">
            <button className="btn shadow-sm flex-col h-auto text-slate-500 py-2">
                <span>Dimensions:</span>
                <span className="text-xl text-slate-800 font-medium">
                    {tile.dimensions}
                </span>
            </button>

            <button className="btn shadow-sm flex-col h-auto text-slate-500 py-2">
                <span>Category:</span>
                <span className="text-xl text-slate-800 font-medium">
                    {tile.category}
                </span>
            </button>
        </div>
    );
};

export default Dimensions;