import React from "react";
import { Link } from 'react-router-dom'


const Nav = () => {
  return (
    <nav>
        
            <Link className={'link'} to='/'>Home</Link>
            <Link className={'link'} to='/auth'>Log in / Sign up</Link>
            <Link className={'link'} to='/create/:email'>Create Event</Link>
            <Link className={'link'} to='/event/:id/:email'>My Events</Link>
            
        
    </nav >
)
};

export default Nav;
