import Icon from "../atoms/Icon";
import Text from "../atoms/Text";
import Button from "../atoms/Button";

const LoginWithGoogleTemplate = () => {
    return (
        <div className="w-[411px] mx-auto md:my-10 text-center">
            <Icon iconSrc="/images/logo-blue.svg" iconWidth="298" iconHeight="80" iconAlt="logo" className="" />
            <div className="flex justify-center border h-[418px]">
                <div className="self-center text-center px-14">
                    <Text className="font-semibold text-lg">Welcome Back!</Text>
                    <Text className="text-sm font-normal py-3 mb-7">Kindly login with your google account to continue</Text>
                    <Button className="py-0 mx-auto px-2" icon="/images/icons/google.svg" iconPosition="left" label=" Sign in with Google" onClick={() => {}} />
                </div>
            </div>
            <Text className="mt-3 text-center text-[#6B6B80] font-light text-sm">Copyright © 2022, MVPRockets. All rights reserved.</Text>
        </div>
    );
};

export default LoginWithGoogleTemplate;
