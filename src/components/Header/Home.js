import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className='Home' id='Home'>
      <div className='content'>
        <div className='text-container'>
          <p className='main-text'>Развивайте свой бизнес вместе с нами</p>
          <p className='sub-text'>IT компания «POSSIBLE» — системный разработчик программного обеспечения для бизнеса.</p>
        </div>
        <div className="buttons">
          <ScrollLink
            to="AboutUs"
            smooth={true}
            offset={-50}
            duration={500}
            className="btn"
          >
            УЗНАТЬ БОЛЬШЕ
          </ScrollLink>
          <RouterLink to="/order-service" className="btn">
            ЗАКАЗАТЬ УСЛУГУ
          </RouterLink>
        </div>
      </div>
    </div>
  );
}

export default Home;
