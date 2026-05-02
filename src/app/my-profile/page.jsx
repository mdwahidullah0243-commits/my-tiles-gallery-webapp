'use client';

import UpdateProfile from "@/components/my-profile-page/UpdateProfile";
import MyLoading from "@/components/shared/MyLoading";
import { authClient } from "@/lib/auth-client";
import { Input, Label, TextField } from "@heroui/react";
import Image from "next/image";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const MyProfilePage = () => {
    const { data, isPending } = authClient.useSession();
    const user = data?.user;

    if (isPending) {
        return <MyLoading />
    }

    return (
        <div className="my-profile w-11/12 mx-auto my-15 sm:px-20 md:px-30 lg:px-40 xl:px-50">
            <div className="w-full mx-auto flex flex-col lg:flex-row justify-center items-center gap-5 bg-white shadow-sm p-10 rounded-2xl">
                <div>
                    <Image
                        src={user?.image}
                        alt={user?.name}
                        width={250}
                        height={250}
                    />
                </div>

                <div className="space-y-3">
                    <div className="w-80">
                        <TextField className="input-feild w-full" name="name" type="text">
                            <Label className="flex items-center gap-2 text-base">
                                <FaRegUser />
                                <span>Full Name</span>
                            </Label>
                            <Input value={user?.name} fullWidth className='text-lg' />
                        </TextField>
                    </div>

                    <div className="w-80">
                        <TextField className="input-feild w-full" name="name" type="text">
                            <Label className="flex items-center gap-2 text-base">
                                <MdOutlineEmail />
                                <span>Email</span>
                            </Label>
                            <Input value={user?.email} className='text-base' />
                        </TextField>
                    </div>

                    <UpdateProfile />
                </div>
            </div>
        </div>
    );
};

export default MyProfilePage;