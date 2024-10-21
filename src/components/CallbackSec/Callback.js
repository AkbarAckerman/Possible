import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Callback.css';

const Callback = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [businessName, setBusinessName] = useState('');

  const handleNameChange = (e) => {
    const value = e.target.value;
    const filteredValue = value.replace(/[0-9]/g, ''); // Remove numbers
    setName(filteredValue);
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    const filteredValue = value.replace(/[^0-9+() -]/g, ''); // Allow only numbers and certain symbols
    setPhone(filteredValue);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!name || !phone || !businessName) {
      alert('Пожалуйста, заполните все поля.');
      return;
    }

    const token = '6375765924:AAGPwqUQEzQo2XKOHG1c56Ixv2m2rH97j6o';
    const chatId = '-4020548368';

    try {
      await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
        chat_id: chatId,
        text: `Новый пользователь👤:\nИмя и Фамилия: ${name}\nТип Услуги🏠: ${businessName}\nТелефон📞: ${phone}`,
      });

      toast.success('Ваша заявка была отправлена успешно.', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

      setName('');
      setPhone('');
      setBusinessName('');

    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className='Callback' id='Callback'>
      <div className="callback_container">
        <div className='callback_main_text'>Обратный звонок</div>
        <div className='callback_sub_text'>Оставьте свои контактные данные и мы свяжемся с вами в ближайшее время</div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Имя</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              placeholder="Введите ваше имя"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="businessName">Услуга</label>
            <input
              type="text"
              id="businessName"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              placeholder="Тип Услуги"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Телефон</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={handlePhoneChange}
              placeholder="+998 () ----"
              required
            />
          </div>
          <div className='callback-btn-container'>
          <button type="submit" className="callback_btn">
            Отправить
          </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Callback;