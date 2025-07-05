import React, { useState } from 'react';
import './Auth.css';
import { Link } from 'react-router-dom';
import bg1 from './waza.jpg'
import bg2 from './foumban.jpg';
import bg3 from './limbe.jpg';
import bg4 from './ekom.jpg';

const backgrounds = [bg1, bg2, bg3, bg4];

const paymentMethods = [
    { value: 'credit', label: 'Credit Card' },
    { value: 'mobile', label: 'Orange Money' },
    { value: 'mobile', label: 'Mobile Money' },
];

function ReservationForm() {
    const [bgIndex, setBgIndex] = useState(0);
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        date: '',
        email: '',
        phone: '',
        country: '',
        paymentmethod: '',
        guests: '',
        requests: ''
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [dropdownOpen, setDropdownOpen] = useState(false);

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

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        // Basic validation
        if (
            !formData.name ||
            !formData.surname ||
            !formData.date ||
            !formData.email ||
            !formData.phone ||
            !formData.country ||
            !formData.guests ||
            !formData.paymentmethod ||
            !formData.requests
        ) {
            setError('Please fill in all required fields.');
            return;
        }

        setSuccess('Reservation submitted successfully!');
        setFormData({
            name: '',
            surname: '',
            date: '',
            email: '',
            phone: '',
            country: '',
            paymentmethod: '',
            guests: '',
            requests: ''
        });
    };

    return (
        <div className='auth-container' style={{ backgroundImage: `url(${backgrounds[bgIndex]})` }} onClick={cycleBackground}>
            <div className='overlay'>
                <div className='form-box'>
                    <h2>Make a Reservation</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            type='text'
                            name='name'
                            placeholder='Name'
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                        <input
                            type='text'
                            name='surname'
                            placeholder='Second Name'
                            value={formData.surname}
                            onChange={handleInputChange}
                        />
                        <input
                            type='date'
                            name='date'
                            placeholder='Reservation Date'
                            value={formData.date}
                            onChange={handleInputChange}
                        />
                        <input
                            type='email'
                            name='email'
                            placeholder='Your Email'
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                        <input
                            type='tel'
                            name='phone'
                            placeholder='Phone Number'
                            value={formData.phone}
                            onChange={handleInputChange}
                        />
                        <input
                            type='text'
                            name='country'
                            placeholder='Country'
                            value={formData.country}
                            onChange={handleInputChange}
                        />
                        {/* Custom Dropdown for Payment Method */}
                        <div className="custom-dropdown" style={{ position: 'relative', marginBottom: 16 }}>
                            <div
                                className="dropdown-selected"
                                style={{
                                    border: '1px solid #ccc',
                                    borderRadius: 6,
                                    padding: '10px',
                                    cursor: 'pointer',
                                    background: '#fff',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    color: 'black'
                                }}
                                onClick={e => {
                                    e.stopPropagation();
                                    setDropdownOpen(!dropdownOpen);
                                }}
                            >
                                {formData.paymentmethod
                                    ? paymentMethods.find(m => m.value === formData.paymentmethod)?.label
                                    : 'Select Payment Method'}
                                <span style={{
                                    marginLeft: 8,
                                    transition: 'transform 0.2s',
                                    transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                                }}>
                                    ▼
                                </span>
                            </div>
                            {dropdownOpen && (
                                <div
                                    className="dropdown-options"
                                    style={{
                                        position: 'absolute',
                                        top: '100%',
                                        left: 0,
                                        right: 0,
                                        background: '#fff',
                                        border: '1px solid #ccc',
                                        borderRadius: 6,
                                        zIndex: 10
                                    }}
                                >
                                    {paymentMethods.map(method => (
                                        <div
                                            key={method.value}
                                            style={{
                                                padding: '10px',
                                                cursor: 'pointer',
                                                background: formData.paymentmethod === method.value ? '#f0f0f0' : '#fff'
                                            }}
                                            onClick={e => {
                                                e.stopPropagation();
                                                setFormData(prev => ({ ...prev, paymentmethod: method.value }));
                                                setDropdownOpen(false);
                                            }}
                                        >
                                            {method.label}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                        <input
                            type='number'
                            name='guests'
                            placeholder='Number of Guests'
                            value={formData.guests}
                            onChange={handleInputChange}
                            min="1"
                        />
                        <textarea
                            name='requests'
                            placeholder='Special Requests (optional)'
                            value={formData.requests}
                            onChange={handleInputChange}
                        />
                        <div className='button-group'>
                            <Link to="/home">
                            <button type="submit">Reserve</button>
                            </Link>
                        </div>
                        {error && <div style={{ color: 'red', marginTop: 10 }}>{error}</div>}
                        {success && <div style={{ color: 'green', marginTop: 10 }}>{success}</div>}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ReservationForm;