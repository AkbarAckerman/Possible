import React, { useState } from 'react';
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

    const handleNavItemClick = (sectionId) => {
        if (sectionId === 'OurServices') {
            if (location.pathname !== '/order-service') {
                navigate('/order-service');
            }
            closeMenu(); // Close the menu after navigation
        } else {
            if (location.pathname !== '/') {
                navigate(`/#${sectionId}`);
            } else {
                scrollTo.scrollTo(document.getElementById(sectionId).offsetTop - 100, {
                    duration: 500,
                    smooth: true,
                });
            }
            closeMenu(); // Close the menu after scrolling
        }
    };
    

    return (
        <div className='header'>
            <nav className='navbar'>
                <div className='logo'>
                    <Link to="Home" spy={true} smooth={true} offset={-50} duration={500} onClick={() => handleNavItemClick('Home')}>
                        <img className='navbar_logo' src={PossiblePic} alt='Possible Logo' />
                    </Link>
                </div>

                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}
                </div>

                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <Link to="OurServices" spy={true} smooth={true} offset={-50} duration={500} onClick={() => handleNavItemClick('OurServices')}>НАШИ УСЛУГИ</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="AboutUs" spy={true} smooth={true} offset={-170} duration={500} onClick={() => handleNavItemClick('AboutUs')}>О НАС</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="Clients" spy={true} smooth={true} offset={-80} duration={500} onClick={() => handleNavItemClick('Clients')}>КЛИЕНТЫ</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="OurTeam" spy={true} smooth={true} offset={-150} duration={500} onClick={() => handleNavItemClick('OurTeam')}>НАША КОМАНДА</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="Vlog" spy={true} smooth={true} offset={-50} duration={500} onClick={() => handleNavItemClick('Vlog')}>БЛОГ</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="Footer" spy={true} smooth={true} offset={-100} duration={500} onClick={() => handleNavItemClick('Footer')}>КОНТАКТЫ</Link>
                    </li>
                    <div className='nav-button'>
                        <button className='callback-button'>
                            <Link to="Callback" spy={true} smooth={true} offset={-170} duration={500} onClick={() => handleNavItemClick('Callback')}>ОБРАТНЫЙ ЗВОНОК</Link>
                        </button>
                    </div>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
