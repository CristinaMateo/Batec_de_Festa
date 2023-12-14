import React from "react";
import { Link } from 'react-router-dom'


const Nav = () => {
  return (
    <nav>
        <ul className="nav-bar">
            <li><Link className={'link'} to='/'>Home</Link></li>
            <li><Link className={'link'} to='/auth'>Log in / Sign up</Link></li>
            <li><Link className={'link'} to='/create/:email'>Create Event</Link></li> 
            <li><Link className={'link'} to='/event/:id/:email'>My Events</Link></li> 
            
        </ul >
    </nav >
)
};

export default Nav;
