import React from "react";
import Button from "../atoms/Button";
import IcomoonIcon from "../atoms/IcomoonIcon";
import InputBox from "../atoms/InputBox";
import LinkButton from "../atoms/LinkButton";
import Text from "../atoms/Text";

const LoginForm = ({ ...property }) => {
  return (
    <div
      className={`${property.className} min-w-[500px] flex flex-col space-y-10 items-center p-10 bg-white border border-neutral-300 rounded-lg w-fit`}
    >
      <div className="flex flex-col space-y-4 w-full">
        <InputBox
          isLabel
          labelText="Email"
          labelFor="email"
          name="email"
          type="email"
          placeholder="Email Address"
          variant="Default"
        />

        <div className="relative bg-red w-full">
          <InputBox
            isLabel
            labelText="Password"
            labelFor="password"
            name="password"
            type="password"
            placeholder="Password"
            variant="Default"
          />

          <IcomoonIcon
            className="absolute bottom-3 right-4 cursor-pointer"
            icon={"eyes-slash"}
            size={"20"}
            color="grey"
          />
        </div>
      </div>

      <div className="flex flex-col space-y-4 w-full">
        <Button
          className="text-center"
          style="primary"
          label="Login to your account"
          size="small"
        />

        <div className="flex space-x-1 w-full justify-center">
          <Text>Forgot Password?</Text>
          <LinkButton href={""}> Click here</LinkButton>
        </div>
      </div>
    </div>
  );
};

LoginForm.propTypes = {};

export default LoginForm;
