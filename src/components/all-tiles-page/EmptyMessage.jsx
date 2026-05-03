
const EmptyMessage = () => {
    return (
        <div className="space-y-2 my-10 text-center border border-slate-300 rounded-xl h-[50vh] flex flex-col justify-center items-center">
            <h2 className="empty-heading text-2xl text-slate-800 font-semibold">Your gallery is feeling a bit empty 😅</h2>
            <p className="empty-p text-lg text-slate-500 font-medium">Add some tiles to make it awesome!</p>
        </div>
    );
};

export default EmptyMessage;