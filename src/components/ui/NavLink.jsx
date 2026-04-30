'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ link }) => {
    const { path, content } = link;
    const pathname = usePathname();
    const isNavigate = pathname === path;

    return (
        <li className={`${isNavigate ? 'bg-[#CE8E78] text-white' : ''} rounded-xl text-base font-medium hover:text-[#62352E]`}>
            <Link href={path}>
                {content}
            </Link>
        </li>
    );
};

export default NavLink;