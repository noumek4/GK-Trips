import React from "react";

const Navbar = () => {
    return(
        <nav className="navbar">
            <div className="navbar-left">
                <i className="fas fa-search search-icon"></i>
                <input type="text" placeholder="Search" className="search-input" />
            </div>

            <div className="navbar-right">
                <a href="/GK-Trips/my-app/src/Auth.js" className="nav-link">Create an Account</a>
                <a href="/GK-Trips/my-app/src/Signin.js" className="nav-link">Sign In</a>
                <div className="menu-icon">
                    <i className="fas fa-bars"></i>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;