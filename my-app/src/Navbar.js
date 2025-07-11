import React from "react";
import './Navbar.css';
import {FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return(
    <>
    <nav className="navbar">
        <div className="nav-left">
            <h2 className="logo">GK Trips</h2>
            <ul className="nav-links">
                <Link to="/home"><li><a href="/">Home</a></li></Link>
                <Link to="/trip"><li><a href="/">Trips</a></li></Link>
                <Link to="/hotel"><li><a href="/">Hotels</a></li></Link>
                <Link to="/myreservation"><li><a href="/">My Reservation</a></li></Link>
                
            </ul>
        </div>

        <div className="nav-right">
            <div className="search-bar">
                <input type="text" placeholder="Search" />
                <button><FaSearch /></button>
            </div>

            <Link to="/signin"><a href="/" className="auth-link">Sign In</a></Link>
            <Link to="/auth"><a href="/" className="auth-link-create">Create an Account</a></Link>
        </div>
    </nav>
    </>
    
    );
}

export default Navbar;