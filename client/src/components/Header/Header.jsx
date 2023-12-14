import React from "react";
import Nav from "./Nav";
import logo from '../../assets/logo.png'

const Header = () => {
  return (
  <header>
    <Nav/>
    <img id="logo" src={logo} alt="Logo" />
  </header>);
};

export default Header;
