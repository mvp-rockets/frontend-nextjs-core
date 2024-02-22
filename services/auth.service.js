import * as HttpService from "./http.service";
import { CREATE_AND_SEND_MAGIC_LINK_URL, CREATE_MAGIC_LINK_VERIFICATION_TOKEN_URL, GET_USER_FOR_NEXT_AUTH_URL, LOGIN_WITH_USERNAME_URL, SEND_LOGIN_OTP_URL, VERIFY_LOGIN_OTP_URL, VERIFY_MAGIC_LINK_VERIFICATION_TOKEN_URL } from "./url.service";

export const sendMagicLink = (data) => {
    return HttpService.postWithOutAuth(CREATE_AND_SEND_MAGIC_LINK_URL, data);
};

export const createMagicLinkVerificationToken = (data) => {
    return HttpService.postWithOutAuth(CREATE_MAGIC_LINK_VERIFICATION_TOKEN_URL, data);
};

export const verifyMagicLinkVerificationToken = (data) => {
    return HttpService.postWithOutAuth(VERIFY_MAGIC_LINK_VERIFICATION_TOKEN_URL, data);
};

export const getUserForNextAuth = ({ email, nextAuthSecretPass }) => {
    return HttpService.getWithOutAuth(GET_USER_FOR_NEXT_AUTH_URL({ email, nextAuthSecretPass }));
};

export const loginWithUsername = (data) => {
    return HttpService.postWithOutAuth(LOGIN_WITH_USERNAME_URL, data);
};

export const verifyLoginOtp = (data) => {
    return HttpService.postWithOutAuth(VERIFY_LOGIN_OTP_URL, data);
};

export const sendLoginOtp = (data) => {
    return HttpService.postWithOutAuth(SEND_LOGIN_OTP_URL, data);
};

export const logoutSession = (data) => {
    return HttpService.postWithAuth(SEND_LOGIN_OTP_URL, data);
};