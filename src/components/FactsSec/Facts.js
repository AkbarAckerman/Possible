import React from 'react';
import './Facts.css'

const Facts = () => {

    return (
        <div className='facts' id='Facts'>
                        <div className='facts_main_text'>ФАКТЫ О НАС</div>
            <div className='facts_sub_text'>
            Мы гордимся нашими достижениями и ценим доверие наших клиентов. Вот несколько фактов о нас, которые помогут вам лучше узнать нашу компанию:
            </div>
            <div className='facts_container'>
                <div className='facts_item'>
                    <div className='facts_icon_box'>
                        <div><img className='fact_icons' src="/assets/red_icon_five.png" alt='Довольных клиентов' /></div>
                    </div>
                    <div>
                        <div className='fact_numbers'>100+</div>
                        <div className='facts_pink_dash'></div>
                        <div className='fact_label'>ДОВОЛЬНЫХ КЛИЕНТОВ</div>
                    </div>
                </div>
                <div className='facts_item'>
                    <div className='facts_icon_box'>
                        <div><img className='fact_icons' src="/assets/red_icon_six.png" alt='Довольных клиентов' /></div>
                    </div>
                    <div>
                        <div className='fact_numbers'>112+</div>
                        <div className='facts_pink_dash'></div>
                        <div className='fact_label'>ЗАКРЫТЫХ ПРОЕКТОВ</div>
                    </div>
                </div>
                <div className='facts_item'>
                    <div className='facts_icon_box'>
                        <div><img className='fact_icons' src="/assets/red_icon_seven.png" alt='Довольных клиентов' /></div>
                    </div>
                    <div>
                        <div className='fact_numbers'>12</div>
                        <div className='facts_pink_dash'></div>
                        <div className='fact_label'>СПЕЦИАЛИСТЫ</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Facts