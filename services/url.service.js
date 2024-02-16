const ApiUrl = process.env.NEXT_PUBLIC_API_URL;

const UrlParamsReplace = (url, params = {}) => {
    let urlWithPrefix = `${ApiUrl}${url}`;
    if (params) {
        Object.keys(params).forEach((key) => (urlWithPrefix = urlWithPrefix.replace(`:${key}`, params[key])));
    }
    return urlWithPrefix;
};

export const CREATE_AND_SEND_MAGIC_LINK_URL = UrlParamsReplace("/magic-link");
export const CREATE_MAGIC_LINK_VERIFICATION_TOKEN_URL = UrlParamsReplace("/ml-verification-token");
export const VERIFY_MAGIC_LINK_VERIFICATION_TOKEN_URL = UrlParamsReplace("/verify-ml-verification-token");
export const GET_USER_FOR_NEXT_AUTH_URL = ({ email, nextAuthSecretPass }) => UrlParamsReplace("/user-next-auth?email=:email&nextAuthSecretPass=:nextAuthSecretPass", { email, nextAuthSecretPass });
export const LOGIN_WITH_USERNAME_URL = UrlParamsReplace("/login-with-username");
export const VERIFY_LOGIN_OTP_URL = UrlParamsReplace("/verify-login-otp");
export const SEND_LOGIN_OTP_URL = UrlParamsReplace("/login-otp");
