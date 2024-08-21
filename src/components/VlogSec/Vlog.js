import React from 'react';
import './Vlog.css';

const Vlog = () => {

    return (
        <div className='vlog' id='Vlog'>
            <div className='team_main_text'>НАШ БЛОГ</div>
            <div className="pink-dash"></div>
            <div className='Vlog-items'>
                <div className="carousel-item">
                    <div className="carousel-image-container">
                        <img src="/assets/vlog_img_one.JPG" alt="" className='carousel-image' />
                    </div>
                    <div className="carousel-text">
                        <div className="text-left">
                            <div className='orange_box'><img src="/assets/blank_img.svg" alt=""/></div>
                            <div className='orange_box_text'>
                                18
                                <div>Июнь</div>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className='text-right-title'>Лето – это время, когда мы все встремимся отдохнуть, набраться сил и вдохновения</div>
                            <div>Команда "Possible" не стала исключением и отправилась на дачу, чтобы насладиться теплыми днями и природой. Вот как прошел наш летний отдых</div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="carousel-image-container">
                        <img src="/assets/vlog_img_two.jpg" alt="" className='carousel-image' />
                    </div>
                    <div className="carousel-text">
                        <div className="text-left">
                            <div className='orange_box'><img src="/assets/blank_img.svg" alt=""/></div>
                            <div className='orange_box_text'>
                                20
                                <div>Июнь</div>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className='text-right-title'>Команда "Possible" Ищет Партнера для Совместных Успехов</div>
                            <div>Команда "Possible" активно развивается и стремится к новым горизонтам. Мы достигли значительных успехов и готовы делиться своими достижениями и ресурсами с новыми партнерами. Вместе мы сможем достичь еще большего!</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Vlog;
