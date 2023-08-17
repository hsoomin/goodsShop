import React, { useState } from 'react';
import './Tab.scss'
import FabricProducts from '../data/FabricProducts.json';



const Tab = () => {

    const [activeTab, setActiveTab] = useState('new');
    const filteredProducts = FabricProducts.filter(product => product.category === activeTab);
    
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };


    return (
        <div className='Tab'>
            <div className="tab-menu">
                <button
                    onClick={() => handleTabClick('new')}
                    className={activeTab === 'new' ? 'active' : ''}
                >
                    New arrivals
                </button>
                <button
                    onClick={() => handleTabClick('weekly')}
                    className={activeTab === 'weekly' ? 'active' : ''}
                >
                    Weekly best
                </button>
            </div>    
            <div className="tabList">
                {filteredProducts.map(product => (
                    <li key={product.id}>
                        <span className="tab-img">
                            <img src={product.imageUrl} alt="" />
                        </span>
                        <span className="tab-name">{product.title}</span>
                        <span className="tab-price">{product.price}</span>
                    </li>
                ))}
            </div>
        </div>
    );
};

export default Tab;

