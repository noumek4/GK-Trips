import React from 'react';
import { Link } from 'react-router-dom';
import './downbeach.jpg';
import './Downbeach.css';

function DownBeach() {
    return (
        <div className='header'>
            <div className='trip-header'>Trip Info</div>

            <div className='trip-info-box'>
                <img src="./downbeach.jpg" alt="Down Beach" className="trip-img" />
                <div className='trip-description'>
                    <h2>Down Beach</h2>
                    <p>Known for it's incredible design the Down Beach is known for
                        it's incredible design and the variety of animals it houses and 
                        it's traditional artefact
                    </p>
                </div>
            </div>

            <div className='trip-details'>
                <div className='column'>
                    <p>Lorem ipsum dolor isis amet guh deo sir</p>
                    <p>Lorem ipsum dolor isis amet guh deo sir</p>
                    <p>Lorem ipsum dolor isis amet guh deo sir</p>
                    <p>Lorem ipsum dolor isis amet guh deo sir</p>
            </div>

              <div className='column'>
                    <p>Lorem ipsum dolor isis amet guh deo sir</p>
                    <p>Lorem ipsum dolor isis amet guh deo sir</p>
                    <p>Lorem ipsum dolor isis amet guh deo sir</p>
                    <p>Lorem ipsum dolor isis amet guh deo sir</p>
            </div>
        </div>

        <div className='btn-wrapper'>
            <Link to="/reservation">
            <button className='book-btn'>Book Now</button>
            </Link>
        </div>
        </div>

        
        
    );
};

export default DownBeach;
