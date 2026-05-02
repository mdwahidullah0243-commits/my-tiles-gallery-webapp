import Image from "next/image";
import Link from "next/link";

const Banner = () => {
    return (
        <div className="py-15 bg-linear-to-b from-[#FCFCFC] to-[#DCDCDC]">
            <div className="flex flex-col items-center gap-10">
                <Image src='https://i.ibb.co.com/CKqNGJ5F/banner-1.png' alt="Banner" width={500} height={500} className="w-9/12 mx-auto h-auto"></Image>

                <div className="text-center space-y-7">
                    <h2 className="text-3xl max-sm:text-xl sm:text-2xl lg:text-3xl font-bold">
                        A Prominent Premium Tile Brand, <br />
                        Designed for Life. 
                        Crafted with Excellence.
                    </h2>

                    <Link href={'/all-tiles'}>
                        <button className="btn animate__heartBeat animate-spin hover:animate-none bg-[#080000] text-white text-xl max-sm:text-lg font-normal py-2 md:py-3 px-6 max-sm:px-4 h-auto rounded-xl hover:bg-[#CE8E78]">
                            Browse Now
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;