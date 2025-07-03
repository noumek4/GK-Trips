import React from 'react'
import {FaSearch} from 'react-icons/fa'
import './Home.css'; 

const cardData = [
    { title: 'The Waza Park', Image: '/assets/bg3.jpg'},
    { title: 'The Foumban Museum', Image: '/assets/bg3.jpg'},
    { title: 'The Waza Park', Image: '/assets/bg3.jpg'},
    { title: 'The Mount Febe Hotel', Image: '/assets/bg3.jpg'},
    { title: 'Douala Rabingha Hotel', Image: '/assets/bg3.jpg'},
    { title: 'Jully Kribi Residence', Image: '/assets/bg3.jpg'}
]

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

        <div className='card-container'>
            {cardData.map((card, index) => (
                <div className='card' key={index}>
                    <img src={card.Image} alt={card.title} />
                    <h3>{card.title}</h3>
                    <button>View</button>
                </div>
            ))}
        </div>
        </>
    )
}

export default Home
