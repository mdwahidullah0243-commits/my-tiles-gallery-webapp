import Image from "next/image";
import Link from "next/link";
import NavLink from "../ui/NavLink";
import { navItems } from "@/lib/data";

const Navbar = () => {
    // variable of nav items
    const links = navItems.map(link => <NavLink key={link.id} link={link} />);

    return (
        <div className="shadow-sm bg-[#F6F3F5]">
            <div className="navbar w-11/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        {/* humbergur menu icon */}
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>

                        {/* NavItems */}
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>

                    {/* logo */}
                    <Link href='/' className="btn btn-ghost text-xl h-auto">
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
                    <Link href={'/login'} className="btn bg-purple-700 text-white">
                        Login
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;