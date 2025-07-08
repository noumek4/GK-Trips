import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'; 
import bg1 from './waza.jpg'
import bg2 from './foumban.jpg'
import bg3 from './limbe.jpg'
import bg4 from './ekom.jpg'
import bg5 from './downbeach.jpg'
import bg6 from './jully.jpg'
import bg7 from './febe.webp';
import bg8 from './Rabingha.jpg';
import bg9 from './Adrien.jpg';
import bg10 from './Amar.jpg'

const cardData = [
    { title: 'The Waza Park', Image: bg1, type:"trip", link: '/waza'},
    { title: 'The Foumban Museum', Image: bg2, type:"trip", link: '/foumban'},
    { title: 'limbe Botanical Garden', Image: bg3, type:"trip", link: '/limbe'},
    { title: 'The Ekom Nkam Waterfalls', Image: bg4, type:"trip", link: '/ekom'},
    { title: 'Down Beach', Image: bg5, type:"trip", link: '/downbeach'},
    { title: 'Jully Kribi Residence', Image: bg6, type:"trip", link: '/jully'},
    { title: 'The Mount Febe Hotel', Image: bg7, type:"trip", link: '/febe'},
    { title: 'The Douala Rabingha Hotel', Image: bg8, type:"trip", link: '/rabingha'},
    { title: 'The Adrien Beach Hotel', Image: bg9, type:"trip", link: '/adrien'},
    { title: 'The Residence Amar', Image: bg10, type:"trip", link: '/amar'}, 
]

function Home() {
    return (
        <>
        <div className='card-container'>
            {cardData.map((card, index) => (
                <div className={`card ${card.type}`} key={index}>
                   <Link to={card.link}>
                    <img src={card.Image} alt={card.title} />
                    </Link>
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
