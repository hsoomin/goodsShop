import './Interior.scss';
import FabricSlide from "../components/FabricSlide";
import InteriorList from "../components/InteriorList";


// const Interior = () => {

//     //더보기
//     const initialVisibleCount = 6; // 처음에 보이는 6개
//     const additionalVisibleCount = 3; // 스크롤 내릴때마다 보이는 3개
//     const [visibleCount, setVisibleCount] = useState(initialVisibleCount);

//     useEffect(() => {
//         const handleScroll = () => {
//             const stickyContainer = document.querySelector('.sticky-container');
//             const stickyTxt = document.querySelector('.sticky-txt');
//             const scrollThreshold = 100; // Adjust this threshold as needed
//             const isSticky = window.scrollY > stickyContainer.offsetTop - scrollThreshold;
//             if (isSticky) {
//                 stickyTxt.classList.add('visible');
//             } else {
//                 stickyTxt.classList.remove('visible');
//             }

//             if (
//                 window.innerHeight + window.scrollY >=
//                 document.body.offsetHeight - scrollThreshold
//             ) {
//                 setVisibleCount(prevCount =>
//                     Math.min(prevCount + additionalVisibleCount, interiorProducts.length)
//                 );
//             }
//         };

//         window.addEventListener('scroll', handleScroll);
//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);


//     //하트 클릭 토글
//     const [likedProducts, setLikedProducts] = useState([]);
//     const toggleLike = (productId) => {
//         if (likedProducts.includes(productId)) {
//             setLikedProducts(likedProducts.filter(id => id !== productId));
//         } else {
//             setLikedProducts([...likedProducts, productId]);
//         }
//     };

//     //탭메뉴
//     const [activeTab, setActiveTab] = useState('all'); // Initialize with 'all'
//     const handleTabClick = (tab) => {
//         setActiveTab(tab);
//     };
    
//     //오름차순, 내림차순
//     const sortedProducts = [...interiorProducts]; // Create a copy of interiorProducts
//     if (activeTab === 'low-price') {
//         sortedProducts.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
//     } else if (activeTab === 'high-price') {
//         sortedProducts.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
//     }

    
//     return (
//         <div className='interior-wrap'>
//             <InteriorSlide />
//             <div className="interior-header">
//                 <div className="title">
//                     <h2>INTERIOR</h2>
//                 </div>
//                 <ul className="category">
//                     <li
//                     className={activeTab === 'all' ? 'active' : ''}
//                     onClick={() => handleTabClick('all')}
//                     >
//                         ALL
//                     </li>
//                     <li
//                     className={activeTab === 'low-price' ? 'active' : ''}
//                     onClick={() => handleTabClick('low-price')}
//                     >
//                         LOW PRICE
//                     </li>
//                     <li
//                     className={activeTab === 'high-price' ? 'active' : ''}
//                     onClick={() => handleTabClick('high-price')}
//                     >
//                         HIGH PRICE
//                     </li>
//                 </ul>
//             </div>
//             <div className="interior-container">
//                 <div className='interior-left'>
//                     <div className= "sticky-container" >
//                         <img src={process.env.PUBLIC_URL + '/img/sticky01.jpg'} alt="" className="sticky-img" />
//                         <div className='sticky-txt'>
//                             <h3>INTERIOR</h3>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='interior-right'>
//                     <div className="interior-right-inner">
//                     {sortedProducts
//                     .slice(0, visibleCount)
//                     .map(product => (
//                         <div key={product.id} className="interior-list">
//                             <div className="interior-img">
//                                 <img src={process.env.PUBLIC_URL + product.imageUrl} alt="" />
//                             </div>
//                             <div className="interior-info">
//                                 <span className="info-title">{product.title}</span>
//                                 <span className="info-price">{product.price}원</span>
//                             </div>
//                             <div className="interior-btn">
//                                 <button className='interior-cart' onClick={() => toggleLike(product.id)}>
//                                     CART 
//                                     <span className={likedProducts.includes(product.id) ? "like-icon" : "heart-icon"}>
//                                         {likedProducts.includes(product.id) ? <AiTwotoneHeart /> : <AiOutlineHeart />}
//                                     </span>
//                                 </button>
//                             </div>
//                         </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Interior;    



const Interior = () => {

    return (
        <div className='interior-wrap'>
            {/* <FabricSlide /> */}
            <InteriorList />
        </div>
    );
};

export default Interior;