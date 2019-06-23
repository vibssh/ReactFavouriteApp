import React from "react";

import Image from "./image";

import Logo from "../assets/images/logo.svg";

import Navigation from "./Navigation";

const Header = ({ store }) => {
  return (
    <header>
      {/*Logo*/}
      <Image source={Logo} alt="Application Logo" className="logo" />
      <Navigation store={store} />
    </header>
  );
};

export default Header;
