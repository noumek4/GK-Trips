import React from 'react';
import { Link } from 'react-router-dom';
import foumbanImg from './foumban.jpg'
import './Foumban.css';

const Foumban = () => {
return(
    <div className='trip-info-container'>
        <div className='trip-info-header'>
            <h1>Trips Info</h1>
        </div>
        <div className='card-content'>
            <div className='image-section'>
                <img src={foumbanImg} alt="Adrien" />
            </div>
            <div className='details-section'>
                <h2>The Foumban Museum</h2>
                <p>The Foumban Museum or mostly known as the Kings Museum of Foumban,
                    is a historic and touristic sites in which you can see the different kings and 
                    dynasties of the foumban community. You will learn their histories and their reign and lives styles.
                    Showing you the culture of the foumban community
                    The Foumban Museum or mostly known as the Kings Museum of Foumban,
                    is a historic and touristic sites in which you can see the different kings and 
                    dynasties of the foumban community. You will learn their histories and their reign and lives styles.
                    Showing you the culture of the foumban community
                    The Foumban Museum or mostly known as the Kings Museum of Foumban,
                    is a historic and touristic sites in which you can see the different kings and 
                    dynasties of the foumban community. You will learn their histories and their reign and lives styles.
                    Showing you the culture of the foumban community


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

export default Foumban