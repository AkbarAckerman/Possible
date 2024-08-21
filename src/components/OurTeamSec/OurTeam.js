import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './OurTeam.css';

const OurTeam = () => {

    const teamMembers = [
        { name: "Шукуров Абдуғани", profession: "IT эксперт, основатель и руководитель компании POSSIBLE", img: "/assets/5.png" },
        { name: "Имомалиев Азизжон", profession: "Профессионал SMM специалист, таргетолог, content-maker, Business Development Manager", img: "/assets/1.png" },
        { name: "Абдухалилов Хабибуллох", profession: "Ведущий программист, Full-stack разработчик", img: "/assets/8.png"  },
        { name: "Тургунходжаев Абурахмонходжа", profession: "Мобил разработчик, IT архитектор", img: "/assets/6.png"  },
        { name: "Рахматуллаев Бахтиёр", profession: "IT hunter, Sales and Management, Business Development Manager", img: "/assets/2.png"  },
        { name: "Хасанхужаев Азлархон", profession: "Back-end разработчик, опытный интегратор, Amocrm специалист", img: "/assets/3.png"  },
        { name: "Иномхужаев Акбархон", profession: "Front-end разработчик, ведущий интегратор", img: "/assets/7.png"  },
    ];

    const items = teamMembers.map((member, index) => (
        <div key={index} className="carousel-item">
            <img src={member.img} alt={member.name} className="team-member-photo" />
            <div className="team-member-name">{member.name}</div>
            <div className="team-member-profession">{member.profession}</div>
        </div>
    ));

    return (
        <div className='our_team' id='OurTeam'>
            <div className='team_main_text'>НАША КОМАНДА</div>
            <div className='pink-dash'></div>
            <div className='team_sub_text'>Многообразие опыта, компетенций и специализаций наших сотрудников гарантируют клиенту получение высококвалифицированных услуг.</div>
            <AliceCarousel
                items={items}
                responsive={{
                    0: { items: 1 },
                    480: { items: 2 },
                    768: { items: 3 },
                    1024: { items: 4 },
                    1440: { items: 5 },
                    1920: { items: 5 }
                }}
                autoPlay
                autoPlayInterval={4000}
                infinite
                disableButtonsControls
            />
        </div>
    );
};

export default OurTeam;
