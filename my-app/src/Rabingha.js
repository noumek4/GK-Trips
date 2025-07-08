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
                <h2>The Adrien Beach Hotel</h2>
                <p>Known for it's simple and rustic sites the Adrien Beach Hotel
                    is known for it's welcoming environment and cultural illustrations
                    and modern work of art 
                    Known for it's simple and rustic sites the Adrien Beach Hotel
                    is known for it's welcoming environment and cultural illustrations
                    and modern work of art 
                    Known for it's simple and rustic sites the Adrien Beach Hotel
                    is known for it's welcoming environment and cultural illustrations
                    and modern work of art 

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