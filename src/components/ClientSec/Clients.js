import React from 'react';
import './Clients.css';
import client from '../images/client.png'

const Clients = () => {
  return (
    <div className='clients-section' id='Clients'>
      <div className='client-main-text'>КЛИЕНТЫ</div>
      <div className='pink-dash'></div>
      <div className='carousel-container'>
        <div className='carousel-wrapper'>
          <div className='carousel-item'>
            <img src={client} alt='Client 1' />
          </div>
          <div className='carousel-item'>
            <img src={client} alt='Client 2' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clients;
