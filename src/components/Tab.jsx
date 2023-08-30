import React, { useState } from 'react';
// import InteriorProducts from '../data/InteriorProducts.json';
import './InteriorTab.scss';
import Products from '../data/ProductData.json';


const InteriorTab = () => {
    const [activeTab, setActiveTab] = useState('new');
    const filteredProducts = Products.filter(
        (product) => product.category === activeTab
    );

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="InteriorTab">
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

export default InteriorTab;