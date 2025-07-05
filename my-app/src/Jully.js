import React from 'react';
import { Link } from 'react-router-dom';
import './jully.jpg'
import './Jully.css';

function Jully() {
    return (
        <div className='header'>
            <div className='trip-header'>Trip Info</div>

            <div className='trip-info-box'>
                <img src="./jully.jpg" alt="The Jully Kribi Residence" className="trip-img" />
                <div className='trip-description'>
                    <h2>The Jully Kribi Residence</h2>
                    <p>Known for it's incredible design The Jully Kribi Residence is known for
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

export default Jully;
