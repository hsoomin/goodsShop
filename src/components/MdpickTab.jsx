import React, { useState } from 'react';

const MdpickTab = () => {
    const data = {
        interior: [
            {
                id: 1,
                imgSrc: "https://hsoomin.github.io/react_goodsShop/img/products/product_md1.jpg",
                name: "Interior Item 1",
                price: 10000,
                bg: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
            {
                id: 2,
                imgSrc: "https://hsoomin.github.io/react_goodsShop/img/products/product_md1.jpg",
                name: "Interior Item 1",
                price: 10000,
                bg: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
            {
                id: 3,
                imgSrc: "https://hsoomin.github.io/react_goodsShop/img/products/product_md1.jpg",
                name: "Interior Item 1",
                price: 10000,
                bg: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
        ],
        kitchen: [
            {
                id: 1,
                imgSrc: "https://hsoomin.github.io/react_goodsShop/img/products/product22.jpg",
                name: "Interior Item 1",
                price: 10000,
                bg: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
            {
                id: 2,
                imgSrc: "https://hsoomin.github.io/react_goodsShop/img/products/product22.jpg",
                name: "Interior Item 1",
                price: 10000,
                bg: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
            {
                id: 3,
                imgSrc: "https://hsoomin.github.io/react_goodsShop/img/products/product22.jpg",
                name: "Interior Item 1",
                price: 10000,
                bg: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
        ],
        fabric: [
            {
                id: 1,
                imgSrc: "https://hsoomin.github.io/react_goodsShop/img/products/product21.jpg",
                name: "Interior Item 1",
                price: 10000,
                bg: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
            {
                id: 2,
                imgSrc: "https://hsoomin.github.io/react_goodsShop/img/products/product21.jpg",
                name: "Interior Item 1",
                price: 10000,
                bg: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
            {
                id: 3,
                imgSrc: "https://hsoomin.github.io/react_goodsShop/img/products/product21.jpg",
                name: "Interior Item 1",
                price: 10000,
                bg: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
        ],
    };

    const [activeCategory, setActiveCategory] = useState('interior');

    const handleCategoryChange = (category) => {
        setActiveCategory(category);
    };

    return (
        <div className='mdpick'>
            <div className="mdCategories">
                <button onClick={() => handleCategoryChange('interior')} className={activeCategory === 'interior' ? 'active' : ''}>Interior</button>
                <button onClick={() => handleCategoryChange('kitchen')} className={activeCategory === 'kitchen' ? 'active' : ''}>Kitchen</button>
                <button onClick={() => handleCategoryChange('fabric')} className={activeCategory === 'fabric' ? 'active' : ''}>Fabric</button>
            </div>
            <div className="mdList">
                <ul>
                {data[activeCategory].map(item => (
                    <li key={item.id}>
                    <span className="md-img"><img src={item.imgSrc} alt="" /></span>
                    <span className="md-name">{item.name}</span>
                    <span className="md-price">{item.price}</span>
                    <div className="bg">{item.bg}</div>
                    </li>
                ))}
                </ul>
            </div>
        </div>
    );
};

export default MdpickTab;
