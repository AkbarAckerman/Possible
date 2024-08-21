import React from 'react'
import { Link as RouterLink } from 'react-router-dom';
import './AboutUs.css'

const AboutUs = () => {
    return (
        <div className='about_us'>
            <div className='about-possible'>POSSIBLE GROUP </div>
            <div className='about-possible'>в Узбекистане предлагает своим клиентам</div>
            <div className='about-possible'>широкий спектр услуг:</div>
            <RouterLink to="/order-service" className="learn-more-button">
            УЗНАТЬ БОЛЬШЕ
          </RouterLink>
        </div>
    )
}

export default AboutUs
