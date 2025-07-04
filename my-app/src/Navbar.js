import React from "react";
import './Navbar.css';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return(
        <nav className="navbar">
            <div className="navbar-left">
                <i className="fas fa-search search-icon"></i>
                <input type="text" placeholder="Search" className="search-input" />
            </div>

            <div className="navbar-right">
                <Link to="/auth" className="nav-link">Create an Account</Link>
                <Link to="/signin" className="nav-link">Sign In</Link>
                <div className="menu-icon">
                    <i className="fas fa-bars"></i>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;