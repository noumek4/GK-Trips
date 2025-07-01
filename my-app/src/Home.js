import React from 'react'
import { useState } from 'react'

function Home() {
    return (
        <div className='navbar'>
            <nav>
                <ul className='nav-links-1'>
                    <li>
                        <a href='/'>Create Account</a>
                        <a href='/'>Sign in</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}