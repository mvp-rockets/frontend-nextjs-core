import NextAuth from "next-auth"
import { options } from '@/nextauth/option';

export const {
    handlers: { GET, POST },
    auth,
} = NextAuth(options)