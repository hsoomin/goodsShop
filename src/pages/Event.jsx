import React from 'react';
import "./Event.scss";



const Event = () => {
    const eventData = [
        {
            id: 1,
            imageUrl: 'goodsShop/img/event/ev1.jpg',
            title: '여름 특가',
            date: '2023.07.25 ~',
        },
        {
            id: 2,
            imageUrl: 'goodsShop/img/event/ev2.jpg',
            title: '여름 특가',
            date: '2023.07.25 ~',
        },
        {
            id: 3,
            imageUrl: 'goodsShop/img/event/ev3.jpg',
            title: '여름 특가',
            date: '2023.07.25 ~',
        },
        {
            id: 4,
            imageUrl: 'goodsShop/img/event/ev4.jpg',
            title: '여름 특가',
            date: '2023.07.25 ~',
        },
        {
            id: 5,
            imageUrl: 'goodsShop/img/event/ev5.jpg',
            title: '여름 특가',
            date: '2023.07.25 ~',
        },
        {
            id: 6,
            imageUrl: 'goodsShop/img/event/ev6.jpg',
            title: '여름 특가',
            date: '2023.07.25 ~',
        },
        {
            id: 7,
            imageUrl: 'goodsShop/img/event/ev7.jpg',
            title: '여름 특가',
            date: '2023.07.25 ~',
        },
        {
            id: 8,
            imageUrl: 'goodsShop/img/event/ev8.jpg',
            title: '여름 특가',
            date: '2023.07.25 ~',
        },
        {
            id: 9,
            imageUrl: 'goodsShop/img/event/ev9.jpg',
            title: '여름 특가',
            date: '2023.07.25 ~',
        },
    ];

    return (
        <div className='event'>
            <div className='container'>
                <h2>EVENT</h2>
                <div className='event-list'>
                    <ul>
                        {eventData.map((event) => (
                            <li key={event.id}>
                            <span className="ev-img"><img src={event.imageUrl} alt="" /></span>
                            <span className="ev-title">{event.title}</span>
                            <span className="ev-date">{event.date}</span>
                            </li>
                        ))} 
                        {/* <li>
                            <span className="ev-img"><img src="img/event/ev1.jpg" alt="" /></span>
                            <span className="ev-title">여름특가</span>
                            <span className="ev-date">2023.07.25 ~</span>
                        </li>
                        <li>
                            <span className="ev-img"><img src="img/event/ev2.jpg" alt="" /></span>
                            <span className="ev-title">여름특가</span>
                            <span className="ev-date">2023.07.25 ~</span>
                        </li>
                        <li>
                            <span className="ev-img"><img src="img/event/ev3.jpg" alt="" /></span>
                            <span className="ev-title">여름특가</span>
                            <span className="ev-date">2023.07.25 ~</span>
                        </li>
                        <li>
                            <span className="ev-img"><img src="img/event/ev4.jpg" alt="" /></span>
                            <span className="ev-title">여름특가</span>
                            <span className="ev-date">2023.07.25 ~</span>
                        </li> */}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Event;
