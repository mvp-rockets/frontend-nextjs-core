'use server'

import { auth } from "@/nextauth/auth"


export const getAuth = async () => {
    const session = await auth();

    return { session }
}