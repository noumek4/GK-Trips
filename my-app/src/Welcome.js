import React from 'react'
import bg1 from './elephant-8253639_1920.jpg'
import bg2 from './Chutes de la lobé 🇨🇲❤️🫶🏻.jpg'
import bg3 from './pexels-messina-12251153.jpg'
import bg4 from './Ekom-Nkam Waterfalls - Cameroon.jpg'
import './Welcome.css'


const Welcome = () => {
   const destination = [
    {name: "North",
     Image: bg1
    },

     {name: "South",
     Image: bg2
    },

     {name: "East",
     Image: bg3
    },

     {name: "West",
     Image: bg4
    }
   ]
  
   return (
    <div className='welcome-page'>
        <section className='hero'>
            <div className='hero-text'>
                <h1>GK Trips</h1>
                <p>Explore the Local Beauties</p>
            </div>
        </section>

        <section className='card-section'>
            <h2>Top Destination</h2>
            <div className='cards'>
                {destination.map((place, index) => (
                <div className='card' key={index}>
                    <img src={place.Image} alt='Visit the local' />
                      <h3>{place.name}</h3>
                </div>    
                ))}
              
            </div>

            <button className='explore-btn'>Explore-Now</button>
        </section>
    </div>
   );
    
};

export default Welcome