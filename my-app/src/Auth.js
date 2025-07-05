import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Auth.css'
import bg1 from './waza.jpg'
import bg2 from './foumban.jpg';
import bg3 from './limbe.jpg';
import bg4 from './ekom.jpg';

const backgrounds = [bg1, bg2, bg3, bg4];

function Auth() {
const [bgIndex, setBgIndex] = useState(0);
const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmpassword: ''
});

const cycleBackground = () => {
    setBgIndex((bgIndex + 1) % backgrounds.length);
};

const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
        ...prev,
        [name]: value
    }));
};

return (
    <div className='auth-container' style={{ backgroundImage: `url(${backgrounds[bgIndex]})` }} onClick={cycleBackground}>
        <div className='overlay'>
            <div className='form-box'>
                <h2>GK Trips Sign In</h2>
                <div className='progressbar' style={{width: `60%`, backgroundColor:'white'}}></div>
                <input
                    type='text'
                    name='name'
                    placeholder='Enter Your Name'
                    value={formData.name}
                    onChange={handleInputChange}
                />
                <input
                    type='email'
                    name='email'
                    placeholder='Enter Your Email'
                    value={formData.email}
                    onChange={handleInputChange}
                />
                <input
                    type='password'
                    name='password'
                    placeholder='Choose Your Password'
                    value={formData.password}
                    onChange={handleInputChange}
                />
                <input
                    type='password'
                    name='confirmpassword'
                    placeholder='Confirm Your Password'
                    value={formData.confirmpassword}
                    onChange={handleInputChange}
                />
                <div className='button-group'>
                    <Link to="/home">
                    <button onClick={() => alert('Submitted!')}>Submit</button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
);
}

export default Auth