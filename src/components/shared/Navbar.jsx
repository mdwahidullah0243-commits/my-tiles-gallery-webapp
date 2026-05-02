'use client';

import Image from "next/image";
import Link from "next/link";
import NavLink from "../ui/NavLink";
import { navItems } from "@/lib/data";
import LogInOut from "../ui/LogInOut";
import { FiMenu } from "react-icons/fi";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
    const { data, isPending } = authClient.useSession();
    const user = data?.user;

    if(isPending) {
        return <p className="text-center font-medium py-5">One moment please...</p>
    }
    // variable of nav items
    const links = navItems.map(link => <NavLink key={link.id} link={link} />);

    return (
        <div className="shadow-sm bg-[#F6F3F5]">
            <div className="navbar max-sm:flex-row-reverse w-11/12 mx-auto">
                <div className={`${user ? 'session-menu' : 'not-session-menu'} navbar-start`}>
                    <div className="dropdown dropdown-end sm:dropdown-start">
                        {/* humbergur menu icon */}
                        <div tabIndex={0} role="button" className="btn justify-end btn-ghost lg:hidden">
                            <FiMenu className="text-2xl" />
                        </div>

                        {/* NavItems */}
                        <ul
                            tabIndex="-1"
                            className="menu menu-md dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 max-sm:w-40 p-2 shadow">
                            {links}
                        </ul>
                    </div>

                    {/* logo */}
                    <Link href='/' className="hidden sm:block btn btn-ghost text-xl h-auto">
                        <Image src='https://i.ibb.co.com/BVt0Y7RQ/tiles-logo.png' alt="Tiles Gallery Logo" width={150} height={50}></Image>
                    </Link>
                </div>

                {/* NavItems */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>

                {/* Login & Logout  */}
                <div className="navbar-end">
                    <LogInOut user={user} />
                </div>
            </div>
        </div>
    );
};

export default Navbar;