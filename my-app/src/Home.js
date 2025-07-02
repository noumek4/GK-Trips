import React from 'react'
import {FaSearch} from 'react-icons/fa'

function Home() {
    return (
        <>
        <nav className='navbar'>
            <FaSearch className='search-icon' 
            size={20}/>
            <input type='text' placeholder='Search for trips, Hotels' className='search-input' />
            <div className='nav-links'>
                <ul>
                    <li><a href='./Auth.js'>Create an Account</a></li>
                    <li><a href='./Signin.js'>Sign In</a></li>
                </ul>
            </div>
        </nav>
        </>
    )
}

export default Home
