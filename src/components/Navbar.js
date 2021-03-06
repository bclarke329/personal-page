import React from 'react';
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar">
            <NavLink exact activeClassName="active" className="navigation-links" to="/">Home  </NavLink> 
            <NavLink exact activeClassName="active" className="navigation-links"to="/about">About </NavLink>
            <NavLink exact activeClassName="active" className="navigation-links"to="/contact">Contact </NavLink>
            <NavLink exact activeClassName="active" className="navigation-links"to="/portfolio">Portfolio </NavLink>
        </div>
    )
}

export default Navbar