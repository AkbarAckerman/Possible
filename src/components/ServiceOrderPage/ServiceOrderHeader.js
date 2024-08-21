import React from 'react';
import './ServiceOrderHeader.css';


const ServiceOrderHeader = () => {
  return (
    <div className='service-page' id='ServiceOrderHeader'>
      <div className='service-content'>
        <div className='service-text-wrapper'>
          <p className='headline-text'>НАШИ УСЛУГИ</p>
          <p className='description-text'>POSSIBLE GROUP:</p>
          <p className='description-sub-text'>предлагает своим клиентам широкий спектр услуг:</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceOrderHeader;
