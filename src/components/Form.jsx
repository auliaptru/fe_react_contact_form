import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

import './form.scss';
import { checkPropTypes } from 'prop-types';

const YOUR_SERVICE_ID = import.meta.env.VITE_REACT_APP_SERVICE_ID;
const YOUR_TEMPLATE_ID = import.meta.env.VITE_REACT_APP_TEMPLATE_ID;
const YOUR_PUBLIC_KEY = import.meta.env.VITE_REACT_APP_PUBLIC_KEY;

const Form = ({ setIsEmailSent, setErrorMessage }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleClearState = () => {
        setName('');
        setEmail('');
        setMessage('');
    };

    const handleSubmitForm = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                `${YOUR_SERVICE_ID}`,
                `${YOUR_TEMPLATE_ID}`,
                e.target,
                `${YOUR_PUBLIC_KEY}`
            )
            .then(
                (result) => {
                    console.log(result.text);
                    handleClearState();
                    setIsEmailSent(true);
                    setTimeout(() => {
                        setIsEmailSent(false);
                    }, 3000);
                    setErrorMessage('');
                },
                (error) => {
                    console.log(error.text);
                    setIsEmailSent(false);
                    setErrorMessage(
                        'Failed to send email. Please try again later!'
                    );
                    setTimeout(() => {
                        setErrorMessage('');
                    }, 3000);
                }
            );
    };

    return (
        <div className='form'>
            <div className='form__wrapper'>
                <h1>Get In Touch</h1>
                <p>We are here for you! How can we help?</p>
                <form onSubmit={handleSubmitForm}>
                    <input
                        type='text'
                        placeholder='Enter your name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type='email'
                        placeholder='Enter your email address'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <textarea
                        placeholder='Go ahead, we are listening...'
                        name=''
                        id=''
                        cols='30'
                        rows='8'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    );
};

Form.propTypes = {
    setIsEmailSent: checkPropTypes.bool,
    setErrorMessage: checkPropTypes.string,
};

export default Form;
