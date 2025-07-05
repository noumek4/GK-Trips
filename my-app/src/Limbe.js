import React from 'react';
import { Link } from 'react-router-dom';
import limbeImg from './limbe.jpg'
import './Limbe.css';

function Limbe() {
    return (
        <div className='header'>
            <div className='trip-header'>Trip Info</div>

            <div className='trip-info-box'>
                <img src={limbeImg} alt="Limbe Botanical Garden" className="trip-img" />
                <div className='trip-description'>
                    <h2>The Limbe Botanical Garden</h2>
                    <p>Known for it's incredible design The Limbe Botanical Garden is known for
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

export default Limbe;
