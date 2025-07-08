import React from 'react';
import { Link } from 'react-router-dom';
import jullyImg from './jully.jpg'
import './Jully.css';

const Jully = () => {
return(
    <div className='trip-info-container'>
        <div className='trip-info-header'>
            <h1>Trips Info</h1>
        </div>
        <div className='card-content'>
            <div className='image-section'>
                <img src={jullyImg} alt="Adrien" />
            </div>
            <div className='details-section'>
                <h2>The Jully Kribi Residence</h2>
                <p>The Jully Kribi Residence is a famous and local Hotel located in the 
                    Southern Region of Cameroun especially in Kribi, The Hotels offers a lot of comfort and
                    activities to entertains it's guest. Based near the ocean it an incredible area to see sunset reflecting 
                    over the ocean.
                    The Jully Kribi Residence is a famous and local Hotel located in the 
                    Southern Region of Cameroun especially in Kribi, The Hotels offers a lot of comfort and
                    activities to entertains it's guest. Based near the ocean it an incredible area to see sunset reflecting 
                    over the ocean.
                    The Jully Kribi Residence is a famous and local Hotel located in the 
                    Southern Region of Cameroun especially in Kribi, The Hotels offers a lot of comfort and
                    activities to entertains it's guest. Based near the ocean it an incredible area to see sunset reflecting 
                    over the ocean.
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

export default Jully