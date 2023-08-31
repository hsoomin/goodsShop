import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Tab.scss';

const Tab = ({ tabs, tabData }) => {
    const [activeTab, setActiveTab] = useState(tabs[0].value);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const filteredProducts = tabData.filter(
        (product) => product.category === activeTab
    );

    return (
        <div className="Tab">
            <div className="tab-menu">
                {tabs.map((tab) => (
                    <button
                        key={tab.value}
                        onClick={() => handleTabClick(tab.value)}
                        className={activeTab === tab.value ? 'active' : ''}
                    >
                        {tab.label}
                    </button>
                ))}
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

Tab.propTypes = {
    tabs: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired,
        })
    ).isRequired,
    tabData: PropTypes.array.isRequired,
};

export default Tab;
