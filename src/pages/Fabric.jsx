import { AiTwotoneHeart, AiOutlineHeart } from "react-icons/ai";
import React, { useState, useEffect } from 'react';
import FabricProducts from '../data/FabricProducts.json';
import './Fabric.scss';

const Fabric = () => {
    
    //스크롤 더보기
    const initialVisibleCount = 6; // 처음에 보이는 6개
    const additionalVisibleCount = 3; // 스크롤 내릴때마다 추가 3개
    const [visibleCount, setVisibleCount] = useState(initialVisibleCount);

    //스티키텍스트
    const [isStickyVisible, setIsStickyVisible] = useState(false); 
    const handleScroll = () => {
        // 스크롤 스티키텍스트
        if (window.scrollY >= 200) {
            setIsStickyVisible(true);
        } else {
            setIsStickyVisible(false);
        }
        //스크롤 더보기
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            setVisibleCount(prevCount => prevCount + additionalVisibleCount);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    //하트 토글
    const [likedProducts, setLikedProducts] = useState([]);
    const toggleLike = (productId) => {
        if (likedProducts.includes(productId)) {
            setLikedProducts(likedProducts.filter(id => id !== productId));
        } else {
            setLikedProducts([...likedProducts, productId]);
        }
    };

    //탭
    const [activeTab, setActiveTab] = useState('all');
    //오름차순, 내림차순
    const [sortedProducts, setSortedProducts] = useState([...FabricProducts]);
    //가격에서 , 빼기
    const removeCommas = (price) => {
        return price.replace(/,/g, '');
    };

    const handleTabClick = (tab) => {
        setActiveTab(tab);

        if (tab === 'low-price') {
            setSortedProducts([...FabricProducts].sort((a, b) => parseFloat(removeCommas(a.price)) - parseFloat(removeCommas(b.price))));
        } else if (tab === 'high-price') {
            setSortedProducts([...FabricProducts].sort((a, b) => parseFloat(removeCommas(b.price)) - parseFloat(removeCommas(a.price))));
        } else {
            setSortedProducts([...FabricProducts]);
        }
    };


    return (
        <div className="Fabric">
            <div className="fabric-header">
                <div className="title">
                    <h2>Fabric</h2>
                </div>
                <ul className="category">
                    <li
                    className={activeTab === 'all' ? 'active' : ''}
                    onClick={() => handleTabClick('all')}
                    >
                        ALL
                    </li>
                    <li
                    className={activeTab === 'low-price' ? 'active' : ''}
                    onClick={() => handleTabClick('low-price')}
                    >
                        LOW PRICE
                    </li>
                    <li
                    className={activeTab === 'high-price' ? 'active' : ''}
                    onClick={() => handleTabClick('high-price')}
                    >
                        HIGH PRICE
                    </li>
                </ul>
            </div>
            <div className="fabric-container">
                <div className="fabric-left">
                    <div className= "left-sticky" >
                        <img src={process.env.PUBLIC_URL + '/img/sticky03.jpg'} alt="" className="sticky-img" />
                        <div className={`sticky-txt ${isStickyVisible ? 'visible' : ''}`}>
                            <h3>Fabric</h3>
                        </div>
                    </div>
                </div>
                <div className='fabric-right'>
                    <div className="fabric-right-inner">
                    {sortedProducts
                    .slice(0, visibleCount)
                    .map(product => (
                        <div key={product.id} className="fabric-list">
                            <div className="fabric-img">
                                <img src={process.env.PUBLIC_URL + product.imageUrl} alt="" />
                            </div>
                            <div className="fabric-info">
                                <span className="info-title">{product.title}</span>
                                <span className="info-price">{product.price}원</span>
                            </div>
                            <div className="fabric-btn">
                                <button className='fabric-cart' onClick={() => toggleLike(product.id)}>
                                    CART 
                                    <span className={likedProducts.includes(product.id) ? "like-icon" : "heart-icon"}>
                                        {likedProducts.includes(product.id) ? <AiTwotoneHeart /> : <AiOutlineHeart />}
                                    </span>
                                </button>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Fabric;
