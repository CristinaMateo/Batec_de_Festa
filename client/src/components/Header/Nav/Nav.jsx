import React from "react";
import { Link } from 'react-router-dom'
import { whoIsLogged } from "../../Main/Authentication/utils";


const Nav = () => {
  const loggedUser = whoIsLogged()
  return (
    <nav>
      <Link className={'link'} to='/'>Inici</Link>
      <Link className={'link'} to='/auth'>Registre</Link>
      
      {loggedUser &&
        <>
          <Link className={'link'} to='/create'>Crear esdeveniment</Link>
          <Link className={'link'} to='/myevents'>Els meus esdeveniments</Link>
          
        </>}
    </nav >
  )
};

export default Nav;
