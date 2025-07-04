import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'; 
import './bg1.jpg'

const cardData = [
    { title: 'The Waza Park', Image: './bg1.jpg', type:"trip"},
    { title: 'The Foumban Museum', Image: './bg2.jpg', type:"trip"},
    { title: 'limbe Botanical Garden', Image: './bg3.jpg', type:"trip"},
    { title: 'The Ekom Nkam Waterfalls', Image: './bg4.jpg', type:"trip"},
    { title: 'Down Beach', Image: './bg5.jpg', type:"trip"},
    { title: 'Jully Kribi Residence', Image: './bg6.jpg', type:"hotel"},
    { title: 'The Mount Febe Hotel', Image: './bg3.jpg', type:"hotel"},
    { title: 'The Douala Rabingha Hotel', Image: './bg4.jpg', type:"hotel"},
    { title: 'The Adrien Beach Hotel', Image: './bg5.jpg', type:"hotel"},
    { title: 'The Residence Amar', Image: './bg6.jpg', type:"hotel"}, 
]

function Home() {
    return (
        <>

        <div className='card-container'>
            {cardData.map((card, index) => (
                <div className={`card ${card.type}`} key={index}>
                    <img src={card.Image} alt={card.title} />
                    <h3>{card.title}</h3>
                    <Link to={card.link}>
                    <button className='view-btn'>View</button>
                    </Link>
                    
                </div>
            ))}
        </div>
        </>
    )
}

export default Home
