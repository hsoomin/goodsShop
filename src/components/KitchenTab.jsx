import React, { useState } from 'react';
import KitchenProducts from '../data/KitchenProducts.json';
import styled, { css } from 'styled-components';


const breakpoints = {
    phone: '320px',
    mobile: '768px',
};

const MediaMixin = {
    phone: (styles) => css`
        @media (max-width: ${breakpoints.phone}) {
            ${styles}
        }`,
    mobile: (styles) => css`
        @media (max-width: ${breakpoints.mobile}) {
            ${styles}
        } `
};

const TabContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    margin-top: 100px;
`;

const TabMenu = styled.div`
    display: flex;
    width: 100%;
    list-style: none;
    padding: 0;
    text-align: center;
    height: 70px;
`;

const TabButton = styled.button`
    width: 100%;
    outline: none;
    border: none;
    background: rgb(255, 255, 255);
    color: #333;
    border-top: 1px solid rgb(212, 212, 212);
    font-size: 18px;
    font-family: 'Ysabeau SC';
    &.active {
        background: rgb(48, 48, 51);
        color: #fff;
    }
`;

const TabList = styled.div`
    width: 100%;
    padding: 70px 100px 60px;
    box-sizing: border-box;
    text-align: center;
    background: rgb(48, 48, 51);
    color: #fff;
    display: flex;
    gap: 2rem;
    ${MediaMixin.mobile`
        padding: 40px;
        flex-direction: column;
        gap: 3rem;
    `}
`;

const TabItem = styled.li`
    width: 100%;
    display: flex;
    flex-direction: column;
    /* gap: 0.5rem; */
    justify-content: space-between;
    span {
        color: #fff;
        font-size: 16px;
    }
    ${MediaMixin.mobile`
        gap: .5rem;
    `}
`;

const TabImage = styled.span`
    width: 100%;
    img {
        width: 100%;
    }
`;
const TabName = styled.span`
    margin-top: 20px;
    font-size: 20px;
`;

const TabPrice = styled.span`
`;


const KitchenTab = () => {
    const [activeTab, setActiveTab] = useState('new');
    const filteredProducts = KitchenProducts.filter(
        (product) => product.category === activeTab
    );

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <TabContainer>
            <TabMenu>
                <TabButton
                    onClick={() => handleTabClick('new')}
                    className={activeTab === 'new' ? 'active' : ''}
                >
                    New arrivals
                </TabButton>
                <TabButton
                    onClick={() => handleTabClick('weekly')}
                    className={activeTab === 'weekly' ? 'active' : ''}
                >
                    Weekly best
                </TabButton>
            </TabMenu>
            <TabList>
                {filteredProducts.map((product) => (
                    <TabItem key={product.id}>
                        <TabImage>
                            <img src={product.imageUrl} alt="" />
                        </TabImage>
                        <TabName>{product.title}</TabName>
                        <TabPrice>{product.price}</TabPrice>
                    </TabItem>
                ))}
            </TabList>
        </TabContainer>
    );
};

export default KitchenTab;
