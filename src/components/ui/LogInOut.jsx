'use client';

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";

const LogInOut = () => {
    const { data, isPending } = authClient.useSession();
    const user = data?.user;
    console.log(user);

    if (isPending) {
        return <p className="text-xl font-medium">Loading...</p>;
    }

    return (
        <div>
            {
                user ?
                    <div className='flex items-center gap-5'>
                        <p className='font-medium'>HELLO, {user?.name}</p>

                        {
                            user?.image
                                ? <Image src={user.image} alt={user?.name} width={50} height={50} className='rounded-full w-10 h-10' />
                                : <FaUserCircle className='text-3xl' />
                        }

                        <button
                            onClick={async () => await authClient.signOut()}
                            className='btn bg-cyan-500 text-white text-lg font-medium px-6'>
                            Logout
                        </button>
                    </div>
                    :
                    <div className='flex items-center gap-5'>
                        <Link href={'/login'}>
                            <button className='btn bg-[#60a3bc] text-white text-lg font-medium px-6'>
                                Login
                            </button>
                        </Link>
                    </div>
            }
        </div>
    );
};

export default LogInOut;