import React from 'react';
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar">
            <NavLink exact activeClassName="active" to="/">Home | </NavLink> 
            <NavLink exact activeClassName="active" to="/about">About |</NavLink>
            <NavLink exact activeClassName="active" to="/resume">Resume |</NavLink>
            <NavLink exact activeClassName="active" to="/portfolio">Portfolio |</NavLink>
        </div>
    )
}

export default Navbar