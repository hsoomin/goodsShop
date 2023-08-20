import React, { useState , useEffect} from 'react';
// import './Fabric.scss';
import FabricSlide from '../components/FabricSlide';
import FabricTab from '../components/FabricTab';
import FabricProducts from '../data/FabricProducts.json';
import { FabricContainer, FabricHeader, Title, CategoryList, CategoryItem, FabricList, FabricCard, FabricImage, FabricInfo, LikeButton, HeartIcon, LikeIcon} from '../styles/FabricStyles';




const Fabric = () => {
    
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
            <FabricContainer className="Fabric">
                <FabricHeader className="fabric-header" >
                    <div className="title">
                        <Title>Fabric</Title>
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
                </FabricHeader>
                <FabricList className="fabric-list">
                    {sortedProducts.slice(0, visibleProducts).map(product => (
                        <FabricCard className="fabric-card" key={product.id}>
                            <FabricImage className="fabric-img">
                                <img src={product.imageUrl} alt={product.title} />
                            </FabricImage>
                            <FabricInfo className="fabric-info">
                                <span className="info-title">{product.title}</span>
                                <span className="info-price">{product.price}원</span>
                            </FabricInfo>
                            <div className='fabric-btn'>
                                <LikeButton className='fabric-cart' onClick={() => toggleLike(product.id)}>
                                    CART 
                                    <span className={likedProducts.includes(product.id) ? "like-icon" : "heart-icon"}>
                                        {likedProducts.includes(product.id) ? <HeartIcon/> : <LikeIcon/>}
                                    </span>
                                </LikeButton>
                            </div>
                        </FabricCard>
                    ))}
                </FabricList>
            </FabricContainer>
        </div>
    );
};

export default Fabric;

