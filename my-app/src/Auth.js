import React from 'react';
import { useState } from 'react';
import './Auth.css'
import bg1 from './assets/bg1.jpg';
import bg2 from './assets/bg2.jpg';
import bg3 from './assets/bg3.jpg';
import bg4 from './assets/bg4.jpg';

const backgrounds = [bg1, bg2, bg3, bg4];

function Auth() {
const [step, setStep] = useState(1);
const [bgIndex, setBgIndex] = useState(0);
const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmpassword: ''

});

const handleNext = () => {
    if (step < 4) setStep(step + 1);
};

const handleBack = () => {
    if (step > 1) setStep(step -1);
};

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
};

const cycleBackground = () => {
    setBgIndex((bgIndex + 1) % backgrounds.length);
};

const progress = (step / 4) * 100;

let progressColor = '#f44336';
if (progress > 33 && progress < 100) progressColor = '#ff9800';
if (progress === 100) progressColor = '#4caf50';

return (
    <div className='auth-container' style={{ backgroundImage: `url(${backgrounds[bgIndex]})` }} onClick={cycleBackground}>
<div className='overlay'>
    <div className='form-box'>
        <h2>Sign up</h2>
        <div className='progressbar' style={{width: `${progress}%`, backgroundColor:progressColor}}></div>

        {step === 1 && (
            <input
            type='text'
            name='name'
            placeholder='Enter Your Name'
            value={formData.name}
            onChange={handleChange} />
        )}

        {step === 2 && (
            <input
            type='email'
            name='email'
            placeholder='Enter Your Email'
            value={formData.email}
            onChange={handleChange} />
        )}

        {step === 3 && (
            <input
            type='password'
            name='password'
            placeholder='Choose Your Password'
            value={formData.password}
            onChange={handleChange} />
        )}

        {step === 4 && (
            <input
            type='password'
            name='confirmpassword'
            placeholder='Confirm Your Password'
            value={formData.confirmpassword}
            onChange={handleChange} />
        )}

        <div className='button-group'>
            {step > 1 && <button onClick={handleBack}>Back</button>}
            {step < 4 ? (
                <button onClick={handleNext}>Next</button>
            ) : (
                <button onClick={() => alert('Submitted!')}>Submit</button>
            )}
        </div>
    </div>
</div>
</div>
);
}

export default Auth