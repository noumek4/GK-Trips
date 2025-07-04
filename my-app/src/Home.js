import React from 'react'
import './Home.css'; 

const cardData = [
    { title: 'The Waza Park', Image: '/assets/bg3.jpg'},
    { title: 'The Foumban Museum', Image: '/assets/bg3.jpg'},
    { title: 'The Waza Park', Image: '/assets/bg3.jpg'},
    { title: 'The Mount Febe Hotel', Image: '/assets/bg3.jpg'},
    { title: 'Douala Rabingha Hotel', Image: '/assets/bg3.jpg'},
    { title: 'Jully Kribi Residence', Image: '/assets/bg3.jpg'},
    { title: 'The Waza Park', Image: '/assets/bg3.jpg'},
    { title: 'The Waza Park', Image: '/assets/bg3.jpg'},
    { title: 'The Waza Park', Image: '/assets/bg3.jpg'},
    { title: 'The Waza Park', Image: '/assets/bg3.jpg'},
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
