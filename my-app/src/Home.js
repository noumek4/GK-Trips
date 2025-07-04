import React from 'react'
import './Home.css'; 

const cardData = [
    { title: 'The Waza Park', Image: './bg1.jpg'},
    { title: 'The Foumban Museum', Image: './bg2.jpg'},
    { title: 'limbe Botanical Garden', Image: './bg3.jpg'},
    { title: 'The Ekom Nkam Waterfalls', Image: './bg4.jpg'},
    { title: 'Down Beach', Image: './bg5.jpg'},
    { title: 'Jully Kribi Residence', Image: './bg6.jpg'},
    { title: 'The Mount Febe Hotel', Image: './bg3.jpg'},
    { title: 'The Douala Rabingha Hotel', Image: './bg4.jpg'},
    { title: 'The Adrien Beach Hotel', Image: './bg5.jpg'},
    { title: 'The Residence Amar', Image: './bg6.jpg'},
]

function Home() {
    return (
        <>

        <div className='card-container'>
            {cardData.map((card, index) => (
                <div className='card' key={index}>
                    <img src={card.Image} alt={card.title} />
                    <h3>{card.title}</h3>
                    <button>View</button>
                </div>
            ))}
        </div>
        </>
    )
}

export default Home
