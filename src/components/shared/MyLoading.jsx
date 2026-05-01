
const MyLoading = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-3 h-screen">
            <h3 className="text-center">Please wait...</h3>
            <div className="w-15 h-15 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
        </div>
    );
};

export default MyLoading;