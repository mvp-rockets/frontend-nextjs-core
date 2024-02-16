'use client';

import React from 'react'
import { signIn } from "next-auth/react"
import LoginWithPassword from 'app/components/login/LoginWithPassword';
import LoginWithOTP from 'app/components/login/LoginWithOTP';
import LoginWithMagicLink from 'app/components/login/LoginWithMagicLink';

function Button({ onClick, label, props }) {
    return <button className='bg-blue-600 text-white px-4 py-2 rounded-md my-2' {...props} onClick={onClick}>Login with {label}</button>
}

function Hr() {
    return <hr className=' w-full border-neutral-400 my-2' />
}

export default function Login() {
    return (
        <div className='flex flex-col mt-6 w-80 rounded-lg py-4 items-center justify-center mx-auto bg-slate-500 px-4'>
            <h1 className='text-5xl my-4'>Login</h1>
            <LoginWithPassword />
            <Hr />

            <LoginWithOTP />
            <Hr />

            <Button
                label="Google"
                onClick={() => {
                    signIn('google', { callbackUrl: '/home' });
                }}
            />
            <Hr />

            <Button
                label="Azure"
                onClick={() => {
                    signIn('azure-ad', { callbackUrl: '/home' });
                }}
            />

            <Hr />

            <LoginWithMagicLink />

        </div>
    )
}
