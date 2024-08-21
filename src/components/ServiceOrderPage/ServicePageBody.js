import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import './ServicePageBody.css';
import web_dev_icon from '../images/web_dev_icon.jpg'; 
import crm_icon from '../images/crm_icon.jpg'; 
import smm_icon from '../images/smm_icon.jpg'; 
import telegram_bot_icon from '../images/telegram_bot_icon.jpg'; 
import graph_design_icon from '../images/graph_design_icon.jpg'; 
import mobile_dev_icon from '../images/mobile_dev_icon.jpg';
import pos from '../images/pos.jpg';
import seo from '../images/seo.jpg';
import ip_telep from '../images/ip_telep.jpg';

const ServicePageBody = () => {
  const [showOffCanvas, setShowOffCanvas] = useState(false);

  const handleShowOffCanvas = () => setShowOffCanvas(true);
  const handleCloseOffCanvas = () => setShowOffCanvas(false);

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
        position: "bottom-left",
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
    <div className='service-page-body'>

    <div className={`offcanvas ${showOffCanvas ? 'show' : ''}`}>
      <div className="offcanvas-header">
        <h5 className="offcanvas-title">Связаться с Possible</h5>
        <button type="button" className="btn-close" onClick={handleCloseOffCanvas}>
          &times;
        </button>
      </div>
      <div className="offcanvas-body">
        <h2 className='offcanva-main-text'>Оставьте вашу заявку и наша команда свяжется с вами за короткое время</h2>
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
          <button type="submit" className="callback_btn">
            Отправить
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>


      <div className='service-card'>
        <div className='service-image-box'>
          <img src={web_dev_icon} alt='Web Development' className='service-icon'/>
        </div>
        <div className='service-text-box'>
          <h3>Разработка сайтов.</h3>
          <p>Мы создаем современные, функциональные и адаптивные веб-сайты, которые помогают вашему бизнесу выделяться и привлекать больше клиентов. Наша команда профессионалов обеспечивает полный цикл разработки: от исследования и проектирования до запуска и дальнейшей поддержки. Мы также предлагаем услуги по редизайну и модернизации существующих сайтов, обеспечивая их соответствие современным стандартам и требованиям.</p>
          <button className='service-button' onClick={handleShowOffCanvas}>подробнее</button>
        </div>
      </div>

      <div className='service-card reverse'>
        <div className='service-image-box'>
          <img src={crm_icon} alt='CRM System' className='service-icon'/>
        </div>
        <div className='service-text-box'>
          <h3>CRM система для ресторанов.</h3>
          <p>Внедрение и настройка AmoCRM для вашего бизнеса позволяет эффективно управлять клиентской базой и улучшать коммуникацию с клиентами. Мы помогаем интегрировать AmoCRM с вашими существующими системами, обучаем сотрудников и предоставляем постоянную поддержку. Наши эксперты помогут вам максимально использовать все возможности этой мощной CRM-системы для увеличения продаж и повышения уровня обслуживания клиентов.</p>
          <button className='service-button' onClick={handleShowOffCanvas}>подробнее</button>
        </div>
      </div>

      <div className='service-card'>
        <div className='service-image-box'>
          <img src={smm_icon} alt='SMM Services' className='service-icon'/>
        </div>
        <div className='service-text-box'>
          <h3>SMM услуги.</h3>
          <p>Наши специалисты по SMM разработают для вас стратегию продвижения в социальных сетях, которая увеличит вашу аудиторию и улучшит взаимодействие с клиентами. Мы создаем уникальный контент, проводим рекламные кампании и анализируем результаты для максимальной эффективности. Мы работаем с различными платформами, такими как Facebook, Instagram, Twitter и LinkedIn, чтобы ваш бренд был виден везде, где находятся ваши потенциальные клиенты.</p>
          <button className='service-button' onClick={handleShowOffCanvas}>подробнее</button>
        </div>
      </div>

      <div className='service-card reverse'>
        <div className='service-image-box'>
          <img src={telegram_bot_icon} alt='Telegram Bots' className='service-icon'/>
        </div>
        <div className='service-text-box'>
          <h3>Разработка Ботов для Telegram.</h3>
          <p>Мы разрабатываем интеллектуальных и функциональных ботов для Telegram, которые могут выполнять разнообразные задачи: от автоматизации обслуживания клиентов до проведения опросов и рассылок. Наши боты помогут вам сократить затраты на коммуникацию и повысить уровень удовлетворенности клиентов. Мы предлагаем полный цикл разработки, включая дизайн, программирование и интеграцию с вашими системами.</p>
          <button className='service-button' onClick={handleShowOffCanvas}>подробнее</button>
        </div>
      </div>

      <div className='service-card'>
        <div className='service-image-box'>
          <img src={pos} alt='Graphic Design' className='service-icon'/>
        </div>
        <div className='service-text-box'>
          <h3>POS система для ресторанов</h3>
          <p>Наши POS системы разработаны с учетом всех потребностей ресторанного бизнеса. Они облегчают управление заведением, автоматизируют процессы заказа и учета, улучшая качество обслуживания клиентов. Наши решения интегрируются с различными устройствами, обеспечивая надежную работу даже в условиях высокой нагрузки. Кроме того, мы предлагаем персонализированные настройки и поддержку, чтобы ваша POS система работала без сбоев.</p>
          <button className='service-button' onClick={handleShowOffCanvas}>подробнее</button>
        </div>
      </div>

      <div className='service-card reverse'>
        <div className='service-image-box'>
          <img src={graph_design_icon} alt='Graphic Design' className='service-icon'/>
        </div>
        <div className='service-text-box'>
          <h3>Графический Дизайн.</h3>
          <p>Наши дизайнеры создают привлекательные и запоминающиеся визуальные решения для вашего бизнеса. Логотипы, фирменный стиль, рекламные материалы – все это мы делаем на высоком уровне, учитывая ваши пожелания и требования. Мы также предлагаем услуги по созданию инфографики, иллюстраций и анимации, чтобы ваш бренд выглядел современно и профессионально.</p>
          <button className='service-button' onClick={handleShowOffCanvas}>подробнее</button>
        </div>
      </div>

      <div className='service-card'>
        <div className='service-image-box'>
          <img src={mobile_dev_icon} alt='Mobile Development' className='service-icon'/>
        </div>
        <div className='service-text-box'>
          <h3>Мобильная разработка.</h3>
          <p>Мы разрабатываем мобильные приложения для iOS и Android, которые помогут вашему бизнесу быть ближе к клиентам. Удобные и функциональные приложения создаются с учетом всех современных требований и тенденций. Наши услуги включают в себя полный цикл разработки, от концепции до публикации и поддержки приложений, обеспечивая их высокую производительность и безопасность.</p>
          <button className='service-button' onClick={handleShowOffCanvas}>подробнее</button>
        </div>
      </div>

      <div className='service-card reverse'>
        <div className='service-image-box'>
          <img src={seo} alt='Graphic Design' className='service-icon'/>
        </div>
        <div className='service-text-box'>
          <h3>SEO</h3>
          <p>Наши эксперты по SEO помогут вашему сайту занять высокие позиции в поисковых системах. Мы проводим комплексную оптимизацию, анализируем ключевые слова и создаем качественный контент, чтобы привлечь больше целевого трафика. Мы также предлагаем услуги по локальному SEO, оптимизации мобильной версии сайта и аудиту текущей стратегии, чтобы обеспечить максимальную видимость вашего бизнеса в интернете.</p>
          <button className='service-button' onClick={handleShowOffCanvas}>подробнее</button>
        </div>
      </div>
      
      <div className='service-card'>
        <div className='service-image-box'>
          <img src={ip_telep} alt='Mobile Development' className='service-icon'/>
        </div>
        <div className='service-text-box'>
          <h3>IP-Телефония</h3>
          <p>Мы предоставляем решения по IP-телефонии, которые позволяют снизить затраты на связь и улучшить качество коммуникаций. Наши системы легко интегрируются с другими бизнес-процессами и обеспечивают надежную работу. Мы предлагаем как готовые решения, так и индивидуальные настройки, чтобы ваша система связи соответствовала всем вашим потребностям.</p>
          <button className='service-button' onClick={handleShowOffCanvas}>подробнее</button>
        </div>
      </div>

    </div>
  );
};

export default ServicePageBody;