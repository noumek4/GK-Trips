import React from 'react';
import { Link } from 'react-router-dom';
import adrienImg from'./Adrien.jpg'
import './Adrien.css';

const Adrien = () => {
return(
    <div className='trip-info-container'>
        <div className='trip-info-header'>
            <h1>Trips Info</h1>
        </div>
        <div className='card-content'>
            <div className='image-section'>
                <img src={adrienImg} alt="Adrien" />
            </div>
            <div className='details-section'>
                <h2>The Adrien Beach Hotel</h2>
                <p>Known for it's simple and rustic sites the Adrien Beach Hotel
                    is known for it's welcoming environment and cultural illustrations
                    and modern work of art, you shall discover their traditional plus modern
                    rooms.
                </p>
            </div>

            <div className='info-points'>
                <ul>
                    <li>Open Everyday 7j/7</li>
                    <li>Rooms Available</li>
                    <li>Royals Suits, Couple Suits,Single Suits</li>
                    <li>Breakfast, Lunch, Dinner offered for VIP clients</li>
                </ul>

                <ul>
                    <li>Location: Douala</li>
                    <li>Price: 25000cfa for single Suits</li>
                    <li>Price: 35000cfa for Couple Suits</li>
                    <li>Price: 60000cfa for Royals Suits</li>
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

export default Adrien