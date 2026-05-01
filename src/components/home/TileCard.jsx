import Image from "next/image";
import Link from "next/link";

const TileCard = ({ tile }) => {
    const { id, image, title, category, price } = tile;

    return (
        <div className="p-6 bg-white shadow-sm rounded-xl flex flex-col items-center justify-between">
            <div>
                <Image src={image} alt={title} width={300} height={300} className="rounded-xl w-75 h-50"></Image>
            </div>

            <div className="space-y-3 text-center">
                <h3 className="text-2xl font-semibold">{title}</h3>
                <p>
                    <span className="font-medium text-slate-500">Category: </span> {category}
                </p>

                <p className="font-medium text-2xl">${price}</p>
            </div>

            <Link href={`tile-details/${id}`}>
                <button className="mt-5 btn w-full bg-[#080000] text-white text-lg py-2 h-auto font-normal rounded-full hover:bg-[#CE8E78]">
                    View Details
                </button>
            </Link>
        </div>
    );
};

export default TileCard;