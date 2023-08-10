import { AiOutlineHeart } from "react-icons/ai"; 
import React, { useState, useEffect } from 'react';
import './Interior.scss'

const Interior = () => {
    const interiorProducts = [
        {
            id: 1,
            imageUrl: '/img/interior/in01.jpg',
            title: '망고 스탠드',
            price: 89000,
        },
        {
            id: 2,
            imageUrl: 'img/interior/in02.png',
            title: '티슈',
            price: '24,000',
        },
        {
            id: 3,
            imageUrl: 'img/interior/in03.jpg',
            title: '티슈',
            price: '24,000',
        },
        {
            id: 4,
            imageUrl: 'img/interior/in04.jpg',
            title: '티슈',
            price: '24,000',
        },
        {
            id: 5,
            imageUrl: 'img/interior/in05.png',
            title: '티슈',
            price: '24,000',
        },
        {
            id: 6,
            imageUrl: 'img/interior/in06.jpg',
            title: '티슈',
            price: '24,000',
        },
        {
            id: 7,
            imageUrl: 'img/interior/in07.jpg',
            title: '티슈',
            price: '24,000',
        },
        {
            id: 8,
            imageUrl: 'img/interior/in08.jpg',
            title: '티슈',
            price: '24,000',
        },
        {
            id: 9,
            imageUrl: 'img/interior/in09.jpg',
            title: '티슈',
            price: '24,000',
        },
        {
            id: 10,
            imageUrl: 'img/interior/in10.jpg',
            title: '티슈',
            price: '24,000',
        },
        {
            id: 11,
            imageUrl: 'img/interior/in11.jpg',
            title: '티슈',
            price: '24,000',
        },
        {
            id: 12,
            imageUrl: 'img/interior/in12.jpg',
            title: '티슈',
            price: '24,000',
        },
        {
            id: 13,
            imageUrl: 'img/interior/in13.jpg',
            title: '티슈',
            price: '24,000',
        },
        {
            id: 14,
            imageUrl: 'img/interior/in14.jpg',
            title: '티슈',
            price: '24,000',
        },
        {
            id: 15,
            imageUrl: 'img/interior/in15.jpg',
            title: '티슈',
            price: '24,000',
        },
        {
            id: 16,
            imageUrl: 'img/interior/in16.jpg',
            title: '티슈',
            price: '24,000',
        },
        {
            id: 17,
            imageUrl: 'img/interior/in17.jpg',
            title: '티슈',
            price: '24,000',
        },
        {
            id: 18,
            imageUrl: 'img/interior/in18.jpg',
            title: '티슈',
            price: '24,000',
        },
        {
            id: 19,
            imageUrl: 'img/interior/in19.jpg',
            title: '티슈',
            price: '24,000',
        },
        {
            id: 20,
            imageUrl: 'img/interior/in20.jpg',
            title: '티슈',
            price: '24,000',
        },
        {
            id: 21,
            imageUrl: 'img/interior/in21.jpg',
            title: '티슈',
            price: '24,000',
        },
        {
            id: 22,
            imageUrl: 'img/interior/in22.jpg',
            title: '티슈',
            price: '24,000',
        },
        {
            id: 23,
            imageUrl: 'img/interior/in23.jpg',
            title: '티슈',
            price: '24,000',
        },
        {
            id: 24,
            imageUrl: 'img/interior/in24.jpg',
            title: '티슈',
            price: '24,000',
        },
        {
            id: 25,
            imageUrl: 'img/interior/in25.jpg',
            title: '티슈',
            price: '24,000',
        },
    ];


    const initialVisibleCount = 6; // 처음에 보이는 6개
    const additionalVisibleCount = 3; // 스크롤 내릴때마다 보이는 3개

    const [visibleCount, setVisibleCount] = useState(initialVisibleCount);

    useEffect(() => {
        const handleScroll = () => {
            const scrollThreshold = 200;
            if (
                window.innerHeight + window.scrollY >=
                document.body.offsetHeight - scrollThreshold
            ) {
                setVisibleCount(prevCount =>
                    Math.min(prevCount + additionalVisibleCount, interiorProducts.length)
                );
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [interiorProducts.length]);




    return (
        <div className='interior-wrap'>
            <div className="interior-container">
                <div className='interior-left'>
                    <div className='sticky-txt'>
                        <h3>인테리어</h3>
                        <p>인테리어 모두보기</p>
                    </div>
                    <div className="sticky-container">
                        <img src={process.env.PUBLIC_URL + '/img/sticky01.jpg'} alt="" className="sticky-img" />
                    </div>
                </div>
                {/* <div className='interior-right'>
                    <div className="interior-right-inner">
                        <div className="interior-list">
                            <div className="interior-img">
                                <img src={process.env.PUBLIC_URL + '/img/interior/in01.jpg'} alt="" />
                            </div>
                            <div className="interior-info">
                                <span className="info-title">망고 스탠드</span>
                                <span className="info-price">89000</span>
                            </div>
                            <button className='interior-cart'>cart 
                                <span className="cart-icon"><AiOutlineHeart/></span>
                            </button>
                        </div>
                        <div className="interior-list">
                            <div className="interior-img">
                                <img src={process.env.PUBLIC_URL + '/img/interior/in02.png'} alt="" />
                            </div>
                            <div className="interior-info">
                                <span className="info-title">망고 스탠드</span>
                                <span className="info-price">89000</span>
                            </div>
                            <button className='interior-cart'>cart 
                                <span className="cart-icon"><AiOutlineHeart/></span>
                            </button>
                        </div>
                        <div className="interior-list">
                            <div className="interior-img">
                                <img src={process.env.PUBLIC_URL + '/img/interior/in03.jpg'} alt="" />
                            </div>
                            <div className="interior-info">
                                <span className="info-title">망고 스탠드</span>
                                <span className="info-price">89000</span>
                            </div>
                            <button className='interior-cart'>cart 
                                <span className="cart-icon"><AiOutlineHeart/></span>
                            </button>
                        </div>
                        <div className="interior-list">
                            <div className="interior-img">
                                <img src={process.env.PUBLIC_URL + '/img/interior/in04.jpg'} alt="" />
                            </div>
                            <div className="interior-info">
                                <span className="info-title">망고 스탠드</span>
                                <span className="info-price">89000</span>
                            </div>
                            <button className='interior-cart'>cart 
                                <span className="cart-icon"><AiOutlineHeart/></span>
                            </button>
                        </div>
                        <div className="interior-list">
                            <div className="interior-img">
                                <img src={process.env.PUBLIC_URL + '/img/interior/in01.jpg'} alt="" />
                            </div>
                            <div className="interior-info">
                                <span className="info-title">망고 스탠드</span>
                                <span className="info-price">89000</span>
                            </div>
                            <button className='interior-cart'>cart 
                                <span className="cart-icon"><AiOutlineHeart/></span>
                            </button>
                        </div>
                        <div className="interior-list">
                            <div className="interior-img">
                                <img src={process.env.PUBLIC_URL + '/img/interior/in01.jpg'} alt="" />
                            </div>
                            <div className="interior-info">
                                <span className="info-title">망고 스탠드</span>
                                <span className="info-price">89000</span>
                            </div>
                            <button className='interior-cart'>cart 
                                <span className="cart-icon"><AiOutlineHeart/></span>
                            </button>
                        </div>
                        <div className="interior-list">
                            <div className="interior-img">
                                <img src={process.env.PUBLIC_URL + '/img/interior/in01.jpg'} alt="" />
                            </div>
                            <div className="interior-info">
                                <span className="info-title">망고 스탠드</span>
                                <span className="info-price">89000</span>
                            </div>
                            <button className='interior-cart'>cart 
                                <span className="cart-icon"><AiOutlineHeart/></span>
                            </button>
                        </div>
                        <div className="interior-list">
                            <div className="interior-img">
                                <img src={process.env.PUBLIC_URL + '/img/interior/in01.jpg'} alt="" />
                            </div>
                            <div className="interior-info">
                                <span className="info-title">망고 스탠드</span>
                                <span className="info-price">89000</span>
                            </div>
                            <button className='interior-cart'>cart 
                                <span className="cart-icon"><AiOutlineHeart/></span>
                            </button>
                        </div>
                        <div className="interior-list">
                            <div className="interior-img">
                                <img src={process.env.PUBLIC_URL + '/img/interior/in01.jpg'} alt="" />
                            </div>
                            <div className="interior-info">
                                <span className="info-title">망고 스탠드</span>
                                <span className="info-price">89000</span>
                            </div>
                            <button className='interior-cart'>cart 
                                <span className="cart-icon"><AiOutlineHeart/></span>
                            </button>
                        </div>
                    </div>
                </div> */}
                <div className='interior-right'>
                    <div className="interior-right-inner">
                        {interiorProducts.slice(0, visibleCount).map(product => (
                        <div key={product.id} className="interior-list">
                            <div className="interior-img">
                                <img src={process.env.PUBLIC_URL + product.imageUrl} alt="" />
                            </div>
                            <div className="interior-info">
                                <span className="info-title">{product.title}</span>
                                <span className="info-price">{product.price}</span>
                            </div>
                                <button className='interior-cart'>CART 
                                <span className="cart-icon"><AiOutlineHeart/></span>
                            </button>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Interior;    

