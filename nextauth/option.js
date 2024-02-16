import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import AzureADProvider from "next-auth/providers/azure-ad";
import EmailProvider from "next-auth/providers/email"
import CustomAdapter from '@/nextauth/custom-adapter';
import { sendVerificationRequest } from '@/nextauth/utilities';
import { loginWithUsername, verifyLoginOtp } from "@/services/auth.service";
import CognitoProvider from "next-auth/providers/cognito";

export const options = {
    adapter: CustomAdapter(),
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            name: 'Credentials',
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                // You need to provide your own logic here that takes the credentials
                // submitted and returns either a object representing a user or value
                // that is false/null if the credentials are invalid.
                // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
                // You can also use the `req` object to obtain additional parameters
                // (i.e., the request IP address)
                const { username, password } = credentials
                const res = await loginWithUsername({ username, password });

                if (res.status) {
                    return { ...res.entity, username };
                }

                return null
                // Return null if user data could not be retrieved
                // return null
            },
            allowDangerousEmailAccountLinking: true
        }),
        CredentialsProvider({
            id: 'otp',
            // The name to display on the sign in form (e.g. 'Sign in with...')
            name: 'otp',
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                email: { label: "Email", type: "text", placeholder: "jsmith@gmail.com" },
                otp: { label: "Otp", type: "text" }
            },
            async authorize(credentials, req) {
                // You need to provide your own logic here that takes the credentials
                // submitted and returns either a object representing a user or value
                // that is false/null if the credentials are invalid.
                // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
                // You can also use the `req` object to obtain additional parameters
                // (i.e., the request IP address)
                const { email, otp } = credentials
                const res = await verifyLoginOtp({ email, otp });

                if (res.status) {
                    return { ...res.entity, email };
                }
                // throw new Error('Error occured')
                return null
                // Return null if user data could not be retrieved
                // return null
            },
            allowDangerousEmailAccountLinking: true
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            allowDangerousEmailAccountLinking: true
        }),
        AzureADProvider({
            clientId: process.env.AZURE_AD_CLIENT_ID,
            clientSecret: process.env.AZURE_AD_CLIENT_SECRET,
            tenantId: process.env.AZURE_AD_TENANT_ID,
            allowDangerousEmailAccountLinking: true
        }),
        EmailProvider({
            server: `smtp://${process.env.SMTP_USER}:${process.env.SMTP_PASSWORD}@${process.env.SMTP_HOST}:587`,
            from: process.env.EMAIL_FROM,
            sendVerificationRequest,
            allowDangerousEmailAccountLinking: true,
        }),
    ],
    session: {
        strategy: 'jwt'
    },
    trustHost: true,
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async jwt({ token, account, profile, user }) {
            // Persist the OAuth access_token and or the user id to the token right after signin
            if (account) {
                token.accessToken = account.access_token
                token.idToken = account.id_token
                token.provider = account.provider
            }
            if (user) {
                token.username = user.username
                token.token = user.token
                token.id = user.id;
            }
            return token
        },
        async session({ session, token, user }) {
            // Send properties to the client, like an access_token and user id from a provider.
            session.accessToken = token.accessToken
            session.idToken = token.idToken
            session.token = token.token

            session.user.id = token.id
            session.user.provider = token.provider
            session.user.username = token.username

            return session
        }
    },
}