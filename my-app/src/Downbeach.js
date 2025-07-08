import React from 'react';
import { Link } from 'react-router-dom';
import downImg from'./downbeach.jpg';
import './Downbeach.css';

const Downbeach = () => {
return(
    <div className='trip-info-container'>
        <div className='trip-info-header'>
            <h1>Trips Info</h1>
        </div>
        <div className='card-content'>
            <div className='image-section'>
                <img src={downImg} alt="Adrien" />
            </div>
            <div className='details-section'>
                <h2>DownBeach</h2>
                <p>DownBeach is known for it's incredible multi-services activities
                    where you could see things like incredible restaurant and amazing attractions and 
                    horse riding, located at the seashore of the atlantic ocean in the south west of cameroon ,this adventure is going to be fabulous
                    both for your tongue and for your mental health and where you could relax at the sun set
                    While eating roasted fish and sea food
                    

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

export default Downbeach