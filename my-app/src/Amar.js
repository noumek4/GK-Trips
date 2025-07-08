import React from 'react';
import { Link } from 'react-router-dom';
import amarImg from'./Amar.jpg';
import './Amar.css';

const Amar = () => {
return(
    <div className='trip-info-container'>
        <div className='trip-info-header'>
            <h1>Trips Info</h1>
        </div>
        <div className='card-content'>
            <div className='image-section'>
                <img src={amarImg} alt="Adrien" />
            </div>
            <div className='details-section'>
                <h2>The Amar Residence</h2>
                <p>The Amar residence is known for its charming and well knowned home design comfort
                    usually appreciated because of it's minimalist but yet modern style ,The Amar residence is excellent 
                    for your stay
                    The Amar residence is known for its charming and well knowned home design comfort
                    usually appreciated because of it's minimalist but yet modern style ,The Amar residence is excellent 
                    for your stay
                    The Amar residence is known for its charming and well knowned home design comfort
                    usually appreciated because of it's minimalist but yet modern style ,The Amar residence is excellent 
                    for your stay
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

export default Amar