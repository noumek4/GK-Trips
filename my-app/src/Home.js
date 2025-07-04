import React from 'react'
import './Home.css'; 

const cardData = [
    { title: 'The Waza Park', Image: './assets/bg1.jpg'},
    { title: 'The Foumban Museum', Image: '/assets/bg3.jpg'},
    { title: 'limbe Botanical Garden', Image: '/assets/bg3.jpg'},
    { title: 'The Ekom Nkam Waterfalls', Image: '/assets/bg3.jpg'},
    { title: 'Down Beach', Image: '/assets/bg3.jpg'},
    { title: 'Jully Kribi Residence', Image: '/assets/bg3.jpg'},
    { title: 'The Mount Febe Hotel', Image: '/assets/bg3.jpg'},
    { title: 'The Douala Rabingha Hotel', Image: '/assets/bg3.jpg'},
    { title: 'The Adrien Beach Hotel', Image: '/assets/bg3.jpg'},
    { title: 'The Residence Amar', Image: '/assets/bg3.jpg'},
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
