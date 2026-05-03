'use client';

import LeftSideShape from "@/components/login-register-page/LeftSideShape";
import RightSideShape from "@/components/login-register-page/RightSideShape";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleLoginFunc = async (formData) => {
        const { email, password } = formData;

        const { data, error } = await authClient.signIn.email({
            email: email,
            password: password,
            rememberMe: true,
            callbackURL: "/my-profile",
        });

        if (error) {
            toast.error(error.message);
        };

        if (data) {
            toast.success('Sign In Successful!');
        };
    };

    const handleGoogleSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    };

    return (
        <div className="flex justify-center gap-40 my-15">
            <LeftSideShape />

            <div className="bg-white p-10 space-y-6 rounded-xl">
                {/* heading */}
                <div className="text-center space-y-3">
                    <h2 className='text-[#403F3F] font-semibol text-3xl'>
                        Login to Profile.
                    </h2>

                    <p className="text-slate-500">
                        Don’t have an account?
                        <Link href='/register' className="text-cyan-600 font-medium"> Create an account</Link>
                    </p>

                    <button
                        onClick={handleGoogleSignIn}
                        className="btn hover:rounded-full w-full text-lg text-slate-600 font-medium">
                        <FcGoogle className="text-3xl" />
                        Login with Google
                    </button>
                </div>

                {/* divider */}
                <div className="divider text-slate-500 font-medium">or Sign In with Email</div>

                {/* Login Form */}
                <form onSubmit={handleSubmit(handleLoginFunc)}>
                    {/* email */}
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-[#403F3F] text-base font-semibold">Email address</legend>
                        <input
                            type="email"
                            {...register('email', { required: 'Email feild is required' })}
                            className="input bg-slate-200" placeholder="Enter your email address"
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

                        <span onClick={() => setShowPassword(!showPassword)} className="password-eye text-xl absolute right-10 top-3/12 cursor-pointer">
                            {
                                showPassword ? <FaEye /> : <FaEyeSlash />
                            }
                        </span>

                        {
                            errors.password && <p className="text-red-500">{errors.password.message}</p>
                        }
                    </fieldset>

                    {/* login button */}
                    <button type="submit" className="btn py-2 h-auto text-lg hover:bg-green-700 rounded-full bg-[#403F3F] w-full text-white mt-5">
                        Login
                    </button>
                </form>
            </div>

            <RightSideShape />
        </div>
    );
};

export default Login;