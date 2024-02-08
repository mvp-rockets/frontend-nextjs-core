'use client';

import React from 'react'
import { signIn } from "next-auth/react"

export default function Login() {
    return (
        <div className='flex flex-col mt-10 w-52 items-center justify-center mx-auto'>
            <input className='border border-1 border-red-600' name='Name' placeholder='Name' />
            <input className='border border-1 border-red-600' name='pass' placeholder='Password' />
            <button onClick={() => {
                signIn('credentials', { redirect: false, password: 'password', username: 'user name' }).then((res) => {
                    console.log('res', res)
                })
            }}>Login</button>

            <button onClick={() => {
                signIn('google');
            }}>Login with google</button>
        </div>
    )
}
