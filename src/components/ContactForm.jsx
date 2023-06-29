import React, { useRef, useState } from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

import './contactForm.scss';
import Form from './Form';
import Contact from './Contact';

const ContactForm = () => {
    const [isEmailSent, setIsEmailSent] = useState(false);
    const [erroMessage, setErrorMessage] = useState('');

    return (
        <div className='contactForm'>
            {isEmailSent && (
                <p className='contactForm__statMsg success'>
                    Email sent successfully!
                </p>
            )}
            {erroMessage && (
                <p className='contactForm__statMsg error'>{erroMessage}</p>
            )}
            <div className='contactForm__wrapper'>
                <div className='contactForm__form'>
                    <Form
                        setIsEmailSent={setIsEmailSent}
                        setErrorMessage={setErrorMessage}
                    />
                </div>
                <div className='contactForm__contact'>
                    <Contact />
                </div>
                <div className='contactForm__sosmed'>
                    <div className='icon__wrapper'>
                        <FaFacebookF className='icon' />
                        <FaTwitter className='icon' />
                        <FaLinkedinIn className='icon' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
