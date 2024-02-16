import { sendMagicLink } from "@/services/auth.service";

export const sendVerificationRequest = async (params) => {
  const { identifier, url, provider, theme } = params
  const res = await sendMagicLink({
    url, theme, to: identifier
  });
  if (!res.status) {
    throw new Error(`Email could not be sent`)
  }
}