import { AiTwotoneHeart } from "react-icons/ai"; 
import { AiOutlineHeart } from "react-icons/ai"; 
import React, { useState, useEffect } from 'react';
import './Interior.scss'

const Interior = () => {
    const interiorProducts = [
        {
            id: 1,
            imageUrl: "/img/interior/in01.jpg",
            title: "스피아노 망고 푸딩 단스탠드 SS-5900S",
            price: "61900",
        },
        {
            id: 2,
            imageUrl: "img/interior/in02.png",
            title: "뽀글이 개구리 인형",
            price: "23800",
        },
        {
            id: 3,
            imageUrl: 'img/interior/in03.jpg',
            title: " 괴마옥 선인장 미니화분",
            price: "22000"
        },
        {
            id: 4,
            imageUrl: 'img/interior/in04.jpg',
            title: "플러피 타임 클락 1'11'",
            price: "69000",
        },
        {
            id: 5,
            imageUrl: 'img/interior/in05.png',
            title: "PUFFY BED BOOK (sky/black)",
            price: "49000",
        },
        {
            id: 6,
            imageUrl: 'img/interior/in06.jpg',
            title: "IKEBANA HAUS |  gentle white gerbera",
            price: "41800",
        },
        {
            id: 7,
            imageUrl: 'img/interior/in07.jpg',
            title: "Line Floor Lamp Black",
            price: "380000",
        },
        {
            id: 8,
            imageUrl: 'img/interior/in08.jpg',
            title: "스트롤 소파 B type",
            price: "1690000",
        },
        {
            id: 9,
            imageUrl: 'img/interior/in09.jpg',
            title: " 힌｜페블 플레이트 M · 스톤 화이트",
            price: "38000",
        },
        {
            id: 10,
            imageUrl: 'img/interior/in10.jpg',
            title: "루미르R 포터블 램프 - 크롬 무선 조명",
            price: "165000",
        },
        { // kitchen으로 이동
            id: 11,
            imageUrl: 'img/interior/in11.jpg',
            title: "[HAY] Tint Wine Glass Set, Pink & Yellow (541224)",
            price: "67000",
        },
        {
            id: 12,
            imageUrl: 'img/interior/in12.jpg',
            title: "Quater chair (12 colors)",
            price: "530000",
        },
        {
            id: 13,
            imageUrl: 'img/interior/in13.jpg',
            title: "디어러브 디퓨저 150ml",
            price: "21000",
        },
        {
            id: 14,
            imageUrl: 'img/interior/in14.jpg',
            title: " GBH HOME STAINLESS STEEL TISSUE CASE (3 COLOR) 티슈케이스",
            price: "115000",
        },
        {
            id: 15,
            imageUrl: 'img/interior/in15.jpg',
            title: "[HAY] Analog Wall Clock, 2 colors",
            price: "159000",
        },
        {
            id: 16,
            imageUrl: 'img/interior/in16.jpg',
            title: "[PALASET] Bear Moneybox Beige 핀란드 곰돌이 저금통",
            price: "27000",
        },
        {
            id: 17,
            imageUrl: 'img/interior/in17.jpg',
            title: '티슈',
            price: '24000',
        },
        {
            id: 18,
            imageUrl: 'img/interior/in18.jpg',
            title: "라움 프라임 원목 침대 프레임",
            price: "398000",
        },
        {
            id: 19,
            imageUrl: 'img/interior/in19.jpg',
            title: "[Samuel Smalls] [주문제작] Super Tube Mirror - Large(6color)",
            price: "820000",
        },
        {
            id: 20,
            imageUrl: 'img/interior/in20.jpg',
            title: "애플 쿠션 암체어 원목 인테리어 의자",
            price: "118000",
        },
        {
            id: 21,
            imageUrl: 'img/interior/in21.jpg',
            title: "Friendly wave shelves 프랜들리 웨이브 선반",
            price: "1550000",
        },
        {
            id: 22,
            imageUrl: 'img/interior/in22.jpg',
            title: "윈터 원더랜드 성냥",
            price: "5500",
        },
        {
            id: 23,
            imageUrl: 'img/interior/in23.jpg',
            title: "글라스 빈티지 캔들 홀더 2type / 인테리어 오브제 촛대",
            price: "16900",
        },
        {
            id: 24,
            imageUrl: 'img/interior/in24.jpg',
            title: "Hinoki Pendulum Clock (BR)",
            price: "215000",
        },
        {
            id: 25,
            imageUrl: 'img/interior/in25.jpg',
            title: "세토 8칸 서랍장",
            price: "783000",
        },
    ];

    //더보기
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

    //하트 클릭 토글
    const [likedProducts, setLikedProducts] = useState([]);
    const toggleLike = (productId) => {
        if (likedProducts.includes(productId)) {
            setLikedProducts(likedProducts.filter(id => id !== productId));
        } else {
            setLikedProducts([...likedProducts, productId]);
        }
    };

    //탭메뉴
    const [activeTab, setActiveTab] = useState('all'); // Initialize with 'all'
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    
    //오름차순, 내림차순
    // const [sortOrder, setSortOrder] = useState('asc'); // Initialize with 'asc' for ascending
    // const toggleSortOrder = () => {
    //     setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    // };
    

    
    return (
        <div className='interior-wrap'>
            <div className="interior-header">
                <div className="title">
                    <h2>INTERIOR</h2>
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
            <div className="interior-container">
                <div className='interior-left'>
                    <div 
                    className= "sticky-container" 
                    >
                        <img src={process.env.PUBLIC_URL + '/img/sticky01.jpg'} alt="" className="sticky-img" />
                        <div className='sticky-txt'>
                            <h3>인테리어</h3>
                            <p>인테리어 모두보기</p>
                        </div>
                    </div>
                </div>
                <div className='interior-right'>
                    <div className="interior-right-inner">
                        {interiorProducts
                        .filter((product) => {
                            if (activeTab === 'low-price') {
                                return parseFloat(product.price) < 50000; // Example condition for low price
                            } else if (activeTab === 'high-price') {
                                return parseFloat(product.price) >= 50000; // Example condition for high price
                            }
                            return true; // Show all products for 'all' tab
                        })
                        .slice(0, visibleCount)
                        .map(product => (
                        <div key={product.id} className="interior-list">
                            <div className="interior-img">
                                <img src={process.env.PUBLIC_URL + product.imageUrl} alt="" />
                            </div>
                            <div className="interior-info">
                                <span className="info-title">{product.title}</span>
                                <span className="info-price">{product.price}</span>
                            </div>
                            <div className="interior-btn">
                                <button className='interior-cart' onClick={() => toggleLike(product.id)}>
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

export default Interior;    