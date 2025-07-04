import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'; 
import bg1 from './bg1.jpg';
import bg2 from './bg2.jpg';
import bg3 from './bg3.jpg';
import bg4 from './bg4.jpg';
import bg5 from './bg5.jpg';
import bg6 from './bg6.jpg';

const cardData = [
    { title: 'The Waza Park', Image: bg1, type:"trip", link: '/waza'},
    { title: 'The Foumban Museum', Image: bg2, type:"trip", link: '/foumban'},
    { title: 'limbe Botanical Garden', Image: bg3, type:"trip", link: '/limbe'},
    { title: 'The Ekom Nkam Waterfalls', Image: bg4, type:"trip", link: '/ekom'},
    { title: 'Down Beach', Image: bg5, type:"trip", link: '/downbeach'},
    { title: 'Jully Kribi Residence', Image: bg6, type:"hotel", link: '/jully'},
    { title: 'The Mount Febe Hotel', Image: bg3, type:"hotel", link: '/febe'},
    { title: 'The Douala Rabingha Hotel', Image: bg4, type:"hotel", link: '/rabingha'},
    { title: 'The Adrien Beach Hotel', Image: bg5, type:"hotel", link: '/adrien'},
    { title: 'The Residence Amar', Image: bg6, type:"hotel", link: '/amar'}, 
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
