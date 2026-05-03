import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";
import DropdownProfile from "../home/DropdownProfile";

const LogInOut = ({ user }) => {
    return (
        <div>
            {
                user ?
                    <div className='flex items-center gap-5'>
                        <div className="max-sm:flex-row-reverse flex items-center gap-2">
                            <p className='font-medium text-center max-sm:text-left'>HELLO, {user?.name}</p>

                            {
                                user?.image
                                    ? <DropdownProfile user={user} />
                                    : <FaUserCircle className='text-3xl' />
                            }
                        </div>

                        <button
                            onClick={async () => await authClient.signOut()}
                            className='max-sm:hidden btn animate__bounceIn bg-cyan-500 text-white text-lg font-medium px-6'>
                            Logout
                        </button>
                    </div>
                    :
                    <div className='logInOut-false-part flex items-center'>
                        {/* logo */}
                        <Link href='/' className="sm:hidden btn btn-ghost text-xl h-auto">
                            <Image

                                src='https://i.ibb.co.com/BVt0Y7RQ/tiles-logo.png'
                                alt="Tiles Gallery Logo"
                                width={150}
                                height={50}
                            >
                            </Image>
                        </Link>

                        <Link href={'/login'}>
                            <button className='btn animate__bounceIn bg-[#60a3bc] text-white text-lg font-medium px-6'>
                                Login
                            </button>
                        </Link>
                    </div>
            }
        </div>
    );
};

export default LogInOut;