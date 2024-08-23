import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link, animateScroll as scrollTo } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import PossiblePic from "../images/possible_logo.png";
import './Navbar.css';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);

    const handleNavItemClick = (sectionId, sectionName) => {
        document.title = `${sectionName} - Possible Group`;  // Update the document title
        console.log(`Navigating to section: ${sectionId}`);  // Debugging statement
        console.log(`Title changed to: ${document.title}`);  // Debugging statement

        if (sectionId === 'OurServices') {
            if (location.pathname !== '/order-service') {
                navigate('/order-service');
            }
            closeMenu();  // Close the menu after navigation
        } else {
            if (location.pathname !== '/') {
                navigate(`/#${sectionId}`);
            } else {
                scrollTo.scrollTo(document.getElementById(sectionId).offsetTop - 100, {
                    duration: 500,
                    smooth: true,
                });
            }
            closeMenu();  // Close the menu after scrolling
        }
    };

    useEffect(() => {
        document.title = 'Possible Group - Home';  // Set default title when component mounts
    }, []);

    return (
        <div className='header'>
            <nav className='navbar'>
                <div className='logo'>
                    <Link to="Home" spy={true} smooth={true} offset={-50} duration={500} onClick={() => handleNavItemClick('Home', 'Главная')}>
                        <img className='navbar_logo' src={PossiblePic} alt='Possible Logo' />
                    </Link>
                </div>

                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}
                </div>

                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <Link to="OurServices" spy={true} smooth={true} offset={-50} duration={500} onClick={() => handleNavItemClick('OurServices', 'Наши услуги')}>НАШИ УСЛУГИ</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="AboutUs" spy={true} smooth={true} offset={-170} duration={500} onClick={() => handleNavItemClick('AboutUs', 'О нас')}>О НАС</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="Clients" spy={true} smooth={true} offset={-80} duration={500} onClick={() => handleNavItemClick('Clients', 'Клиенты')}>КЛИЕНТЫ</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="OurTeam" spy={true} smooth={true} offset={-150} duration={500} onClick={() => handleNavItemClick('OurTeam', 'Наша команда')}>НАША КОМАНДА</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="Vlog" spy={true} smooth={true} offset={-50} duration={500} onClick={() => handleNavItemClick('Vlog', 'Блог')}>БЛОГ</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="Footer" spy={true} smooth={true} offset={-100} duration={500} onClick={() => handleNavItemClick('Footer', 'Контакты')}>КОНТАКТЫ</Link>
                    </li>
                    <div className='nav-button'>
                        <button className='callback-button'>
                            <Link to="Callback" spy={true} smooth={true} offset={-170} duration={500} onClick={() => handleNavItemClick('Callback', 'Обратный звонок')}>ОБРАТНЫЙ ЗВОНОК</Link>
                        </button>
                    </div>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
