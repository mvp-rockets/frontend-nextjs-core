'use client'

import React from "react";
import PropTypes from "prop-types";
import Logo from "../atoms/Logo";
import MenuList from "../atoms/MenuList";
import Button from "../atoms/Button";
import { logoutSession } from "@/services/auth.service";

const Navbar = ({
  className,
  shadow,
  cardPadding,
  logo,
  logoAlt,
  logoWidth,
  logoHeight,
  menuItem,
  buttonLabel,
}) => {
  const classNames = `${shadow} ${cardPadding} ${className} flex flex-row justify-between items-center bg-white w-full h-20`;

  return (
    <div className={classNames}>
      <Logo src={logo} alt={logoAlt} width={logoWidth} height={logoHeight} />

      <div className="flex items-center space-x-10">
        <MenuList menuItem={menuItem} />
        <Button onClick={() => {
          logoutSession();
        }} label={buttonLabel} size="small" />
      </div>
    </div>
  );
};

Navbar.defaultProps = {
  className: "",
  shadow: "shadow-nav",
  cardPadding: "px-8 py-5",
  logo: "/images/logo.svg",
  logoAlt: "MVP Rockets",
  logoWidth: "140",
  logoHeight: "40",
  menuItem: [],
  buttonLabel: "Logout",
};

Navbar.propTypes = {
  shadow: PropTypes.string,
  logo: PropTypes.string,
  logoAlt: PropTypes.string,
  menuItem: PropTypes.array,
};

export default Navbar;
