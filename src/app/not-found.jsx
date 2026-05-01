import Image from "next/image";
import notFoundImg from '@/assets/error-404.png';
import Link from "next/link";
import { Button } from "@heroui/react";

const NotFound = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-5 h-screen'>
            <div>
                <Image src={notFoundImg} alt="Error 404 Not Found" width={300} height={300} />
            </div>

            <div className="text-center">
                <h2 className='text-[#001931] text-3xl font-semibold'>
                    Oops, page not found!
                </h2>
                <p className='text-[#627382]'>
                    The page you are looking for is not available.
                </p>
            </div>

            <Link href='/'>
                <Button>Go Back!</Button>
            </Link>
        </div>
    );
};

export default NotFound;