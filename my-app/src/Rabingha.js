import React from 'react';
import { Link } from 'react-router-dom';
import rabinImg from './Rabingha.jpg'
import './Rabingha.css';

const Rabingha = () => {
return(
    <div className='trip-info-container'>
        <div className='trip-info-header'>
            <h1>Trips Info</h1>
        </div>
        <div className='card-content'>
            <div className='image-section'>
                <img src={rabinImg} alt="Adrien" />
            </div>
            <div className='details-section'>
                <h2>The Douala Rabingha Hotel</h2>
                <p>If you need a place to stay for a period of time in Douala,
                    we actually advice you the Douala Rabingha Hotel, Known for it's comfort and the 
                    quality services ,you will enjoy sleeping in their rooms and benefit their
                    incredible room services
                    
                    
                </p>
            </div>

            <div className='info-points'>
                <ul>
                    <li>Lorem ipsum dolor isit amet sol deo gracias sunfe</li>
                    <li>Lorem ipsum dolor isit amet sol deo gracias sunfe</li>
                    <li>Lorem ipsum dolor isit amet sol deo gracias sunfe</li>
                    <li>Lorem ipsum dolor isit amet sol deo gracias sunfe</li>
                </ul>

                <ul>
                    <li>Lorem ipsum dolor isit amet sol deo gracias sunfe</li>
                    <li>Lorem ipsum dolor isit amet sol deo gracias sunfe</li>
                    <li>Lorem ipsum dolor isit amet sol deo gracias sunfe</li>
                    <li>Lorem ipsum dolor isit amet sol deo gracias sunfe</li>
                </ul>
            </div>
            <div className='book-button-container'>
                <Link to="/reservation">
                <button className='book-now-button'>Book Now</button>
                </Link>
            </div>
        </div>
    </div>
)
}

export default Rabingha