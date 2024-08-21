import React from 'react';
import './OurServices.css';

const About = () => {
    return (    
        <div className='about' id='AboutUs'>
            <div className='container'>  
                <div className='section-two-main-text'>ПОЧЕМУ ИМЕННО МЫ?</div>
                <div className='pink-dash'></div>
                <div className='section-two-sub-text'>Наша миссия — помочь вашему бизнесу расти, особенно в финансовом отношении.</div>
                <div className='services-container'>
                    <div className='service-item'>
                        <img className='side_image' src="/assets/laptop_pic_one.svg" alt='' />
                        <div className='icon-side-texts'>
                            <div><img className='red_icons' src="/assets/red_icon_one.svg" alt='' /></div>
                            <div>
                                <div className='mini_title'>КРУТАЯ ЭКСПЕРТИЗА</div>
                                <div>Обычно, к нам приходят Клиенты, которые уже «обожглись» по рынку, работая с непрофессионалами и людьми, которые берут мало денег, плохо разбираются и пытаются заработать количеством, а не качеством проектов. Над проектами наших Клиентов работают несколько специалистов.</div>
                            </div>
                        </div>
                    </div>
                    <div className='service-item'>
                        <img className='center_image' src="/assets/laptop_pic_two.svg" alt='' />
                        <div className='icon-texts'>
                            <div><img className='red_icons' src="/assets/red_icon_two.svg" alt='' /></div>
                            <div>
                                <div className='mini_title'>ОПЫТНЫЕ СПЕЦИАЛИСТЫ</div>
                                <div>Наша команда состоит из высококвалифицированных специалистов, обладающих обширным опытом и экспертизой в своей области. Мы постоянно совершенствуем свои знания и навыки, следим за последними тенденциями и инновациями, чтобы обеспечить нашим клиентам лучшие решения и сервис.</div>
                            </div>
                        </div>
                    </div>
                    <div className='service-item'>
                        <img className='side_image' src="/assets/laptop_pic_three.svg" alt='' />
                        <div className='icon-side-texts'>
                            <div><img className='red_icons' src="/assets/red_icon_three.svg" alt='' /></div>
                            <div>
                                <div className='mini_title'>ФОКУС НА ПРОЕКТЕ</div>
                                <div>Мы терпеть не можем «конвейерный» подход, берем мало Клиентов и глубоко прорабатываем рекламные кампании для каждого. В среднем, наши специалисты работают с 3–7 проектами одновременно и могут уделить достаточно времени и фокуса.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
