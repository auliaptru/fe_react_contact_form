import React, { useState } from 'react';
import { CgMenuRight } from 'react-icons/cg';

// https://dribbble.com/shots/16240307-Daily-UI-Design-Challenge-Day-28-Contact-Us
import './navbar.scss';

const menu = ['Services', 'Products', 'Pricing', 'Contact Us'];

const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState('Contact Us');
    const [mobile, setMobile] = useState(false);

    const clickHandler = (menu) => {
        setActiveMenu(menu);
    };

    return (
        <nav className='navbar'>
            <div className='navbar__wrapper'>
                <div className='navbar__logo'>
                    <h1>GeeQ</h1>
                </div>
                <ul className='navbar__menu'>
                    {menu.map((item) => (
                        <li
                            key={item}
                            onClick={() => clickHandler(item)}
                            className={`${activeMenu === item && 'active'}`}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
                <div className='navbar__mobile'>
                    <div
                        className='menu__icon'
                        onClick={() => setMobile(!mobile)}
                    >
                        <CgMenuRight />
                    </div>
                    {mobile && (
                        <ul className='navbar__mobile-menu'>
                            {menu.map((item) => (
                                <li
                                    key={item}
                                    onClick={() => clickHandler(item)}
                                    className={`${
                                        activeMenu === item && 'active'
                                    }`}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
