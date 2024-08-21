import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer' id='Footer'>
            <div className='footer_container'>
                <div className='footer_contact_headline'>НАШИ КОНТАКТЫ</div>
                <div className='footer_content'>
                    <div className='footer_address'>
                        <div className='footer_address_item'>
                            <img className='footer_icon' src="/assets/location_icon.svg" alt='Location Icon' />
                            <div>Город Ташкент, Яшнабадский район, Улица Боткина 5a</div>
                        </div>
                        <div className='footer_rights'>Все права защищены</div>
                    </div>
                    <div className='footer_contact_numbers'>
                        <div className='footer_contact_item'>
                            <img className='footer_icon' src="/assets/telephone_icon.svg" alt='Telephone Icon' />
                            <div>+998 99 522 32 09</div>
                        </div>
                        <div className='footer_contact_item'>
                            <img className='footer_icon' src="/assets/telephone_icon.svg" alt='Telephone Icon' />
                            <div>+998 95 833 10 20</div>
                        </div>
                    </div>
                    <div className='footer_social_media'>
                        <div className='footer_social_icons'>
                            <a href="https://t.me/possible_company"><img className='footer_icon' src="/assets/telegram_icon.svg" alt='Telegram Icon' /></a>
                            <a href="https://www.instagram.com/possible_company_?igsh=MTFqcWJjOHJ5M3dtNA=="><img className='footer_icon' src="/assets/instagram_icon.svg" alt='Instagram Icon' /></a>
                            <a href="https://www.facebook.com/profile.php?id=100090031102218&locale=ru_RU"><img className='footer_icon' src="/assets/facebook_icon.svg" alt='Facebook Icon' /></a>
                        </div>
                        <div className='footer_email'>
                            <img className='footer_icon' src="/assets/email_icon.svg" alt='Email Icon' />
                            <div>possibleuz@gmail.com</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
