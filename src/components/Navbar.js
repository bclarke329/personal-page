import React from 'react';
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar">
            <NavLink to="/">Home |</NavLink> 
            <NavLink to="/about">About |</NavLink>
            <NavLink to="/resume">Resume |</NavLink>
            <NavLink to="/portfolio">Portfolio |</NavLink>
            <NavLink to="/contact">Contact |</NavLink>
        </div>
    )
}

export default Navbar