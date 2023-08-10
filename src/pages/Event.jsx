import React, { useState } from 'react';
import "./Event.scss";


//
const Event = () => {
    const eventData = [
        {
            id: 1,
            imageUrl: 'img/event/ev1.jpg',
            title: '여름 특가',
            date: '23.07.04 ~ 23.08.31',
            status:'진행중인 이벤트',
        },
        {
            id: 2,
            imageUrl: 'img/event/ev2.jpg',
            title: '여름 특가',
            date: '2023.07.25 ~',
            status:'종료된 이벤트',
        },
        {
            id: 3,
            imageUrl: 'img/event/ev3.jpg',
            title: '끈적임없이 시원한 #여름러그',
            date: '2023.07.25 ~',
            status:'종료된 이벤트',
        },
        {
            id: 4,
            imageUrl: 'img/event/ev4.jpg',
            title: '취향 따라 채우는 식탁',
            date: '2023.07.25 ~',
            status:'종료된 이벤트',
        },
        {
            id: 5,
            imageUrl: 'img/event/ev5.jpg',
            title: '지난 한 달, 가장 주목받은 홈스타일링',
            date: '2023.07.25 ~',
            status:'진행중인 이벤트',
        },
        {
            id: 6,
            imageUrl: 'img/event/ev6.jpg',
            title: '여름 클리어런스',
            date: '2023.07.25 ~',
        },
        {
            id: 7,
            imageUrl: 'img/event/ev7.jpg',
            title: '여름 특가',
            date: '2023.07.25 ~',
            status:'종료된 이벤트',
        },
        {
            id: 8,
            imageUrl: 'img/event/ev8.jpg',
            title: '여름 특가',
            date: '2023.07.25 ~',
            status:'진행중인 이벤트',
        },
        {
            id: 9,
            imageUrl: 'img/event/ev9.jpg',
            title: '1인 가구를 위한 홈스타일링 제안',
            date: '2023.07.25 ~',
            status:'진행중인 이벤트',
        },
        {
            id: 10,
            imageUrl: 'img/event/ev10.jpg',
            title: 'HOT 신상! 특가로 가장 먼저 만나보세요.',
            date: '23.08.08 ~ 23.09.08',
            status:'진행중인 이벤트',
        },
        {
            id: 11,
            imageUrl: 'img/event/ev11.jpg',
            title: '모두를 만족시키는 식탁',
            date: '2023.07.25 ~',
            status:'진행중인 이벤트',
        },
        {
            id: 12,
            imageUrl: 'img/event/ev12.jpg',
            title: '여름 소재 모아보기',
            date: '2023.07.25 ~',
            status:'진행중인 이벤트',
        },
        {
            id: 13,
            imageUrl: 'img/event/ev13.jpg',
            title: '먼지 없이 깔끔한 우리집 만들기',
            date: '2023.07.25 ~',
            status:'진행중인 이벤트',
        },
        {
            id: 14,
            imageUrl: 'img/event/ev14.jpg',
            title: '공간을 바꾸는 커튼',
            date: '2023.07.25 ~',
            status:'진행중인 이벤트',
        },
    ];

    const [selectedTab, setSelectedTab] = useState('진행중인 이벤트');

    const handleTabClick = (status) => {
        setSelectedTab(status);
    };

    const filteredEvents = eventData.filter((event) => event.status === selectedTab);

    return (
        <div className='event'>
            <div className='container'>
                <h2>EVENT</h2>
                <div className='event-tab'>
                    <ul className='tab-menu'>
                        {['진행중인 이벤트', '종료된 이벤트'].map((status) => (
                            <li
                                key={status}
                                className={selectedTab === status ? "active" : ""}
                                onClick={() => handleTabClick(status)}
                            >
                                {status}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='event-list'>
                    <ul>
                        {filteredEvents.map((event) => (
                            <li key={event.id}>
                                <span className="ev-img"><img src={event.imageUrl} alt="" /></span>
                                <span className="ev-title">{event.title}</span>
                                <span className="ev-date">{event.date}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Event;
