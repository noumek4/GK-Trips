import React from 'react';
import { useState } from 'react';

function Auth() {
    const [islogin, setIsLogin] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (islogin) {
            
            if (email === '' || password === '') {
                setError('Please fill in all fields');
                return;
            }
            
            setSuccess('Login successful');
        } else {
           
            if (name === '' || email === '' || password === '' || confirmpassword === '') {
                setError('Please fill in all fields');
                return;
            }
            if (password !== confirmpassword) {
                setError('Passwords do not match');
                return;
            }
            
            setSuccess('Registration successful');
        }

       
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    };

    return (
        <div className='auth-container'>
            <h2>{islogin ? 'Login' : 'Register'}</h2>
            <form onSubmit={handleSubmit}>
                {!islogin && (
                    <div className='auth-name'>
                        <label>Name:</label>
                        <input
                            type="text"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </div>
                )}
                <div className='auth-email'>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className='auth-password'>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                {!islogin && (
                    <div className='auth-confirm-password'>
                        <label>Confirm Password:</label>
                        <input
                            type="password"
                            value={confirmpassword}
                            onChange={e => setConfirmPassword(e.target.value)}
                        />
                    </div>
                )}
                <button type="submit">{islogin ? 'Login' : 'Register'}</button>
            </form>
            <button onClick={() => {
                setIsLogin(!islogin);
                setError('');
                setSuccess('');
            }}>
                {islogin ? 'Switch to Register' : 'Switch to Login'}
            </button>
            {error && <div style={{ color: 'red', marginTop: 10 }}>{error}</div>}
            {success && <div style={{ color: 'green', marginTop: 10 }}>{success}</div>}
        </div>
    );
}

export default Auth