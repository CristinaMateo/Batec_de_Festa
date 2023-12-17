import React from "react";
import { Link } from 'react-router-dom'
import { whoIsLogged } from "../../Main/Authentication/utils";


const Nav = () => {
  const loggedUser = whoIsLogged()
  return (
    <nav>
      <Link className={'link'} to='/'>Home</Link>
      <Link className={'link'} to='/auth'>Log in / Sign up</Link>
      
      {loggedUser &&
        <>
          <Link className={'link'} to='/create'>Create Event</Link>
          <Link className={'link'} to='/myevents'>My Events</Link>
          
        </>}
    </nav >
  )
};

export default Nav;
