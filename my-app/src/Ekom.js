import React from 'react';
import { Link } from 'react-router-dom';
import ekomImg from'./ekom.jpg';
import './Ekom.css';

const Ekom = () => {
return(
    <div className='trip-info-container'>
        <div className='trip-info-header'>
            <h1>Trips Info</h1>
        </div>
        <div className='card-content'>
            <div className='image-section'>
                <img src={ekomImg} alt="Adrien" />
            </div>
            <div className='details-section'>
                <h2>The Ekom Nkam Waterfall</h2>
                <p>Located in the Western region of cameroon especially in Melon,
                    the Ekom Nkam Waterfall is a treasure of nature, in which you could see local waterfalls
                    taking their rise from Western streams and rivers,
                    You shall discover the culture of the people and the benefits of such aspect of nature.
                    Plus the rustic reliefs of the western region of cameroon. Just prepare your Pull-overs
                    Located in the Western region of cameroon especially in Melon,
                    the Ekom Nkam Waterfall is a treasure of nature, in which you could see local waterfalls
                    taking their rise from Western streams and rivers,
                    You shall discover the culture of the people and the benefits of such aspect of nature.
                    Plus the rustic reliefs of the western region of cameroon. Just prepare your Pull-overs


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

export default Ekom