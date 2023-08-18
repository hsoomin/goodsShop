import React, { useState } from 'react';

const MdTab = () => {
    const [activeTab, setActiveTab] = useState("HomeDeco");

    const products = [
        {
            id: 1,
            category: "Furniture",
            name: "side table",
            price: 380000,
            image: "product_md1.jpg"
        },
        {
            id: 2,
            category: "Fabric",
            name: "eco bag",
            price: 44000,
            image: "product_md2.jpg"
        },
        {
            id: 3,
            category: "HomeDeco",
            name: "keyring",
            price: 24000,
            image: "product_md3.jpg"
        },
        {
            id: 4,
            category: "Kitchen",
            name: "keyring",
            price: 24000,
            image: "product24.jpg"
        },
        {
            id: 5,
            category: "Lights",
            name: "keyring",
            price: 24000,
            image: "product04.jpg"
        },
        {
            id: 6,
            category: "Furniture",
            name: "chair",
            price: 24000,
            image: "product05.jpg"
        },
        {
            id: 7,
            category: "Kitchen",
            name: "커트러리",
            price: 24000,
            image: "product25.jpg"
        },
        {
            id: 8,
            category: "Lights",
            name: "keyring",
            price: 24000,
            image: "product_md3.jpg"
        },
        {
            id: 9,
            category: "HomeDeco",
            name: "keyring",
            price: 24000,
            image: "product_md3.jpg"
        },
        {
            id: 10,
            category: "HomeDeco",
            name: "keyring",
            price: 24000,
            image: "product_md3.jpg"
        },
        {
            id: 11,
            category: "Lights",
            name: "keyring",
            price: 24000,
            image: "product21.jpg"
        },
        {
            id: 12,
            category: "Kitchen",
            name: "장갑",
            price: 24000,
            image: "product07.jpg"
        },
        {
            id: 13,
            category: "Fabric",
            name: "커튼",
            price: 24000,
            image: "product13.jpg"
        },
        {
            id: 14,
            category: "Furniture",
            name: "keyring",
            price: 24000,
            image: "product_md3.jpg"
        },
        {
            id: 15,
            category: "Fabric",
            name: "keyring",
            price: 24000,
            image: "product14.jpg"
        },
    ];

    const filteredProducts = products.filter(product => product.category === activeTab);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className='mdtab'>
            <h2>BEST ITEM</h2>
            <div className="tabs">
                <button
                    onClick={() => handleTabClick('HomeDeco')}
                    className={activeTab === 'HomeDeco' ? 'active' : ''}
                >
                    홈데코
                </button>
                <button
                    onClick={() => handleTabClick('Furniture')}
                    className={activeTab === 'Furniture' ? 'active' : ''}
                >
                    가구
                </button>
                <button
                    onClick={() => handleTabClick('Lights')}
                    className={activeTab === 'Lights' ? 'active' : ''}
                >
                    조명
                </button>
                <button
                    onClick={() => handleTabClick('Fabric')}
                    className={activeTab === 'Fabric' ? 'active' : ''}
                >
                    패브릭
                </button>
                <button
                    onClick={() => handleTabClick('Kitchen')}
                    className={activeTab === 'Kitchen' ? 'active' : ''}
                >
                    주방
                </button>
            </div>
            <div className="mdList">
                <ul>
                    {filteredProducts.map(product => (
                        <li key={product.id}>
                            <span className="md-img"><img src={process.env.PUBLIC_URL + `/img/products/${product.image}`} alt="" /></span>
                            <span className="md-name">{product.name}</span>
                            <span className="md-price">{product.price}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default MdTab;
