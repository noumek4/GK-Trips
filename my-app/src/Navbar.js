import React from 'react'
import { useState } from 'react'


function Navbar() {
    return (
        <>
        <nav className='navbar'>
            <div className='navbar-left'>
                <div className='search-container'>
                    <input type='text' placeholder='Search' className='search-input' />
                    <button className='search-button'>
                        <svg width={16} height={16} viewBox='0 0 24 24' fill='none' stroke='currentColor'>
                            <circle cx={11} cy={11} r={8} />
                            <path d='M21 21L-4.35-4.35' />
                        </svg>
                    </button>
                </div>
            </div>
            <div className='navbar-center'>
                <h1 className='logo'>GK Trips</h1>
            </div>
            <div className='navbar-right'>
                <button className='nav-button'>Create an Account</button>
                <button className='nav-button'>Sign In</button>
            </div>
        </nav>
        </>
    )
}

export default Navbar