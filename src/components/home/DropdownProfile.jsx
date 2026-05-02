'use client';

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";

const DropdownProfile = ({ user }) => {
    return (
        <div className="dropdown">
            <div tabIndex={0} role="button" className="btn px-0 py-2 h-auto w-15 rounded-full">
                <Image src={user.image} alt={user?.name} width={50} height={50} className='rounded-full w-10 h-10' />
            </div>

            <div tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 space-y-3 p-2 shadow-sm">
                {/* logo */}
                <Link href='/' className="btn btn-ghost text-xl h-auto">
                    <Image src='https://i.ibb.co.com/BVt0Y7RQ/tiles-logo.png' alt="Tiles Gallery Logo" width={100} height={50}></Image>
                </Link>

                <button className="btn bg-[#71B280] text-white text-lg font-normal shadow-none">
                    View Profile
                </button>

                <button
                    onClick={async () => await authClient.signOut()}
                    className='btn bg-cyan-700 text-white text-lg font-medium px-6'>
                    Logout
                </button>
            </div>
        </div>
    );
};

export default DropdownProfile;