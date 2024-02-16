import { createMagicLinkVerificationToken, getUserForNextAuth, verifyMagicLinkVerificationToken } from "@/services/auth.service"

export default function MyAdapter(client, options = {}) {
    return {
        async createUser(user) {
            return
        },
        async getUser(id) {
            return
        },
        async getUserByEmail(email) {
            return { email, id: email };
        },
        async getUserByAccount({ providerAccountId, provider }) {
            return
        },
        async updateUser(user) {
            const res = await getUserForNextAuth({ email: user.id, nextAuthSecretPass: process.env.NEXT_AUTH_SECRET_PASS });

            if (!res.status) {
                throw new Error(`Failed to create verification token`)
            }
            const { mlVerificationToken, id } = res.entity;
            return { email: user.id, id: id, token: mlVerificationToken };
        },
        async deleteUser(userId) {
            return
        },
        async linkAccount(account) {
            return
        },
        async unlinkAccount({ providerAccountId, provider }) {
            return
        },
        async createSession({ sessionToken, userId, expires }) {
            return { sessionToken, userId, expires }
        },
        async getSessionAndUser(sessionToken) {
            return { session: {}, user: {} }
        },
        async createVerificationToken({ identifier, expires, token }) {
            const res = await createMagicLinkVerificationToken({
                email: identifier,
                nextAuthSecretPass: process.env.NEXT_AUTH_SECRET_PASS,
                mlVerificationToken: token,
                mlVerificationTokenExp: expires
            })
            if (!res.status) {
                throw new Error(`Failed to create verification token`)
            }
            return {}
        },
        async useVerificationToken({ identifier, token }) {
            const res = await verifyMagicLinkVerificationToken({
                email: identifier,
                nextAuthSecretPass: process.env.NEXT_AUTH_SECRET_PASS,
                mlVerificationToken: token,
            });
            if (!res.status) {
                throw new Error(`Failed to verify verification token`)
            }
            const {
                mlVerificationToken,
                mlVerificationTokenExp
            } = res.entity;

            return { identifier, token: mlVerificationToken, expires: mlVerificationTokenExp }
        }
    }
}