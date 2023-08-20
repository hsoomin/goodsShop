import React, { useState , useEffect} from 'react';
// import './Fabric.scss';
import KitchenSlide from '../components/KitchenSlide';
import KitchenTab from '../components/KitchenTab';
import KitchenProducts from '../data/KitchenProducts.json';
import { KitchenContainer, KitchenHeader, Title, CategoryList, CategoryItem, KitchenList, KitchenCard, KitchenImage, KitchenInfo, LikeButton, HeartIcon, LikeIcon} from '../styles/KitchenStyles';



const Kitchen = () => {
    
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
    const [sortedProducts, setSortedProducts] = useState([...KitchenProducts]);
    //가격에서 , 빼기
    const removeCommas = (price) => {
        return price.replace(/,/g, '');
    };
    //
    const handleTabClick = (tab) => {
        setActiveTab(tab);

        if (tab === 'low-price') {
            setSortedProducts([...KitchenProducts].sort((a, b) => parseFloat(removeCommas(a.price)) - parseFloat(removeCommas(b.price))));
        } else if (tab === 'high-price') {
            setSortedProducts([...KitchenProducts].sort((a, b) => parseFloat(removeCommas(b.price)) - parseFloat(removeCommas(a.price))));
        } else {
            setSortedProducts([...KitchenProducts]);
        }
    };

    return (
        <div>
            <KitchenSlide />
            <KitchenTab />
            <KitchenContainer>
                <KitchenHeader className="kitchen-header" >
                    <div className="title">
                        <Title>Kitchen</Title>
                    </div>
                    <CategoryList className="category">
                        <CategoryItem 
                        className={activeTab === 'all' ? 'active' : ''}
                        onClick={() => handleTabClick('all')}>ALL</CategoryItem>
                        <CategoryItem 
                        className={activeTab === 'low-price' ? 'active' : ''}
                        onClick={() => handleTabClick('low-price')}>LOW PRICE</CategoryItem>
                        <CategoryItem 
                        className={activeTab === 'high-price' ? 'active' : ''}
                        onClick={() => handleTabClick('high-price')}>HIGH PRICE</CategoryItem>
                    </CategoryList>
                </KitchenHeader>
                <KitchenList className="kitchen-list">
                    {sortedProducts.slice(0, visibleProducts).map(product => (
                        <KitchenCard className="kitchen-card" key={product.id}>
                            <KitchenImage className="kitchen-img">
                                <img src={product.imageUrl} alt={product.title} />
                            </KitchenImage>
                            <KitchenInfo className="kitchen-info">
                                <span className="info-title">{product.title}</span>
                                <span className="info-price">{product.price}원</span>
                            </KitchenInfo>
                            <div className='kitchen-btn'>
                                <LikeButton className='kitchen-cart' onClick={() => toggleLike(product.id)}>
                                    CART 
                                    <span className={likedProducts.includes(product.id) ? "like-icon" : "heart-icon"}>
                                        {likedProducts.includes(product.id) ? <HeartIcon/> : <LikeIcon/>}
                                    </span>
                                </LikeButton>
                            </div>
                        </KitchenCard>
                    ))}
                </KitchenList>
            </KitchenContainer>
        </div>
    );
};

export default Kitchen;



