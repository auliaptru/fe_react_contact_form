import React from 'react';
import { MdLocationPin, MdLocalPhone, MdEmail } from 'react-icons/md';

import contact from '../assets/contact.png';
import './contact.scss';

const Contact = () => {
    return (
        <div className='contact'>
            <div className='contact__wrapper'>
                <div className='contact__img'>
                    <img src={contact} alt='contact' />
                </div>
                <div className='contact__details'>
                    <div className='detail'>
                        <div className='icon__wrapper'>
                            <MdLocationPin className='icon' />
                        </div>
                        <p>674 Washington Avenue</p>
                    </div>
                    <div className='detail'>
                        <div className='icon__wrapper'>
                            <MdLocalPhone className='icon' />
                        </div>
                        <p>602-216-4143</p>
                    </div>
                    <div className='detail'>
                        <div className='icon__wrapper'>
                            <MdEmail className='icon' />
                        </div>
                        <p>johndoe123@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
