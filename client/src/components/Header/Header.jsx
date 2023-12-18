import React from "react";
import Nav from "./Nav";
import Logout from './Logout'
import { whoIsLogged } from "../Main/Authentication/utils";


const Header = () => {
  const loggedUser = whoIsLogged()
  const username = sessionStorage.getItem("username")
  return (
    <header>
      {loggedUser && <Logout />}
      <Nav />
      <h1>Batec de festa</h1>
      {loggedUser && <span>Benvingut, {username}</span>}
    </header>);
};

export default Header;
