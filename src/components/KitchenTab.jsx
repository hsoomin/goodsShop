import React, { useState } from 'react';
import KitchenProducts from '../data/KitchenProducts.json';
import './KitchenTab.scss';


const KitchenTab = () => {
    const [activeTab, setActiveTab] = useState('new');
    const filteredProducts = KitchenProducts.filter(
        (product) => product.category === activeTab
    );

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="KitchenTab">
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
                {filteredProducts.map((product) => (
                    <li key={product.id}>
                        <span className="tab-img">
                            <img src={product.imageUrl} alt="" />
                        </span>
                        <span className="tab-title">{product.title}</span>
                        <span className="tab-price">{product.price}</span>
                    </li>
                ))}
            </div>
        </div>
    );
};

export default KitchenTab;
