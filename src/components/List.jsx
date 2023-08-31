import React, { useState , useEffect} from 'react';
import { AiOutlineHeart,AiTwotoneHeart } from "react-icons/ai"; 
import "./List.scss";


const List = ({products}) => {
    const productsPerPage = 6; // 처음에 보이는 6개
    const [visibleProducts, setVisibleProducts] = useState(productsPerPage);

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
                setVisibleProducts(prevVisibleProducts => prevVisibleProducts + productsPerPage);
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // 하트 토글
    const [likedProducts, setLikedProducts] = useState([]);
    const toggleLike = productId => {
        if (likedProducts.includes(productId)) {
            setLikedProducts(likedProducts.filter(id => id !== productId));
        } else {
            setLikedProducts([...likedProducts, productId]);
        }
    };

    const [activeTab, setActiveTab] = useState('new');

    // 가격에서 , 빼기
    const removeCommas = price => {
        return price.replace(/,/g, '');
    };

    // 정렬된 상품 목록을 저장할 상태
    const [sortedProducts, setSortedProducts] = useState(products);

    const handleTabClick = tab => {
        setActiveTab(tab);

        let sortedProductsCopy = [...products];

        if (tab === 'low-price') {
            sortedProductsCopy.sort(
                (a, b) => parseFloat(removeCommas(a.price)) - parseFloat(removeCommas(b.price))
            );
        } else if (tab === 'high-price') {
            sortedProductsCopy.sort(
                (a, b) => parseFloat(removeCommas(b.price)) - parseFloat(removeCommas(a.price))
            );
        }

        setSortedProducts(sortedProductsCopy);
    };


    return (
        <div className='List'>
            <div className='product-header'>
                <div className='title'>
                    <h2>Interior</h2>
                </div>
                <ul className='product-category'>
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
            <div className='product-list'>
                {sortedProducts.slice(0, visibleProducts).map(product => (
                    <div className='product-card' key={product.id}>
                        <div className="product-img">
                            <img src={product.imageUrl} alt={product.title} />
                        </div>
                        <div className="product-info">
                            <span className="info-title">{product.title}</span>
                            <span className="info-price">{product.price}원</span>
                        </div>
                        <div className='product-btn'>
                            <button className='cart' onClick={() => toggleLike(product.id)}>
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
    );
};

export default List;

