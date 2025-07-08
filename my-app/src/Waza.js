import React from 'react';
import { Link } from 'react-router-dom';
import wazaImg from './waza.jpg'
import './Waza.css';

const Waza = () => {
return(
    <div className='trip-info-container'>
        <div className='trip-info-header'>
            <h1>Trips Info</h1>
        </div>
        <div className='card-content'>
            <div className='image-section'>
                <img src={wazaImg} alt="Adrien" />
            </div>
            <div className='details-section'>
                <h2>The Waza Park</h2>
                <p>The Waza Park is one of the wildlife reserve in cameroon.
                    Protected by the government, you will see animals living in the savannah,
                    , observe the Giraffes and the Lions and Antelopes. This amazing area is located
                    in the northern part of cameroon
                    The Waza Park is one of the wildlife reserve in cameroon.
                    Protected by the government, you will see animals living in the savannah,
                    , observe the Giraffes and the Lions and Antelopes. This amazing area is located
                    in the northern part of cameroon
                    The Waza Park is one of the wildlife reserve in cameroon.
                    Protected by the government, you will see animals living in the savannah,
                    , observe the Giraffes and the Lions and Antelopes. This amazing area is located
                    in the northern part of cameroon

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

export default Waza