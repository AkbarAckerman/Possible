import React, { useState } from 'react';
import './Portfolio.css'

const Portfolio = () => {

    const [activeCategory, setActiveCategory] = useState('САЙТЫ');

    const categories = {
        'САЙТЫ': [
            { title: 'WEBSITE!', description: 'Description of Website 1' },
            { title: 'WEBSITE2', description: 'Description of Website 2' },
        ],
        'ПРИЛОЖЕНИЯ': [
            { title: 'APP1', description: 'Description of App 1' },
            { title: 'APP2', description: 'Description of App 2' },
        ],
        'ТЕЛЕГРАМ БОТЫ': [
            { title: 'Telegramm BOT1', description: 'Description of Bot 1' },
            { title: 'Telegramm BOT2', description: 'Description of Bot 2' },
        ],
        'СММ': [
            { title: 'SMM1', description: 'Description of SMM 1' },
            { title: 'SMM2', description: 'Description of SMM 2' },
        ],
        'ГРАФИКА': [
            { title: 'GRAPHIC1', description: 'Description of Graphic 1' },
            { title: 'GRAPHIC2', description: 'Description of Graphic 2' },
        ],
        'ИНТЕГРАЦИИ': [
            { title: 'Integration', description: 'Description of Ints' },
            { title: 'Integration', description: 'Description of Ints' },
        ],
    };

    return (
        <div className='portfolio' id='Portfolio'>
            <div className="client_main_text">ПОРТФОЛИО</div>
            <div className="pink-dash"></div>
            <navv className="portfolio_nav">
                {Object.keys(categories).map(category => (
                    <button
                        key={category}
                        className={`portfolio_nav_button ${activeCategory === category ? 'active' : ''}`}
                        onClick={() => setActiveCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </navv>
            <div className="portfolio_content">
                <div className="portfolio_section">
                    {categories[activeCategory].map((project, index) => (
                        <div key={index} className="project_card">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <button className="learn_more_button">УЗНАТЬ БОЛЬШЕ</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Portfolio