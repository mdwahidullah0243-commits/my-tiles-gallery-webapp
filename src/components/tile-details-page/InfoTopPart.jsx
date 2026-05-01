
const InfoTopPart = ({ tile }) => {
    const {title, Creator, inStock, price} = tile;

    return (
        <div className="space-y-2">
            <h3 className="text-3xl font-medium">
                {title}
            </h3>
            <p>
                Creator by
                <span className="text-slate-600 font-medium"> {Creator}</span>
            </p>

            {
                inStock
                    ? <div className="badge badge-accent rounded-full">In Stock</div>
                    : <div className="badge badge-error rounded-full">Out of Stock</div>
            }

            <p className="text-3xl font-normal mt-4">
                ${price}
            </p>
        </div>
    );
};

export default InfoTopPart;