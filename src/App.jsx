import React from 'react';
import emailjs from '@emailjs/browser';
import './app.scss';
import Navbar from './components/Navbar';
import ContactForm from './components/ContactForm';

const App = () => {
    return (
        <div className='app'>
            <div className='app__wrapper'>
                <Navbar />
                <ContactForm />
            </div>
        </div>
    );
};

export default App;
