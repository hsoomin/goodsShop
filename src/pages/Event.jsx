import React, { useState } from 'react';
import "./Event.scss";
import eventData from '../data/EventData.json'



const Event = () => {
    

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
