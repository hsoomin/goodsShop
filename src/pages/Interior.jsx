import React, { useState , useEffect} from 'react';
import './Interior.scss';
import { AiOutlineHeart,AiTwotoneHeart } from "react-icons/ai"; 
import InteriorSlide from '../components/InteriorSlide';
import InteriorTab from '../components/InteriorTab';
import InteriorProducts from '../data/InteriorProducts.json';
// import { InteriorContainer, InteriorHeader, Title, CategoryList, CategoryItem, InteriorList, InteriorCard, InteriorImage, InteriorInfo, LikeButton, HeartIcon, LikeIcon} from '../styles/InteriorStyles';



const Interior = () => {
    
    const productsPerPage = 6; // 처음에 보이는 6개
    const [visibleProducts, setVisibleProducts] = useState(productsPerPage);

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200 ) {
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
    const [sortedProducts, setSortedProducts] = useState([...InteriorProducts]);
    //가격에서 , 빼기
    const removeCommas = (price) => {
        return price.replace(/,/g, '');
    };
    //
    const handleTabClick = (tab) => {
        setActiveTab(tab);

        if (tab === 'low-price') {
            setSortedProducts([...InteriorProducts].sort((a, b) => parseFloat(removeCommas(a.price)) - parseFloat(removeCommas(b.price))));
        } else if (tab === 'high-price') {
            setSortedProducts([...InteriorProducts].sort((a, b) => parseFloat(removeCommas(b.price)) - parseFloat(removeCommas(a.price))));
        } else {
            setSortedProducts([...InteriorProducts]);
        }
    };

    return (
        <div>
            <InteriorSlide />
            <InteriorTab />
            <div className='Interior'>
                <div className="interior-header" >
                    <div className="title">
                        <h2>Interior</h2>
                    </div>
                    <ul className="category">
                        <li 
                        className={activeTab === 'all' ? 'active' : ''}
                        onClick={() => handleTabClick('all')}>ALL</li>
                        <li 
                        className={activeTab === 'low-price' ? 'active' : ''}
                        onClick={() => handleTabClick('low-price')}>LOW PRICE</li>
                        <li 
                        className={activeTab === 'high-price' ? 'active' : ''}
                        onClick={() => handleTabClick('high-price')}>HIGH PRICE</li>
                    </ul>
                </div>
                <div className="interior-list">
                    {sortedProducts.slice(0, visibleProducts).map(product => (
                        <div className="interior-card" key={product.id}>
                            <div className="interior-img">
                                <img src={product.imageUrl} alt={product.title} />
                            </div>
                            <div className="interior-info">
                                <span className="info-title">{product.title}</span>
                                <span className="info-price">{product.price}원</span>
                            </div>
                            <div className='interior-btn'>
                                <button className='interior-cart' onClick={() => toggleLike(product.id)}>
                                    CART 
                                    <span className={likedProducts.includes(product.id) ? "like-icon" : "heart-icon"}>
                                        {likedProducts.includes(product.id) ? <AiTwotoneHeart/> : <AiOutlineHeart/>}
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

export default Interior;



