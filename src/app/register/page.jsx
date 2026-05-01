'use client';

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleRegisterFunc = async (formData) => {
        const { name, email, password, photoURL } = formData;

        const { data, error } = await authClient.signUp.email({
            name: name,
            email: email,
            password: password,
            image: photoURL
        });

        if (error) {
            toast.error(error.message);
        };

        if (data) {
            toast.success('Registration Successfull!!');
            redirect('/login');
        };
    };

    const handleGoogleSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    };

    return (
        <div className="flex justify-center">
            <div className="bg-white p-10 my-15 space-y-4 rounded-xl">
                {/* Heading */}
                <div className="text-center space-y-3">
                    <h2 className='text-[#403F3F] font-semibol text-3xl'>
                        Register Your Account
                    </h2>

                    <p className="text-slate-500">
                        Already have an account?
                        <Link href='/login' className="text-cyan-600"> Sign In</Link>
                    </p>

                    <button
                        onClick={handleGoogleSignIn} 
                        className="btn w-full text-lg text-slate-600 font-medium">
                        <FcGoogle className="text-3xl" />
                        Login with Google
                    </button>
                </div>

                {/* Divider */}
                <div className="divider text-slate-500 font-medium">or Sign up with Email</div>

                {/* Register Form */}
                <form onSubmit={handleSubmit(handleRegisterFunc)}>
                    {/* name */}
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-[#403F3F] text-base font-semibold">Your name</legend>
                        <input
                            type="text"
                            {...register('name', { required: 'Name feild is required' })}
                            className="input bg-slate-200" placeholder="Enter your name"
                        />
                        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                    </fieldset>

                    {/* photo url */}
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-[#403F3F] text-base font-semibold">Photo URL</legend>
                        <input
                            type="url"
                            {...register('photoURL', { required: 'Photo URL feild is required' })}
                            className="input bg-slate-200" 
                            placeholder="Enter your photo URL address"
                        />
                        {errors.photoURL && <p className="text-red-500">{errors.photoURL.message}</p>}
                    </fieldset>

                    {/* email */}
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-[#403F3F] text-base font-semibold">Email address</legend>
                        <input
                            type="email"
                            {...register('email', { required: 'Email feild is required' })}
                            className="input bg-slate-200" 
                            placeholder="Enter your email address"
                        />
                        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                    </fieldset>

                    {/* password */}
                    <fieldset className="fieldset relative">
                        <legend className="fieldset-legend text-[#403F3F] text-base font-semibold">Password</legend>

                        <input
                            type={`${showPassword ? 'text' : 'password'}`}
                            {...register("password", { required: 'Password feild is required' })}
                            className="input bg-slate-200"
                            placeholder="Enter your password" />

                        <span onClick={() => setShowPassword(!showPassword)} className="text-xl absolute right-5 top-3/12 cursor-pointer">
                            {
                                showPassword ? <FaEye /> : <FaEyeSlash />
                            }
                        </span>

                        {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                    </fieldset>

                    {/* checked, terms & conditions */}
                    <div className='flex items-center gap-2 mt-3'>
                        <input type="checkbox" defaultChecked className="checkbox" />
                        <p className='text-slate-600'>
                            Accept <span className='font-medium'><span className="text-cyan-700 cursor-pointer">Term </span>& <span className="text-cyan-700 cursor-pointer">Conditions</span></span>
                        </p>
                    </div>

                    {/* register button for form submit*/}
                    <button className="btn bg-[#403F3F] w-full text-white mt-5">
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;