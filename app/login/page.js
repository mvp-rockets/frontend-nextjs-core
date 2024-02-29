import React from 'react'
import Login from './Login';
import { auth } from "@/nextauth/auth"
import { redirect } from 'next/navigation';

export default async function route() {
  const session = await auth();

  if (session) {
    return redirect('/home')
  }

  return (
    <Login />
  )
}
