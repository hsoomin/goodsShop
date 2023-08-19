import React, { useState , useEffect} from 'react';
import './Fabric.scss';
import FabricSlide from '../components/FabricSlide';
import FabricTab from '../components/FabricTab';
import FabricProducts from '../data/FabricProducts.json';
import { AiTwotoneHeart, AiOutlineHeart } from "react-icons/ai";

const Fabric = () => {
    
    const productsPerPage = 6; // 처음에 보이는 6개
    const [visibleProducts, setVisibleProducts] = useState(productsPerPage);

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
                setVisibleProducts(prevVisibleProducts => prevVisibleProducts + productsPerPage);
            }
        };
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


    const [activeTab, setActiveTab] = useState('new');
    //오름차순, 내림차순
    const [sortedProducts, setSortedProducts] = useState([...FabricProducts]);
    //가격에서 , 빼기
    const removeCommas = (price) => {
        return price.replace(/,/g, '');
    };
    //
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
        <div>
            <FabricSlide />
            <FabricTab />
            <div className="Fabric">
                <div className="fabric-header">
                    <div className="title">
                        <h2>Fabric</h2>
                    </div>
                    <ul className="category">
                        <li 
                        className={activeTab === 'all' ? 'active' : ''}
                        onClick={() => handleTabClick('all')}>ALL</li>
                        <li 
                        className={activeTab === 'all' ? 'active' : ''}
                        onClick={() => handleTabClick('low-price')}>LOW PRICE</li>
                        <li 
                        className={activeTab === 'all' ? 'active' : ''}
                        onClick={() => handleTabClick('high-price')}>HIGH PRICE</li>
                    </ul>
                </div>
                <div className="fabric-list">
                    {sortedProducts.slice(0, visibleProducts).map(product => (
                        <div className="fabric-card" key={product.id}>
                            <div className="fabric-img">
                                <img src={product.imageUrl} alt={product.title} />
                            </div>
                            <div className="fabric-info">
                                <span className="info-title">{product.title}</span>
                                <span className="info-price">{product.price}원</span>
                            </div>
                            <div className='fabric-btn'>
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
    );
};

export default Fabric;



