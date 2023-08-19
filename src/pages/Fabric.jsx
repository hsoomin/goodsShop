import React, { useState , useEffect} from 'react';
// import './Fabric.scss';
import FabricSlide from '../components/FabricSlide';
import FabricTab from '../components/FabricTab';
import FabricProducts from '../data/FabricProducts.json';
import { AiTwotoneHeart, AiOutlineHeart } from "react-icons/ai";
import styled, {css} from 'styled-components';


//반응형
const breakpoints = {
    phone: '360px',
    mobile: '768px',
    tablet: '1023px',
    desktop:'1440px'
};
const MediaMixin = {
    phone: (styles) => css`
        @media (max-width: ${breakpoints.phone}) {
        ${styles}
        }`,
    mobile: (styles) => css`
        @media (max-width: ${breakpoints.mobile}) {
        ${styles}
        } `,
    tablet: (styles) => css`
        @media (max-width: ${breakpoints.tablet}) {
            ${styles}
        }`,
    desktop: (styles) => css`
        @media (max-width: ${breakpoints.desktop}) {
            ${styles}
        }`,
};

const FabricContainer = styled.div`
    position: relative;
    width: 100%;
    margin: 100px 0;
    padding: 0 15rem;
    box-sizing: border-box;
    
    ${MediaMixin.tablet`
        margin: 50px 0;
        padding: 0 8rem;
    `}
    ${MediaMixin.mobile`
        padding: 0 5rem;
    `}
    ${MediaMixin.phone`
        padding: 0 2rem;
    `}
`;

const FabricHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    position: relative;
`;

const Title = styled.h2`
    font-size: 40px;
`;

const CategoryList = styled.ul`
    display: flex;
    cursor: pointer;
    ${MediaMixin.mobile`
        flex-direction: column;
        text-align: right;
        font-size: 14px;
    `}
`;

const CategoryItem = styled.li`
    &:not(:first-child)::before {
        content: '';
        vertical-align: middle;
        display: inline-block;
        height: 15px;
        width: 1px;
        background-color: #979797;
        margin: 0 12px;
    }
    ${MediaMixin.mobile`
        &:not(:first-child)::before{ 
            display:none
        }
    `}
`;

const FabricList = styled.div`
    display: flex;
    width: 100%;
    gap: 2rem 1rem;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 30px;
    ${MediaMixin.desktop`
        gap:0;
    `}
`;

const FabricCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
    width: 32%;
    margin-bottom: 20px;
    ${MediaMixin.mobile`
        width: 48%;
    `}
    ${MediaMixin.phone`
        width: 100%;
    `}
`;

const FabricImage = styled.div`
    img {
        width: 100%;
    }
`;

const FabricInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
`;

const LikeButton = styled.button`
    width: 100%;
    border: none;
    background: #e7e6e4;
    color: #555;
    padding: 10px 30px;
    font-size: 16px;
    margin-top: 20px;
    position: relative;
`;

const HeartIcon = styled(AiTwotoneHeart)`
    font-size: 18px;
    float: right;
    color: tomato;
    cursor: pointer;
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translate(0, -50%);
`;

const LikeIcon = styled(AiOutlineHeart)`
    font-size: 18px;
    float: right;
    color: tomato;
    cursor: pointer;
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translate(0, -50%) scale(1.2);
    transition: 0.3s;
`;


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


